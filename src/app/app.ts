import { AfterViewInit, Component, HostListener, OnDestroy, inject, signal } from '@angular/core';
import { AnalyticsService } from './analytics.service';
import { ARROW, CHECK, FACTS, JOBS, LEARNING, LINKS, NAV, PROJECTS, SKILLS, SOCIALS, STATS } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly nav = NAV;
  protected readonly stats = STATS;
  protected readonly facts = FACTS;
  protected readonly skills = SKILLS;
  protected readonly learning = LEARNING;
  protected readonly jobs = JOBS;
  protected readonly projects = PROJECTS;
  protected readonly socials = SOCIALS;
  protected readonly links = LINKS;
  protected readonly arrow = ARROW;
  protected readonly check = CHECK;

  protected readonly theme = signal<'dark' | 'light'>(
    document.documentElement.dataset['theme'] === 'light' ? 'light' : 'dark',
  );
  protected readonly active = signal('');
  protected readonly menuOpen = signal(false);

  private observers: IntersectionObserver[] = [];

  constructor() {
    inject(AnalyticsService).init();
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  protected toggleTheme(): void {
    const next = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(next);
    document.documentElement.dataset['theme'] = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#F4F6FB' : '#0B1020');
    try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
  }

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) return;

    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    );
    document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));
    this.observers.push(spy);

    // Fade-up fallback where CSS scroll-driven animations are unsupported
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const native = CSS.supports('animation-timeline: view()');
    if (!native && !reduce) {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add('in');
            io.unobserve(e.target);
            setTimeout(() => e.target.classList.remove('fx-js', 'in'), 700);
          }),
        { threshold: 0.12 },
      );
      document.querySelectorAll('.fx').forEach((el) => {
        el.classList.add('fx-js');
        io.observe(el);
      });
      this.observers.push(io);
    }
  }

  ngOnDestroy(): void {
    this.observers.forEach((o) => o.disconnect());
  }
}
