import { CodeIcon, WebIcon, BackendIcon, DatabaseIcon, AIIcon, MethodologyIcon, GlobeIcon } from './components/SkillIcons.jsx'

export const roles = [
  { text: 'a Software Engineer', cat: null },
  { text: 'a Full-Stack Web Developer', cat: 'web' },
  { text: 'an AI-driven Developer', cat: 'ai' }
]

export const workingWith = [
  { label: 'React', cat: 'web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { label: 'Angular', cat: 'web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { label: 'ASP.NET Core', cat: 'web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { label: 'Node.js', cat: 'web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { label: 'SQL Server', cat: 'web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { label: 'Python', cat: 'ai', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { label: 'Jira', cat: 'web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' }
]

export const stats = [
  { count: 5, suffix: '', label: 'professional internships' },
  { count: 10, suffix: '+', label: 'projects completed' },
  { count: 3, suffix: '', label: 'spoken languages' }
]

export const education = [
  {
    date: '2025 — Present',
    title: "Engineering Degree, Software Engineering & Information Systems",
    org: 'Tek-up University, Tunis, Tunisia'
  },
  {
    date: '2024 — 2025',
    title: '1st Cycle Engineering, Software Engineering',
    org: 'Arab University of Sciences (UAS), Tunis, Tunisia'
  },
  {
    date: '2021 — 2024',
    title: "Bachelor's Degree in Information Technology",
    org: 'Higher Institute of Technological Studies (ISET), Nabeul, Tunisia'
  }
]

export const experience = [
  {
    date: 'Jul 2026 — Dec 2026',
    title: 'Web Developer — Final Year Internship',
    org: 'Beta · ArchFlow project',
    tags: ['ASP.NET Core', 'React', 'Python', 'Node.js'],
    bullets: [
      'Independently designed and built ArchFlow, a full-stack platform for managing architectural projects, connecting clients, architects and suppliers.',
      'Complete role-based workflow with permission management, real-time messaging and file sharing.',
      'AI-assisted quote estimation module and real-time site progress tracking.',
      'Integrated video conferencing and an experimental Whisper + LLM pipeline for meeting transcription.'
    ]
  },
  {
    date: 'Feb 2024 — May 2024',
    title: 'Web Developer — Final Year Internship',
    org: 'TIS Circuits · RhProject',
    tags: ['ASP.NET MVC', 'C#', 'SQL Server'],
    bullets: [
      'HR web solution digitalizing employee tracking: job descriptions and annual reviews (create, update, view, archive).',
      'Role and access management (employee, manager, director) with permission control.',
      'Automated hierarchical approval workflow with email notifications.',
      'Decision-making dashboard: headcount, history, rating distribution.'
    ]
  },
  {
    date: 'Jan 2023 — Feb 2023',
    title: 'Web Developer — End-of-Studies Internship',
    org: 'IBH web consulting · RHVision project',
    tags: ['Spring Boot', 'Angular', 'MongoDB'],
    bullets: [
      'ERP-HR application: employee management, payslips, and an AI-assisted training module.',
      'Docker containerization and a GitLab CI/CD pipeline for automated testing and deployment.',
      'Leave request workflow and an assistance chatbot for employees.'
    ]
  }
]

export const skillCategories = [
  { icon: CodeIcon,        title: 'Languages',        chips: ['C#', 'TypeScript', 'JavaScript', 'Java', 'PHP', 'HTML/CSS'] },
  { icon: WebIcon,         title: 'Web',              chips: ['React', 'Angular', 'ASP.NET MVC/Core', 'Node.js'] },
  { icon: BackendIcon,     title: 'Backend',          chips: ['Spring Boot', 'Symfony', 'REST API'] },
  { icon: DatabaseIcon,    title: 'Databases',        chips: ['SQL Server', 'Oracle', 'MySQL', 'MongoDB'] },
  { icon: AIIcon,          title: 'AI',               chips: ['Python', 'Whisper', 'LLM'] },
  { icon: MethodologyIcon, title: 'Methodology',      chips: ['Agile/Scrum', 'Postman', 'Swagger', 'Jira'] },
  { icon: GlobeIcon,       title: 'Spoken Languages', chips: ['Arabic — Native', 'French — Fluent', 'English — Professional'] }
]