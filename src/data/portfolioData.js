import resumePdf from '../assets/Raj_Akhare_Software_Engineer_Resume.pdf'

export const PROFILE = {
  name: 'Raj Akhare',
  initials: 'RA',
  title: 'Software Engineer',
  specialization: 'Backend Development | Python | FastAPI | PostgreSQL',
  secondaryExpertise: 'React, Next.js, JavaScript, REST APIs, Full Stack Development',
  location: 'Bhopal, Madhya Pradesh, India',
  availability: 'Open to Software Engineering & Backend Roles',
  email: 'rajakhare929@gmail.com',
  github: 'https://github.com/Rajakhare',
  linkedin: 'https://www.linkedin.com/in/raj-akhare',
  resumeUrl: resumePdf,
  resumeFileName: 'Raj_Akhare_Software_Engineer_Resume.pdf',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const HERO_CONTENT = {
  greeting: "Hi, I'm Raj Akhare.",
  role: 'Software Engineer',
  subtitle:
    'Backend-focused developer building secure APIs, scalable systems, and modern web applications.',
  description:
    'I specialize in Python, FastAPI, and PostgreSQL, with hands-on experience developing REST APIs, implementing authentication systems, integrating external services, and solving real-world engineering problems.',
}

export const ABOUT_CONTENT = {
  headingPrefix: 'Engineering Reliable',
  headingAccent: 'Backend Systems',
  paragraphs: [
    "I'm a Software Engineer focused on backend development, with hands-on professional experience building and maintaining web applications.",
    'My primary expertise lies in Python, FastAPI, PostgreSQL, and REST API development. I enjoy designing secure authentication systems, structuring maintainable backend architectures, and solving challenging technical problems.',
    'I also have experience working with React, Next.js, and JavaScript, which helps me understand complete application workflows and collaborate effectively across frontend and backend systems.',
    "I'm continuously improving my knowledge of system design, backend architecture, database optimization, and software engineering best practices.",
  ],
  stackSnapshot: [
    { label: 'Primary Stack', value: 'Python · FastAPI · PostgreSQL' },
    { label: 'Security & Auth', value: 'JWT · OAuth2 · RBAC · Argon2id' },
    { label: 'Frontend', value: 'React · Next.js · JavaScript' },
    { label: 'Base', value: 'Bhopal, Madhya Pradesh, India' },
  ],
}

export const EXPERIENCES = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Eulogik',
    duration: 'July 2026 – Present',
    location: 'Bhopal, India',
    type: 'Internship',
    responsibilities: [
      'Developed and maintained backend REST APIs using FastAPI and PostgreSQL.',
      'Worked on authentication, authorization, and third-party API integrations.',
      'Investigated and resolved production issues across backend endpoints and database operations.',
      'Worked with JWT, OAuth2, RBAC, and API validation.',
      'Collaborated with developers using Git, pull requests, code reviews, and API testing.',
      'Supported frontend integrations using React and Next.js.',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'OAuth2', 'RBAC', 'React', 'Next.js'],
  },
]

export const FEATURED_PROJECTS = [
  {
    number: '01',
    title: 'TaskFlow API',
    category: 'Backend Engineering / REST API',
    status: 'In Progress',
    visualType: 'architecture',
    description:
      'An asynchronous REST API project designed for task and workflow management, emphasizing secure authentication, clean architecture, database design, and maintainable backend development.',
    highlights: [
      'Layered architecture with routers, services, models, and schemas',
      'Asynchronous PostgreSQL operations using SQLAlchemy 2.0',
      'JWT access tokens and rotating refresh tokens with Argon2id hashing',
      'Role-based access control and Alembic database migrations',
      'Request tracing, security middleware, and interactive OpenAPI / Swagger docs',
    ],
    note: 'Active development: task workflows, activity logs, and automated integration tests are ongoing.',
    tech: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLAlchemy 2.0',
      'Alembic',
      'Pydantic',
      'JWT',
      'Argon2id',
    ],
    github: null,
    live: null,
  },
  {
    number: '02',
    title: 'Hospital Management System',
    category: 'Full Stack / MERN',
    status: null,
    visualType: 'fullstack',
    description:
      'A full-stack hospital management application featuring role-based access, appointment management, doctor and patient workflows, and administrative dashboards.',
    highlights: [
      'Admin, Doctor, and Patient role-based workflows',
      'JWT-based authentication and protected routes',
      'Appointment scheduling and management',
      'REST API architecture with MongoDB database models',
      'Administrative dashboard for hospital operations',
    ],
    note: null,
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    github: 'https://github.com/Rajakhare/Hospital_Management_System',
    live: 'https://hospital-management-system-frontend-y28u.onrender.com/',
  },
]

export const OTHER_PROJECTS = [
  {
    number: '03',
    title: 'Job Application Tracker CLI',
    category: 'Python Automation / CLI',
    description:
      'A Python command-line utility built with object-oriented design and SMTP integration to track job applications and automate status notifications.',
    tech: ['Python', 'OOP', 'smtplib', 'CLI'],
    github: 'https://github.com/Rajakhare/CLI_tool',
    live: null,
  },
]

export const SKILL_CATEGORIES = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Designing APIs, auth flows, and service-layer architectures.',
    skills: [
      'Python',
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Pydantic',
      'SQLAlchemy',
      'JWT',
      'OAuth2',
      'RBAC',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Relational and document data modeling, queries, and migrations.',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building responsive interfaces and integrating API workflows.',
    skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    id: 'tools',
    title: 'Tools & Development',
    description: 'Version control, API testing, schema migrations, and environments.',
    skills: ['Git', 'GitHub', 'Postman', 'Swagger / OpenAPI', 'Linux', 'VS Code', 'Alembic'],
  },
]

export const CONTACT_CONTENT = {
  headlinePrefix: "Let's Build Something",
  headlineAccent: 'Meaningful.',
  description:
    "I'm open to software engineering opportunities, backend development roles, and meaningful technical collaborations.",
}
