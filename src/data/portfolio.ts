import type {
  Achievement,
  Capability,
  ExpertiseGroup,
  FocusArea,
  NavItem,
  Project
} from
  '../types/portfolio';

export const profile = {
  name: 'Md. Redwan',
  role: 'Full-Stack Software Developer',
  title: 'Software Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'redwantahsin2002@gmail.com',
  phone: '01778106042',
  whatsapp: 'https://wa.me/8801778106042',
  telegram: 'https://t.me/+8801778106042',
  github: 'https://github.com/Re1354',
  linkedin: 'https://linkedin.com/in/md-redwan-737026284',
  resume: '/projects/Resume/Md_Redwan_Resume (2).pdf',
  portrait: '/hero-portrait.png'
};

// Text wrapped in **double asterisks** renders as bold navy emphasis.
export const heroCopy = {
  greeting: "Hi, I'm Md. Redwan",
  intro:
    'A developer based in Bangladesh, building responsive **React** applications and secure **REST APIs** with **Node.js**, **Express**, **PostgreSQL** and **MongoDB**, with authentication, role-based access and deployment.',
  evidence:
    'Final-year CSE student · **Daffodil International University** · Graduating December 2026 | **300+ problems solved** across Codeforces, LeetCode & BeeCrowd',
  credentials:
    'Final-year CSE student · **Daffodil International University** · Graduating December 2026 | **300+ problems solved** across Codeforces, LeetCode & BeeCrowd'
};

export const rotatingBadgeText = 'FULL-STACK · REACT · NODE.JS · POSTGRESQL · ';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', primary: false },
  { id: 'focus', label: 'Focus', primary: true },
  { id: 'capabilities', label: 'Capabilities', primary: true },
  { id: 'projects', label: 'Projects', primary: true },
  { id: 'skills', label: 'Skills', primary: true },
  { id: 'achievements', label: 'Achievements', primary: false },
  { id: 'education', label: 'Education', primary: false },
  { id: 'contact', label: 'Contact', primary: false }];


export const focusAreas: FocusArea[] = [
  { index: '01', title: 'Full-Stack Development', items: ['React', 'Node.js', 'Express', 'REST APIs'] },
  { index: '02', title: 'Backend & Data', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma'] },
  { index: '03', title: 'Production Systems', items: ['Authentication', 'RBAC', 'PWA', 'Deployment'] }];


export const capabilities: Capability[] = [
  {
    index: '01',
    title: '30+ REST APIs',
    evidence: 'Designed and built **30+ REST APIs** with **Node.js, Express, and Prisma ORM** on **PostgreSQL**.',
    sources: ['CampusCart']
  },
  {
    index: '02',
    title: '~1,000 Students Supported',
    evidence: 'Admission exams run digitally for **nearly 1,000 students** in the latest cycle.',
    sources: ['Admission Test System']
  },
  {
    index: '03',
    title: 'Role-Based Access Control',
    evidence:
      '**Buyer, Vendor, and Admin** portals; **Admin, Rider, and User** roles; **JWT-secured** tenant access.',
    sources: ['CampusCart', 'ZapShift', 'Building Management']
  },
  {
    index: '04',
    title: 'Progressive Web Apps',
    evidence: '**Workbox service workers** for **offline caching**, with client-side image compression.',
    sources: ['CampusCart']
  },
  {
    index: '05',
    title: 'Payment & Service Integrations',
    evidence:
      '**Stripe** payments, **Firebase Authentication**, **Firebase Cloud Messaging**, and **Cloudinary** media.',
    sources: ['ZapShift', 'CampusCart']
  },
  {
    index: '06',
    title: 'Production Deployment',
    evidence: '**VPS deployment**, domain and web-server configuration, **custom domains**, and **Vercel**.',
    sources: ['Admission Test System', 'CampusCart', 'ZapShift']
  }
];

export const projects: Project[] = [
  {
    id: 'admission-system',
    slug: 'admission-system',
    monogram: 'AT',
    index: '01',
    title: 'Admission Test Management System',
    tagline: 'Digital exam platform',
    year: '2025 – Present (In Use)',
    role: 'Frontend Developer',
    logo: '/projects/admission-system/logo.png',
    summary:
      'A digital platform replacing the manual admission-examination process of the CSE Department at Daffodil International University, facilitating admission exams for nearly 1,000 students in the latest cycle.',
    contributionNote:
      'My contribution: the React candidate and administrative portals, integration with the Django REST API, and assisting with production deployment.',
    problem:
      'The department ran admission examinations through a manual process. The platform replaced it with a digital workflow for exam scheduling, candidate management, online examinations, and result publication.',
    implemented: [
      'Developed the **React candidate and administrative portals**',
      'Integrated the frontend with **Django REST APIs** for real-time data handling',
      'Assisted with **VPS deployment**, production domain setup, and web-server configuration'
    ],
    stack: ['React', 'Django REST API', 'Git', 'GitHub', 'VPS'],
    featured: true,
    images: [
      {
        src: '/projects/admission-system/poster.jpg',
        alt: 'Admission Test Management System platform overview and examination workflow poster',
        caption: 'Platform overview, candidate examination workflow, and admin analytics dashboard'
      }
    ],
    diagram: {
      caption: '',
      layers: []
    },
    links: []
  },
  {
    id: 'campuscart',
    slug: 'campuscart',
    monogram: 'CC',
    index: '02',
    title: 'CampusCart',
    tagline: 'Multi-vendor campus marketplace',
    year: '2026',
    role: 'Full-Stack Developer',
    logo: '/projects/campuscart/logo.png',
    summary:
      'A live multi-vendor e-commerce and peer-to-peer marketplace for the Daffodil campus community. Handles end-to-end purchasing, vendor management, and classifieds.',
    problem:
      'Gives the Daffodil campus community one platform for buying from vendors, managing vendor stores, and trading through peer-to-peer classifieds — from catalog to checkout to order tracking.',
    implemented: [
      'Built **30+ REST APIs** with Node.js, Express, and Prisma on PostgreSQL',
      'Implemented **JWT authentication and RBAC**',
      'Developed **Buyer, Vendor, and Admin portals**',
      'Built **transactional order-state transitions** and multi-stage order tracking',
      'Integrated **Firebase Cloud Messaging** push notifications',
      'Added **PWA offline caching** with Workbox service workers',
      'Automated **Cloudinary uploads** with client-side image compression',
      'Configured deployment on a **custom domain**'
    ],
    stack: ['React', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT', 'RBAC', 'Firebase', 'Workbox', 'Cloudinary'],
    featured: true,
    images: [
      {
        src: '/projects/campuscart/campuscart-1.png',
        alt: 'CampusCart marketplace landing page and student startups showcase',
        caption: 'Marketplace homepage with student startup promotions and mobile app preview'
      },
      {
        src: '/projects/campuscart/campuscart-2.png',
        alt: 'CampusCart shop by category and top selling products grid',
        caption: 'Category navigation and top-selling products catalog'
      },
      {
        src: '/projects/campuscart/campuscart-3.png',
        alt: 'CampusCart category filter and product listing view',
        caption: 'Indoor Plants category view with dynamic price and category filters'
      },
      {
        src: '/projects/campuscart/campuscart-4.png',
        alt: 'CampusCart campus delivery checkout and payment review',
        caption: 'Campus dorm delivery checkout with Cash on Delivery'
      }
    ],
    diagram: {
      caption: 'System overview — three role-based portals on a single REST API.',
      layers: [
        {
          label: 'Clients',
          nodes: [
            { name: 'Buyer portal', detail: 'Catalog · cart · checkout' },
            { name: 'Vendor portal', detail: 'Products · orders' },
            { name: 'Admin portal', detail: 'Platform management' }
          ]
        },
        {
          label: 'API',
          nodes: [
            { name: 'REST API', detail: 'Node.js · Express · 30+ endpoints' },
            { name: 'Auth', detail: 'JWT · RBAC' }
          ]
        },
        {
          label: 'Data & services',
          nodes: [
            { name: 'PostgreSQL', detail: 'via Prisma ORM' },
            { name: 'Firebase', detail: 'Cloud Messaging' },
            { name: 'Cloudinary', detail: 'Compressed uploads' },
            { name: 'Workbox', detail: 'Offline cache' }
          ]
        }
      ],
      flowLabel: 'Order flow',
      flow: ['Catalog', 'Cart', 'Checkout (COD)', 'Order tracking']
    },
    links: [
      { kind: 'live', href: 'https://campuscartdiu.com' },
      { kind: 'github', href: 'https://github.com/Re1354' }
    ]
  },
  {
    id: 'zapshift',
    slug: 'zapshift',
    monogram: 'ZS',
    index: '03',
    title: 'ZapShift',
    tagline: 'Logistics management platform',
    year: '2026',
    role: 'Full-Stack Developer',
    logo: '/projects/ZapShift/logo.png',
    summary:
      'A parcel booking, delivery tracking, and logistics management web application built for operational efficiency.',
    problem:
      'Brings parcel booking, payment, delivery tracking, and delivery analytics into a single application shared by admins, riders, and users.',
    implemented: [
      'Implemented **Firebase authentication** (OAuth / email)',
      'Implemented **RBAC** for Admin, Rider, and User roles',
      'Built **real-time parcel status tracking**',
      'Built **delivery-analytics dashboards** with Recharts and TanStack Query',
      'Developed **REST APIs** with Node.js, Express, and MongoDB',
      'Integrated **Stripe payment** processing',
      'Configured deployment on **Vercel**'
    ],
    stack: ['React', 'TanStack Query', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Stripe', 'Recharts'],
    featured: false,
    images: [
      {
        src: '/projects/ZapShift/image1.png',
        alt: 'ZapShift parcel delivery platform overview showing User, Rider, and Admin ecosystem',
        caption: 'Platform overview highlighting multi-role ecosystem, real-time tracking, and automated rider assignment'
      },
      {
        src: '/projects/ZapShift/image2.png',
        alt: 'ZapShift landing page hero with 30-minute doorstep delivery guarantee and service navigation',
        caption: 'Landing page featuring fast courier service proposition, parcel booking, and rider onboarding'
      },
      {
        src: '/projects/ZapShift/image3before3.png',
        alt: 'ZapShift nationwide delivery coverage map across 64 districts in Bangladesh',
        caption: 'Interactive coverage map displaying service presence across all 64 districts nationwide'
      },
      {
        src: '/projects/ZapShift/image3.png',
        alt: 'ZapShift parcel dispatch booking form with sender and receiver specifications',
        caption: 'Streamlined parcel dispatch form with document categorization and automated pricing'
      },
      {
        src: '/projects/ZapShift/image4.png',
        alt: 'ZapShift live consignment tracking interface with chronological lifecycle status',
        caption: 'Live parcel tracking interface with real-time progress steps from pickup to delivery'
      },
      {
        src: '/projects/ZapShift/image5.png',
        alt: 'ZapShift user analytics dashboard displaying monthly booking trends and status distribution',
        caption: 'Customer portal showing booking history, active shipments, and delivery metrics'
      },
      {
        src: '/projects/ZapShift/image6.png',
        alt: 'ZapShift shipment pipeline lifecycle breakdown and recent bookings table',
        caption: 'Shipment pipeline overview tracking live parcel stages and recent consignment records'
      },
      {
        src: '/projects/ZapShift/image7.png',
        alt: 'ZapShift Stripe payment transaction history and receipt ledger',
        caption: 'Secure Stripe payment transaction history with itemized invoice and payment status'
      },
      {
        src: '/projects/ZapShift/image8.png',
        alt: 'ZapShift admin portal for reviewing and approving courier rider applications',
        caption: 'Administrative approval system for vetting rider applications, licenses, and fleet availability'
      },
      {
        src: '/projects/ZapShift/image9.png',
        alt: 'ZapShift administrative user profile and access control shortcuts',
        caption: 'Admin account profile with role verification and system management shortcuts'
      },
      {
        src: '/projects/ZapShift/image10.png',
        alt: 'ZapShift admin delivery status analytics, volume charts, and pipeline distribution',
        caption: 'Comprehensive logistics analytics dashboard with delivery volume charts and stage breakdown'
      }
    ],
    diagram: {
      caption: 'Three roles sharing one tracking pipeline.',
      layers: [
        { label: 'Roles', nodes: [{ name: 'Admin' }, { name: 'Rider' }, { name: 'User' }] },
        {
          label: 'Services',
          nodes: [
            { name: 'Express API', detail: 'Node.js' },
            { name: 'Firebase Auth', detail: 'OAuth · email' },
            { name: 'Stripe', detail: 'Payments' }
          ]
        },
        { label: 'Data', nodes: [{ name: 'MongoDB', detail: 'Parcels · status' }] }
      ]
    },
    links: [
      { kind: 'live', href: 'https://zapshift-client.vercel.app/' },
      {
        kind: 'github',
        label: 'Client Repo',
        description: 'React · Tailwind · Firebase',
        href: 'https://github.com/Re1354/zapshift-client'
      },
      {
        kind: 'github',
        label: 'Server Repo',
        description: 'Node.js · Express · MongoDB',
        href: 'https://github.com/Re1354/zapshift-server'
      },
      { kind: 'video', href: 'https://youtu.be/ub8DYkf8gBY?si=Io4s1iyKjIvyOFOF' }
    ]
  },
  {
    id: 'building-management',
    slug: 'building-management',
    monogram: 'BM',
    index: '04',
    title: 'Building Management System',
    tagline: 'Tenant & rent administration',
    year: '2025',
    role: 'Full-Stack Developer',
    logo: '/projects/building-management/logo.svg',
    summary:
      'A tenant and rent management web application designed to streamline property administration and financial tracking.',
    problem:
      'Streamlines property administration by keeping tenant records, rent tracking, and financial reporting in one secure application.',
    implemented: [
      'Implemented **JWT authentication and RBAC**',
      'Built secure **tenant CRUD** operations',
      'Built **automated rent tracking** and financial reporting',
      'Built **financial-reporting dashboards** with Recharts and Tailwind CSS',
      'Developed **REST APIs** with Node.js, Express, and MongoDB'
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Recharts', 'Tailwind CSS'],
    featured: false,
    diagram: {
      caption: 'Access control in front of tenant and finance modules.',
      layers: [
        { label: 'Access', nodes: [{ name: 'JWT auth' }, { name: 'RBAC' }] },
        { label: 'Modules', nodes: [{ name: 'Tenant CRUD' }, { name: 'Rent tracking' }, { name: 'Financial reports' }] },
        { label: 'Data', nodes: [{ name: 'Express API', detail: 'Node.js' }, { name: 'MongoDB' }] }
      ]
    },
    links: []
  }
];

export const expertise: ExpertiseGroup[] = [
  {
    category: 'Frontend',
    items: ['JavaScript', 'React', 'Tailwind CSS', 'HTML5', 'CSS3', 'TanStack Query', 'Recharts', 'PWA / Workbox']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Prisma', 'JWT Authentication', 'RBAC', 'Java', 'Spring Boot']
  },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  {
    category: 'Tools & Services',
    items: ['Git', 'GitHub', 'Postman', 'Firebase', 'Stripe', 'Cloudinary', 'Vercel']
  }
];

export const problemSolving = {
  value: '300',
  label: 'problems solved on **Codeforces** and **LeetCode**',
  note: 'Daily practice in data structures and algorithms to keep fundamentals sharp.'
};

export const achievements: Achievement[] = [
  {
    year: '2023',
    title: '1st Place — Java course team project',
    detail: 'Daffodil International University'
  },
  {
    year: '2024',
    title: 'Java Spring Boot Course Certificate',
    detail: 'Completed full-stack Spring Boot training with hands-on project work.'
  }
];

export const education = {
  institution: 'Daffodil International University',
  monogram: 'DIU',
  logo: '/projects/admission-system/logo.png',
  degree: 'B.Sc. in Computer Science and Engineering',
  period: '2023 — Dec 2026 (Expected)',
  cgpa: '3.85',
  scale: '4.00',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java)',
    'Databases',
    'Operating Systems',
    'Computer Networks',
    'Software Engineering',
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Vision',
    'Engineering Economics'
  ]
};