import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

const stack = [
  {
    category: 'FRONTEND',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    ]
  },
  {
    category: 'BACKEND',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
      { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg', invert: true },
      { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    ]
  },
  {
    category: 'DATABASE',
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ]
  },
  {
    category: 'TOOLS',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg' },
      { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', invert: true },
      { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="w-full bg-ink pb-32 pt-24 sm:pb-40 sm:pt-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-24 lg:mb-32">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-[2px] w-6 bg-accent"></span>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">Technical Expertise</p>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-[40px] lg:leading-[1.1]">
            Technologies & Tools
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-24">
          {stack.map((group, groupIndex) => (
            <div
              key={group.category}
              className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-16 items-start"
            >
              {/* Category Name */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className="text-3xl font-black uppercase tracking-tight text-white/90 lg:text-4xl lg:mt-2"
              >
                {group.category}
              </motion.h3>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-x-8 gap-y-6 lg:gap-x-12 lg:gap-y-8">
                {group.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: (groupIndex * 0.1) + (index * 0.05) }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div className="flex h-8 w-8 items-center justify-center transition-transform group-hover:scale-110">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`max-h-full max-w-full ${skill.invert ? 'brightness-0 invert opacity-90' : ''}`}
                      />
                    </div>
                    <span className="text-lg font-medium text-white/70 transition-colors group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}