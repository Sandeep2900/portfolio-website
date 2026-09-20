import type {
  PersonalInfo,
  StatItem,
  ExperienceItem,
  EducationItem,
  SkillCategory,
  ProjectItem,
  PhilosophyItem
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Sandeep Kumar Saket',
  role: 'Associate Software Engineer',
  specialization: 'Backend Developer • Ruby on Rails • APIs',
  tagline: 'I build scalable backend systems, APIs and production-ready software experiences.',
  bio: `I'm a Software Engineer focused on building reliable, scalable and maintainable backend systems. My primary expertise is Ruby on Rails, REST APIs, PostgreSQL and backend architecture, while I also have experience working across modern frontend technologies.`,
  email: 'sandeep.saket@example.com', // Placeholder easily updated by user
  location: 'India',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1-_N9X6ak55XNx6xy91RTNViyZwRIYzeB',
  resumeViewUrl: 'https://drive.google.com/file/d/1-_N9X6ak55XNx6xy91RTNViyZwRIYzeB/view?usp=drive_link'
};

export const stats: StatItem[] = [
  {
    value: '1+',
    numericValue: 1,
    suffix: '+',
    label: 'Years Experience',
    description: 'Professional backend & web development'
  },
  {
    value: '10+',
    numericValue: 10,
    suffix: '+',
    label: 'Technologies',
    description: 'Frameworks, databases & developer tools'
  },
  {
    value: '5+',
    numericValue: 5,
    suffix: '+',
    label: 'Projects',
    description: 'Production systems & applications built'
  },
  {
    value: '8.2',
    numericValue: 8.2,
    suffix: ' / 10',
    label: 'B.Tech CGPA',
    description: 'Computer Science & Engineering'
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: 'shriffle',
    company: 'Shriffle Technologies Pvt. Ltd.',
    role: 'Associate Software Engineer',
    period: 'December 2025 — Present',
    location: 'Bhopal, India',
    type: 'Full-time',
    current: true,
    description: [
      'Architecting and developing core backend services and scalable RESTful APIs using Ruby on Rails and PostgreSQL.',
      'Designing relational schema migrations, indexing strategies, and query optimization for high performance.',
      'Implementing background job processing pipelines using Redis and Sidekiq for asynchronous workflows.',
      'Developing authentication, token authorization, and secure role-based API access control mechanisms.',
      'Writing automated unit and integration test suites with RSpec and FactoryBot to safeguard production releases.',
      'Participating in CI/CD pipeline workflows and deploying services to production environments.'
    ],
    skills: [
      'Ruby on Rails',
      'REST APIs',
      'PostgreSQL',
      'Redis',
      'Sidekiq',
      'Authentication',
      'Database Design',
      'RSpec',
      'CI/CD',
      'Production Development'
    ]
  },
  {
    id: 'vistron',
    company: 'Vistron Infotech',
    role: 'Website Developer Intern',
    period: 'November 2025 — December 2025',
    location: 'Bhopal, India',
    type: 'Internship',
    current: false,
    description: [
      'Developed responsive web interfaces and assisted with web application development workflows.',
      'Integrated frontend user interfaces with backend endpoints and handled client-side state.',
      'Collaborated on site optimization, cross-browser compatibility, and component implementation.'
    ],
    skills: [
      'Web Development',
      'JavaScript',
      'Responsive Design',
      'Frontend Integration',
      'API Consumption'
    ]
  }
];

export const education: EducationItem = {
  degree: 'Bachelor of Technology',
  field: 'Computer Science & Engineering',
  institution: 'University Institute of Technology, Barkatullah University, Bhopal',
  location: 'Bhopal, Madhya Pradesh, India',
  cgpa: '8.2 / 10',
  period: 'Completed 2025',
  highlights: [
    'Major in Computer Science & Engineering with strong foundation in Data Structures, Algorithms, and Operating Systems',
    'Database Management Systems (RDBMS, Normalization, SQL, Transactions)',
    'Object-Oriented Software Design and System Architecture principles'
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'Ruby', highlight: true },
      { name: 'Ruby on Rails', highlight: true },
      { name: 'REST APIs', highlight: true },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'JWT Authentication', highlight: true },
      { name: 'API Design', highlight: true }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'MySQL' },
      { name: 'MongoDB' }
    ]
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', highlight: true },
      { name: 'TypeScript' },
      { name: 'JavaScript', highlight: true },
      { name: 'Tailwind CSS' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Bootstrap' }
    ]
  },
  {
    title: 'Tools & Infrastructure',
    skills: [
      { name: 'Redis', highlight: true },
      { name: 'Sidekiq', highlight: true },
      { name: 'Docker', highlight: true },
      { name: 'Git', highlight: true },
      { name: 'GitHub' },
      { name: 'GitHub Actions' },
      { name: 'Postman' },
      { name: 'Linux' }
    ]
  },
  {
    title: 'Testing',
    skills: [
      { name: 'RSpec', highlight: true },
      { name: 'FactoryBot', highlight: true },
      { name: 'Vitest' },
      { name: 'Playwright' }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'fixkar-ai',
    title: 'FixKar AI',
    subtitle: 'Autonomous AI Diagnostic & Verification Ecosystem',
    description:
      'FixKar AI is an intelligent service marketplace and workforce management platform connecting customers with verified service companies while helping businesses manage employees, jobs, service locations, and real-time operational logistics.',
    featured: true,
    type: 'Full Stack & Backend',
    techStack: [
      'Ruby on Rails',
      'React',
      'PostgreSQL',
      'Redis',
      'Sidekiq',
      'REST APIs',
      'AI Workflows',
      'SSE (Server-Sent Events)'
    ],
    tags: ['Ruby on Rails', 'Redis', 'Sidekiq', 'PostgreSQL', 'SSE', 'React'],
    features: [
      'Customer service booking flow with location-aware dispatching',
      'Multi-tenant company administration and service management portal',
      'Employee workforce scheduling, task assignment & tracking',
      'Real-time job updates & live operational telemetry via Server-Sent Events',
      'AI-powered diagnostic assistance & verification workflows',
      'Redis-backed real-time state synchronization & message brokering',
      'Asynchronous background processing with Sidekiq queues',
      'Comprehensive JWT token authentication and role-based access control'
    ],
    architecture: [
      'Rails API Gateway handling request validation, routing, and rate-limiting',
      'PostgreSQL relational schema with optimized foreign keys and indices',
      'Redis pub/sub engine powering event-driven real-time updates',
      'Sidekiq multi-worker threads handling notification dispatches and AI jobs'
    ],
    githubUrl: 'https://github.com',
    demoUrl: 'https://demo.example.com'
  },
  {
    id: 'distributed-queue-processor',
    title: 'Distributed Background Job Pipeline',
    subtitle: 'High-Concurrency Task Dispatcher with Redis & Sidekiq',
    description:
      'A resilient background task pipeline engineered to decouple long-running operations from web request threads, ensuring sub-100ms API response latency and reliable task execution with exponential retry mechanisms.',
    featured: false,
    type: 'API & System Architecture',
    techStack: ['Ruby', 'Redis', 'Sidekiq', 'Docker', 'PostgreSQL'],
    tags: ['Ruby', 'Redis', 'Sidekiq', 'Concurrency'],
    features: [
      'Priority-based job queue routing (critical, default, low-priority)',
      'Exponential backoff and dead-letter queue (DLQ) fault handling',
      'Redis memory caching layer reducing primary DB read overhead',
      'Docker containerized dev & test environments for deterministic execution'
    ],
    githubUrl: 'https://github.com'
  },
  {
    id: 'enterprise-rest-auth-api',
    title: 'Secure Multi-Tenant Auth & API Gateway',
    subtitle: 'Role-Based Access Control & Token Revocation Engine',
    description:
      'Production-grade RESTful API service implementing stateless JWT authentication, rotating refresh tokens, blacklist revocation, and granular permission middleware for protected resources.',
    featured: false,
    type: 'Microservice',
    techStack: ['Ruby on Rails', 'PostgreSQL', 'JWT', 'RSpec', 'FactoryBot'],
    tags: ['Rails API', 'JWT', 'Security', 'RSpec'],
    features: [
      'HMAC-SHA256 encrypted access tokens with short TTL and refresh tokens',
      'Role-based permission scopes (admin, manager, technician, customer)',
      '100% test coverage using RSpec request specs and FactoryBot fixtures',
      'Standardized JSON:API error envelopes and RFC-compliant response payloads'
    ],
    githubUrl: 'https://github.com'
  }
];

export const philosophies: PhilosophyItem[] = [
  {
    title: 'Clean Architecture',
    description: 'I prefer maintainable code, clear separation of responsibilities, and modular service objects.',
    iconName: 'Layers'
  },
  {
    title: 'API First',
    description: 'I focus on predictable, secure, and well-designed RESTful contracts that frontend clients love.',
    iconName: 'Network'
  },
  {
    title: 'Test Driven',
    description: 'I value automated testing and high confidence in production changes using RSpec and unit suites.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Continuous Learning',
    description: 'I continuously explore modern backend patterns, caching strategies, and distributed architectures.',
    iconName: 'Cpu'
  }
];
