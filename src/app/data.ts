export const PAL = ['#818CF8', '#A78BFA', '#22D3EE', '#34D399', '#FBBF24'];

export interface Tag { t: string; c: string; }
const tg = (a: string[]): Tag[] => a.map((t, i) => ({ t, c: PAL[i % PAL.length] }));

export const EMAIL = 'ahmedmkhalil.work@gmail.com';
export const LINKS = {
  github: 'https://github.com/Ahmeddkhalill',
  linkedin: 'https://www.linkedin.com/in/ahmedkhalil-backend/',
  gmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=' + EMAIL,
  whatsapp: 'https://wa.me/201080396780',
};

export const NAV = [
  { id: 'about', d: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0', label: 'About' },
  { id: 'skills', d: 'm16 18 6-6-6-6M8 6l-6 6 6 6', label: 'Skills' },
  { id: 'experience', d: 'M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2', label: 'Experience' },
  { id: 'projects', d: 'M4 3h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM15 3h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM4 14h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zM15 14h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z', label: 'Projects' },
  { id: 'contact', d: 'M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM3 7l9 6 9-6', label: 'Contact' },
];

export const STATS = [
  { n: '8', l: 'projects' },
  { n: '500+', l: 'NuGet downloads' },
  { n: '2026', l: 'Computer Science graduate' },
  { n: 'Cairo, Egypt', l: 'location' },
];

export const FACTS = [
  { bg: 'rgba(99,102,241,0.16)', c: '#818CF8', d: 'M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z', k: 'Location', v: 'Cairo, Egypt' },
  { bg: 'rgba(139,92,246,0.16)', c: '#A78BFA', d: 'M2 9l10-5 10 5-10 5-10-5zM6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5', k: 'Education', v: 'B.Sc. Computer Science, 2026' },
  { bg: 'rgba(34,211,238,0.14)', c: '#22D3EE', d: 'M3 8h18v12H3zM8 8V5h8v3', k: 'Role', v: 'Full Stack .NET Developer' },
  { bg: 'rgba(245,158,11,0.16)', c: '#F59E0B', d: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM16 8l-2.5 5.5L8 16l2.5-5.5z', k: 'Open to', v: 'Junior backend and full-stack roles' },
];

const grp = (title: string, items: string[], i: number, d: string) => ({ title, items, d, c: PAL[i] });
export const SKILLS = [
  grp('Software Fundamentals', ['OOP', 'SOLID Principles', 'Data Structures', 'Algorithms', 'Clean Architecture', 'CQRS', 'Result Pattern', 'Dependency Injection'], 0, 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5'),
  grp('Web Development', ['C#', 'ASP.NET MVC', 'Web API', 'RESTful APIs', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'], 1, 'M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18'),
  grp('Backend Technologies', ['ASP.NET Core', 'Entity Framework Core', 'LINQ', 'Dapper', 'ASP.NET Core Identity', 'JWT', 'MediatR', 'FluentValidation', 'Mapster', 'Hangfire', 'MailKit', 'Serilog', 'Seq'], 2, 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01'),
  grp('Database Management', ['SQL Server', 'SQLite', 'Database Design'], 3, 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3'),
  grp('Version Control', ['Git', 'GitHub'], 4, 'M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 9a9 9 0 01-9 9'),
];
export const LEARNING = ['Angular', 'Azure', 'CI/CD with GitHub Actions', 'Docker', 'Unit Testing with xUnit'];

export const JOBS = [
  { role: 'Backend Developer Intern', company: 'Egyptian Cabinet IDSC', mode: 'On-site', dates: 'Aug 2025', bullets: ['Built backend services using CQRS with MediatR, ASP.NET Core Identity, and JWT-based role-based access control.', 'Implemented multi-language localization and centralized logging with Serilog and Seq.'] },
  { role: 'Backend Developer Intern', company: 'Inovext LTD, England', mode: 'Remote', dates: 'Feb 2025 to Apr 2025', bullets: ['Developed backend services with C#, ASP.NET Core, EF Core, LINQ, and SQL Server.', 'Streamlined developer workflows and integration pipelines within a remote team.'] },
  { role: 'Backend Developer Intern', company: 'ElitesXTech', mode: 'Remote', dates: 'Aug 2023 to Apr 2024', bullets: ['Designed modular data access layers to abstract multi-branch data storage and authentication.', 'Built RESTful endpoints with Dapper and SQLite for high-frequency transaction logging and offline data sync, taking part in Agile stand-ups and code reviews.'] },
];

export interface Project { m: string; title: string; sub: string; href: string; label: string; demo?: string; tags: Tag[]; bullets: string[]; }
export const PROJECTS: Project[] = [
  { m: 'MA', title: 'MedAI Healthcare Platform', sub: 'Graduation project, team of 6', href: 'https://github.com/Ahmeddkhalill/MedAI', label: 'Code', demo: 'https://med-ai-pi-orpin.vercel.app/', tags: tg(['C#', 'ASP.NET Core', 'EF Core', 'JWT', 'SQLite', 'PyTorch integration']), bullets: ['34-endpoint ASP.NET Core API with EF Core, Identity, and JWT role-based access for patients, doctors, and admins.', 'Integrates a PyTorch X-ray classification model over HTTP, with a doctor review workflow to confirm or override AI results.', 'Appointment booking with slot capacity, overlap protection, and double-booking prevention.'] },
  { m: 'TT', title: 'Trainers Team Website', sub: 'Team project, 9+ months', href: 'https://trainers-team.com', label: 'Live site', tags: tg(['PHP', 'HTML', 'CSS', 'JS', 'Bootstrap', 'SQL Server']), bullets: ['Training platform offering professional programs in project management, memory improvement, critical thinking, and Training of Trainers (TOT), with online and offline courses showing duration, objectives, and trainers.', '43+ screens built by a team of four over 9+ months, with Fawry payment integration.'] },
  { m: 'SM', title: 'Survey Management System', sub: 'Personal project', href: 'https://github.com/Ahmeddkhalill/SurveyManagement', label: 'Code', tags: tg(['ASP.NET Core', 'Hangfire', 'SQL Server', 'HybridCache', 'API versioning']), bullets: ['38-endpoint polling API with a custom permission-based authorization policy provider, JWT refresh tokens, and account lockout.', 'Hangfire background and recurring jobs, MailKit email templates, HybridCache, rate limiting, API versioning, and health checks.'] },
  { m: 'SE', title: 'Software Company ERP', sub: 'Personal project', href: 'https://github.com/Ahmeddkhalill/CompanySys', label: 'Code', tags: tg(['Clean Architecture', 'CQRS', 'MediatR', 'FluentValidation', 'Serilog']), bullets: ['Project and task management API with Clean Architecture and CQRS (MediatR), 39 endpoints.', 'Permission-based authorization, JWT, and pipeline behaviors for validation and automatic audit logging.'] },
  { m: 'VM', title: 'Vezeeta Medical Platform', sub: 'Internship project at IDSC', href: 'https://github.com/Ahmeddkhalill/Vezeeta', label: 'Code', tags: tg(['CQRS', 'MediatR', 'Identity', 'Serilog', 'Seq']), bullets: ['Doctor booking API with CQRS and MediatR, 19 endpoints, and JWT role-based access.', 'Priced time slots, coupon discounts, booking confirmation, Arabic and English localization, and Serilog with Seq logging.'] },
  { m: 'GM', title: 'Game Management Portal', sub: 'Personal project', href: 'https://github.com/Ahmeddkhalill/GameZone', label: 'Code', tags: tg(['ASP.NET MVC', 'EF Core', 'Bootstrap', 'JavaScript']), bullets: ['ASP.NET Core MVC app for a game catalog with full CRUD, a many-to-many games and devices relation, and cover image upload.', 'Custom validation attributes, anti-forgery protection, a service layer with dependency injection, and AJAX deletion with confirmation.'] },
  { m: 'HE', title: 'Haunted Escape Room ERP', sub: 'Internship project at Inovext LTD', href: 'https://haunted-escape.com/', label: 'Client site', tags: tg(['C#', 'ASP.NET Core', 'Dapper', 'SQLite']), bullets: ['Sales-tracking backend for a multi-branch business using the Broker Pattern, with Dapper and SQLite REST APIs and offline branch sync.'] },
  { m: 'FT', title: 'FitnessTracker Library', sub: 'Team project at ElitesXTech', href: 'https://www.nuget.org/packages/FitnessTracker', label: 'NuGet', tags: tg(['C#', '.NET Standard', 'NuGet']), bullets: ['Contributed to a team-built .NET Standard library for calorie calculation: XML documentation and input validation. 500+ downloads on NuGet.'] },
];

const GH = 'M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z';
const LI = 'M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z';
const GM = 'M22 6.5v11a1.5 1.5 0 0 1-1.5 1.5H18V9.3l-6 4.5-6-4.5V19H3.5A1.5 1.5 0 0 1 2 17.5v-11c0-1.86 2.12-2.92 3.6-1.8L12 9.5l6.4-4.8C19.88 3.58 22 4.64 22 6.5z';
const WA = 'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.52 3.45A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z';
export const SOCIALS = [
  { label: 'Gmail', href: LINKS.gmail, d: GM },
  { label: 'WhatsApp', href: LINKS.whatsapp, d: WA },
  { label: 'LinkedIn', href: LINKS.linkedin, d: LI },
  { label: 'GitHub', href: LINKS.github, d: GH },
];

export const CHECK = 'M5 12l5 5L20 7';
export const ARROW = 'M5 12h14M13 6l6 6-6 6';
