import { Injectable, PLATFORM_ID, inject, isDevMode } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { environment } from '../environments/environment';

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

/**
 * Single GA4 implementation: loads gtag.js once, browser only, and sends
 * click events for any element carrying data-ga-event / data-ga-label.
 * Skipped under `ng serve` so local development does not pollute reports.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly doc = inject(DOCUMENT);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private started = false;

  init(): void {
    const id = environment.gaMeasurementId;
    if (!this.browser || this.started || isDevMode() || !id) return;
    this.started = true;

    const win = this.doc.defaultView as Window;
    win.dataLayer = win.dataLayer || [];
    win.gtag = function () {
      // gtag.js requires the `arguments` object, not a rest array
      // eslint-disable-next-line prefer-rest-params
      win.dataLayer!.push(arguments);
    };
    win.gtag('js', new Date());
    win.gtag('config', id); // sends the initial page_view

    const script = this.doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    this.doc.head.appendChild(script);

    this.doc.addEventListener('click', (e) => this.onClick(e));
  }

  private onClick(e: Event): void {
    const el = (e.target as Element | null)?.closest<HTMLElement>('[data-ga-event]');
    if (!el) return;
    this.event(el.dataset['gaEvent']!, { label: el.dataset['gaLabel'] });
  }

  event(name: string, params: Record<string, unknown> = {}): void {
    window.gtag?.('event', name, params);
  }
}
