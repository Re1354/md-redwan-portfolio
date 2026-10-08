export type SkillGroup = {
  title: string;
  note: string;
  tone: 'accent' | 'ink';
  items: string[];
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  status: 'Live' | 'In progress' | 'University Rollout';
  images: string[];
  stack: string[];
  summary: string;
  highlights: string[];
  metrics: {label: string;value: string;}[];
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
};

export const profile = {
  name: 'Md. Redwan',
  firstName: 'Md.',
  lastName: 'Redwan',
  role: 'Software Engineer',
  credentials: 'B.Sc. Computer Science · Full-Stack Systems · Architecture',
  location: 'Dhaka, Bangladesh',
  email: 'redwantahsin2002@gmail.com',
  phone: '+880 1778-106042',
  portrait: "/hero-portrait.png", 
  resumeUrl: '#',
  intro: 'I build scalable full-stack applications, robust APIs, and production-ready systems. I specialize in backend architecture, relational databases, and modern React interfaces.',
  intro2: 'Currently focused on engineering highly reliable products and solving complex architectural tradeoffs from schema design to deployment.',
  links: [
    { label: 'GitHub', href: 'https://github.com/Re1354', kind: 'github' as const },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/md-redwan-737026284',
      kind: 'linkedin' as const
    },
    {
      label: 'Email',
      href: 'mailto:redwantahsin2002@gmail.com',
      kind: 'mail' as const
    }
  ],
  stats: [
    { value: '4', label: 'Production Apps' },
    { value: '30+', label: 'APIs Designed' },
    { value: '1,000+', label: 'Users Supported' }
  ]
};

export const about = {
  paragraphs: [
    'I am a Software Engineer studying Computer Science & Engineering at Daffodil International University (CGPA 3.85/4.00), focused on full-stack web architecture and reliable product delivery.',
    'I build real systems that solve tangible problems. My work includes engineering a multi-vendor campus marketplace with complex transactional states, and a university-wide admission test system serving thousands of candidates. I prioritize clean, maintainable code—whether I am structuring a relational PostgreSQL database, developing secure REST APIs, or building highly interactive dashboards with React and TanStack Query.',
    'Beyond writing code, I focus on production readiness. I manage VPS deployments, production domain configurations, and client-side optimizations like service workers for offline caching and image compression pipelines.'
  ],
  facts: [
    { label: 'Focus', value: 'Full-Stack Web Engineering' },
    { label: 'Architecture', value: 'REST APIs, RBAC, Relational DBs' },
    { label: 'Frontend', value: 'React, Tailwind, State Management' },
    { label: 'Backend', value: 'Node.js, Express, Prisma, Spring Boot' }
  ],
  timeline: [
    {
      period: '2023 — Present',
      title: 'Full-Stack Developer',
      org: 'Admission Test Management System',
      bullets: [
        'Engineered React-based portals used by candidates and administrators.',
        'Replaced a manual workflow for exam scheduling, online examinations, and result publication, processing exams for 1,000+ students.',
        'Integrated frontend with Django REST APIs for real-time data handling.',
        'Managed VPS deployment, domain setup, and web-server configuration.'
      ]
    }
  ]
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Engineering',
    note: 'Interactive, responsive, accessible',
    tone: 'accent',
    items: [
      'React, Context API, TanStack Query',
      'JavaScript (ES6+), HTML5, CSS3',
      'Tailwind CSS, Shadcn UI',
      'Recharts for data visualization',
      'Progressive Web Apps (Workbox)'
    ]
  },
  {
    title: 'Backend & Architecture',
    note: 'Secure, scalable, robust APIs',
    tone: 'ink',
    items: [
      'Node.js & Express.js',
      'RESTful API architecture',
      'JWT Authentication & OAuth',
      'Role-Based Access Control (RBAC)',
      'Prisma ORM & Data modeling',
      'Spring Boot (Java)'
    ]
  },
  {
    title: 'Database Systems',
    note: 'Relational and NoSQL',
    tone: 'ink',
    items: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Complex joins & aggregations',
      'Schema design & normalization'
    ]
  },
  {
    title: 'Cloud, Tools & Services',
    note: 'Deployment & integrations',
    tone: 'ink',
    items: [
      'Vercel & VPS Deployment',
      'Git, GitHub, CI/CD workflows',
      'Firebase (Auth, Cloud Messaging)',
      'Stripe Payment Gateway integration',
      'Cloudinary media pipelines',
      'Postman API testing'
    ]
  }
];

export const coreLanguages = [
  { name: 'JavaScript / TS', note: 'ES6+ · primary stack' },
  { name: 'Java', note: 'OOP · Spring Boot' },
  { name: 'SQL', note: 'PostgreSQL, MySQL' },
  { name: 'C / C++', note: 'DSA & fundamentals' }
];

export const coreFrameworks = [
  {
    name: 'React',
    role: 'Frontend UI',
    mark: 'R',
    usedIn: 'CampusCart · ZapShift · Building Management'
  },
  {
    name: 'Node.js',
    role: 'Backend Runtime',
    mark: 'N',
    usedIn: 'Developed 30+ REST APIs, Stripe Integrations'
  },
  {
    name: 'Express.js',
    role: 'API Layer',
    mark: 'E',
    usedIn: 'Routing, middleware, JWT Auth across projects'
  },
  {
    name: 'Prisma ORM',
    role: 'Data Access',
    mark: 'P',
    usedIn: 'PostgreSQL schema modeling and queries'
  }
];

export const supportingTools = [
  'TanStack Query',
  'Tailwind CSS',
  'Shadcn UI',
  'Firebase',
  'Stripe',
  'Cloudinary',
  'Postman',
  'Git / GitHub',
  'Vercel'
];

export const coursework = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Databases',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
  'Artificial Intelligence'
];

export const projects: Project[] = [
  {
    id: 'campuscart',
    name: 'CampusCart',
    tagline: 'Multi-vendor campus marketplace',
    year: '2024',
    role: 'Full-Stack Engineer',
    status: 'Live',
    images: ["/reference-images/image2.png"],
    stack: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Firebase', 'Workbox'],
    summary: 'A live multi-vendor e-commerce and peer-to-peer marketplace for the Daffodil campus community. Handles end-to-end purchasing, vendor management, and classifieds.',
    highlights: [
      'Built three role-based portals (Buyer, Vendor, Admin) supporting product catalog, cart/checkout, cash-on-delivery, and classifieds.',
      'Developed 30+ REST APIs with Node.js, Express, and Prisma ORM on PostgreSQL, implementing secure JWT authentication and RBAC.',
      'Engineered transactional order-state transitions and multi-stage order tracking.',
      'Integrated Firebase Cloud Messaging for cross-device push notifications on order events.',
      'Implemented a Progressive Web App (PWA) with Workbox service workers for offline caching.',
      'Automated Cloudinary media uploads with client-side image compression and deployed on a custom domain.'
    ],
    metrics: [
      { label: 'APIs', value: '30+' },
      { label: 'DB', value: 'PostgreSQL' },
      { label: 'Stack', value: 'Node/React' }
    ],
    liveUrl: '#',
    liveLabel: 'Live Site',
    repoUrl: 'https://github.com/Re1354'
  },
  {
    id: 'admission-system',
    name: 'Admission Test System',
    tagline: 'Digital exam platform',
    year: '2024',
    role: 'Frontend Developer',
    status: 'University Rollout',
    images: ["/reference-images/image3.png"],
    stack: ['React', 'Django REST', 'VPS', 'Git'],
    summary: 'A digital platform replacing the manual admission-examination process of the CSE Department, facilitating admission exams for nearly 1,000 students in the latest cycle.',
    highlights: [
      'Developed and maintained the React-based administrative and candidate portals used by students and exam administrators.',
      'Integrated the frontend with Django REST APIs for real-time data handling and dynamic content rendering.',
      'Replaced a manual workflow for exam scheduling, candidate management, online examinations, and result publication.',
      'Assisted with VPS deployment, production domain setup, and web-server configuration.'
    ],
    metrics: [
      { label: 'Users', value: '~1,000' },
      { label: 'Impact', value: 'Digitized' },
      { label: 'Role', value: 'Frontend/Ops' }
    ]
  },
  {
    id: 'zapshift',
    name: 'ZapShift',
    tagline: 'Logistics management platform',
    year: '2024',
    role: 'Full-Stack Engineer',
    status: 'Live',
    images: ["/reference-images/image4.png"],
    stack: ['React', 'TanStack Query', 'Node.js', 'MongoDB', 'Firebase', 'Stripe'],
    summary: 'A comprehensive parcel booking, delivery tracking, and logistics management web application built for operational efficiency.',
    highlights: [
      'Implemented Firebase authentication (OAuth/email), complex RBAC (Admin, Rider, User), and real-time parcel status tracking.',
      'Built interactive delivery-analytics dashboards with React, Recharts, TanStack Query, and Tailwind CSS.',
      'Developed secure REST APIs with Node.js, Express, and MongoDB.',
      'Integrated Stripe payment processing for seamless transactions and deployed on Vercel.'
    ],
    metrics: [
      { label: 'Auth', value: 'Firebase' },
      { label: 'Payments', value: 'Stripe' },
      { label: 'Dashboards', value: 'Recharts' }
    ],
    liveUrl: '#',
    liveLabel: 'Live Demo',
    repoUrl: 'https://github.com/Re1354'
  },
  {
    id: 'building-management',
    name: 'Building Management System',
    tagline: 'Tenant & rent administration',
    year: '2023',
    role: 'Full-Stack Engineer',
    status: 'Live',
    images: ["/reference-images/image5.png"],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Recharts'],
    summary: 'A tenant and rent management web application designed to streamline property administration and financial tracking.',
    highlights: [
      'Implemented JWT authentication, RBAC, and secure tenant CRUD operations.',
      'Engineered automated rent tracking and financial reporting systems.',
      'Built visual financial-reporting dashboards with React, Recharts, and Tailwind CSS.',
      'Developed robust REST APIs with Node.js and Express, backed by MongoDB.'
    ],
    metrics: [
      { label: 'Auth', value: 'JWT' },
      { label: 'Data', value: 'MongoDB' },
      { label: 'UI', value: 'Tailwind' }
    ],
    liveUrl: '#',
    liveLabel: 'Live Demo',
    repoUrl: 'https://github.com/Re1354'
  }
];

export const resume = {
  summary: 'A snapshot of my education, academic recognition, and commitment to continuous problem solving.',
  education: [
    {
      period: '2023 — Dec 2026 (Expected)',
      title: 'B.Sc. in Computer Science & Engineering',
      org: 'Daffodil International University',
      detail: 'Current CGPA 3.85 / 4.00. Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming (Java), Databases, Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence.'
    }
  ],
  awards: [
    {
      year: '2024',
      title: 'Java Spring Boot Course Certificate — completed full-stack Spring Boot training with hands-on project work.'
    },
    {
      year: '2023',
      title: '1st Place, Java course team project — Daffodil International University.'
    }
  ],
  problemSolving: [
    'Solved 300+ algorithmic problems on Codeforces and LeetCode.',
    'Daily practice in Data Structures and Algorithms to maintain strong computational fundamentals.'
  ]
};

export const navItems = [
  { label: 'Engineering', href: '#engineering' },
  { label: 'Work', href: '#projects' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#education' },
  { label: 'Contact', href: '#contact' }
];