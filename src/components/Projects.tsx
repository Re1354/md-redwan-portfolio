import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { ProjectDetailModal } from './ProjectDetailModal';
import { projects, type Project } from '../data/portfolio';

const featuredProjects = [
  {
    id: 'campuscart',
    number: '01',
    meta: 'FULL-STACK',
    status: 'LIVE',
    title: 'CAMPUSCART',
    subtitle: 'Multi-vendor campus marketplace',
    description: 'A live multi-vendor e-commerce and peer-to-peer marketplace for the Daffodil campus community.',
    impact: '30+ REST APIs',
    features: 'Buyer Portal · Vendor Portal · Admin Portal · Product Catalog · Checkout · Order Tracking · Used-item Marketplace · Room Rentals',
    details: [
      '30+ REST APIs',
      'JWT authentication',
      'Role-Based Access Control',
      'Transactional order-state transitions',
      'PWA with Workbox',
      'Firebase Cloud Messaging',
      'Cloudinary media uploads',
      'Client-side image compression'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'Prisma', 'PostgreSQL', 'JWT', 'RBAC', 'Firebase', 'Workbox', 'Cloudinary'],
    image: '/reference-images/image2.png',
    liveUrl: '#',
    repoUrl: 'https://github.com/Re1354'
  },
  {
    id: 'admission-system',
    number: '02',
    meta: 'UNIVERSITY PLATFORM',
    status: 'PRODUCTION',
    title: 'ADMISSION TEST MANAGEMENT SYSTEM',
    subtitle: 'Digital examination platform',
    description: 'A digital platform replacing the manual admission-examination process of the CSE Department at Daffodil International University.',
    impact: '~1,000 students supported in the latest examination cycle.',
    features: '',
    details: [
      'React-based administrative and candidate portals',
      'Django REST API integration',
      'Dynamic data handling',
      'Production deployment assistance',
      'VPS setup',
      'Production domain configuration',
      'Web-server configuration',
      'Git/GitHub collaboration'
    ],
    tech: ['React', 'Django REST API', 'Git', 'GitHub', 'VPS'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Re1354'
  },
  {
    id: 'zapshift',
    number: '03',
    meta: 'LOGISTICS',
    status: 'LIVE',
    title: 'ZAPSHIFT',
    subtitle: 'Logistics management platform',
    description: 'A comprehensive parcel booking, delivery tracking, and logistics management web application built for operational efficiency.',
    impact: 'Real-time parcel tracking',
    features: 'Admin Portal · Rider App · User Dashboard · Analytics · Stripe Payments',
    details: [
      'Firebase authentication (OAuth/email)',
      'Complex RBAC (Admin, Rider, User)',
      'Interactive delivery-analytics dashboards',
      'Stripe payment processing',
      'Secure REST APIs with Node.js & MongoDB'
    ],
    tech: ['React', 'TanStack Query', 'Node.js', 'MongoDB', 'Firebase', 'Stripe', 'Recharts'],
    image: '/reference-images/image4.png',
    liveUrl: '#',
    repoUrl: 'https://github.com/Re1354'
  },
  {
    id: 'building-management',
    number: '04',
    meta: 'ADMINISTRATION',
    status: 'LIVE',
    title: 'BUILDING MANAGEMENT',
    subtitle: 'Tenant & rent administration',
    description: 'A tenant and rent management web application designed to streamline property administration and financial tracking.',
    impact: 'Automated rent tracking',
    features: 'Tenant Management · Financial Dashboards · Rent Tracking · Secure CRUD',
    details: [
      'JWT authentication & RBAC',
      'Automated financial reporting systems',
      'Visual analytics dashboards',
      'REST APIs with Node.js & Express',
      'MongoDB schema modeling'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Recharts', 'Tailwind CSS'],
    image: '/reference-images/image5.png',
    liveUrl: '#',
    repoUrl: 'https://github.com/Re1354'
  }
];

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const articleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="projects" className="w-full bg-white pb-32 pt-24 sm:pb-40 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mb-24 lg:mb-32">
          <SectionHeading
            label="Engineering Case Studies"
            title="Selected systems I've built across full-stack development, APIs, data, authentication, and production deployment."
            align="left"
          />
        </div>

        {/* FEATURED CASE STUDIES */}
        <div className="space-y-32 lg:space-y-48">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={project.id}
                variants={articleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-16 lg:gap-y-10 items-start"
              >

                {/* Header Block */}
                <div className={`w-full lg:col-span-5 order-1 ${isEven ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-8 lg:row-start-1'}`}>
                  <motion.div variants={itemVariants} className="flex items-center gap-3 text-xs font-mono font-semibold tracking-wider text-muted">
                    <span>{project.number} / {project.meta}</span>
                    <span className="px-2 py-0.5 rounded-full border border-line text-ink bg-mist">{project.status}</span>
                  </motion.div>
                  <motion.h3 variants={itemVariants} className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-ink uppercase">
                    {project.title}
                  </motion.h3>
                  <motion.p variants={itemVariants} className="mt-3 text-lg font-medium text-ink/80">
                    {project.subtitle}
                  </motion.p>
                  <motion.p variants={itemVariants} className="mt-5 text-base text-muted leading-relaxed">
                    {project.description}
                  </motion.p>
                </div>

                {/* Image Block */}
                <motion.div
                  variants={itemVariants}
                  className={`w-full lg:col-span-7 order-2 mt-10 lg:mt-0 ${isEven ? 'lg:col-start-6 lg:row-start-1 lg:row-span-2' : 'lg:col-start-1 lg:row-start-1 lg:row-span-2'}`}
                >
                  <button
                    onClick={() => setSelectedProject(projects.find(p => p.id === project.id) || null)}
                    aria-label={`View details for ${project.title}`}
                    className="group relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-mist ring-1 ring-ink/10 shadow-sm motion-safe:transition-all motion-safe:duration-500 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-md text-left block"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} product preview`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </button>
                </motion.div>

                {/* Details Block */}
                <div className={`w-full lg:col-span-5 order-3 mt-10 lg:mt-0 ${isEven ? 'lg:col-start-1 lg:row-start-2' : 'lg:col-start-8 lg:row-start-2'}`}>

                  {project.features && (
                    <motion.p variants={itemVariants} className="text-sm font-medium text-ink/80 mb-8 leading-relaxed">
                      {project.features}
                    </motion.p>
                  )}

                  <motion.div variants={itemVariants} className="mb-8">
                    <h4 className="text-xl font-bold text-ink">{project.impact}</h4>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-8">
                    <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">Engineering</p>
                    <ul className="space-y-2.5">
                      {project.details.map(d => (
                        <li key={d} className="text-sm text-muted flex items-start gap-2.5">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 text-[11px] font-mono font-medium text-muted bg-mist border border-line/50 rounded transition-colors hover:text-ink hover:border-line">
                        {t}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center gap-6">
                    <button 
                      onClick={() => setSelectedProject(projects.find(p => p.id === project.id) || null)}
                      className="group flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
                    >
                      <span className="border-b border-ink/20 pb-0.5 transition-colors group-hover:border-accent">View Project</span>
                      <ArrowRightIcon className="h-4 w-4 motion-safe:transition-transform group-hover:translate-x-1" />
                    </button>
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors" aria-label="GitHub Repository">
                        <GithubIcon className="h-5 w-5" />
                      </a>
                    )}
                  </motion.div>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>

      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}