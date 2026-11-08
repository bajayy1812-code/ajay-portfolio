import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Server, Database, Shield, Wrench, Users, ChevronRight, CheckCircle2
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    badge: 'Core UI',
    description: 'Building responsive, accessible, and performant user interfaces with modern React and CSS.',
    skills: [
      'React.js',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    badge: 'API & Services',
    description: 'Architecting scalable server-side systems, request routing, and controller pipelines.',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'Middleware',
      'CRUD Operations',
    ],
  },
  {
    title: 'Database Management',
    icon: Database,
    badge: 'Persistence',
    description: 'Relational & document database schemas, aggregation pipelines, and persistent storage.',
    skills: [
      'MongoDB',
      'MongoDB Atlas',
      'Mongoose',
      'Data Modeling',
    ],
  },
  {
    title: 'Application Security',
    icon: Shield,
    badge: 'Protection',
    description: 'Industry-standard access controls, stateless tokens, and password encryption protocols.',
    skills: [
      'JWT Authentication',
      'bcrypt Password Hashing',
      'Role-Based Access Control',
      'Protected Routes',
    ],
  },
  {
    title: 'Tools & Practices',
    icon: Wrench,
    badge: 'Workflow',
    description: 'Version control, automated testing, algorithmic problem solving, and maintainability.',
    skills: [
      'Git',
      'GitHub',
      'Debugging',
      'Data Structures & Algorithms',
      'Clean Code',
    ],
  },
  {
    title: 'Professional Skills',
    icon: Users,
    badge: 'Collaboration',
    description: 'Essential professional attributes for collaborative cross-functional product development.',
    skills: [
      'Problem-Solving',
      'Communication',
      'Teamwork',
      'Adaptability',
      'Time Management',
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="section-padding bg-[#171114] relative border-t border-[#49333D]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#E87991]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#E87991] font-bold">Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFF7F7]">
              Tools I <span className="editorial-serif font-medium text-[#E87991]">work with.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#B9A6AA] max-w-2xl">
              Categorized technologies, libraries, and engineering practices applied across real-world full-stack web applications.
            </p>
          </motion.div>

          {/* 6 Categorized Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={fadeUp}
                  className="burgundy-card p-6 flex flex-col justify-between hover:border-[#E87991] transition-all duration-200 group"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-[#241820] text-[#E87991] border border-[#49333D] group-hover:border-[#E87991]/40 transition-colors">
                        <IconComponent size={18} />
                      </div>
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#241820] text-[#D6A6A0] border border-[#49333D]">
                        {category.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#FFF7F7] mb-1.5 group-hover:text-[#E87991] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#B9A6AA] leading-relaxed mb-4">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Badges */}
                  <div className="pt-3 border-t border-[#49333D] flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded bg-[#241820] text-[#FFF7F7] border border-[#49333D] font-mono hover:border-[#E87991]/50 hover:text-[#E87991] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Problem Solving & DSA Highlight */}
          <motion.div
            variants={fadeUp}
            className="mt-8 p-6 rounded-xl bg-[#241820] border border-[#49333D] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#302029] border border-[#49333D] flex items-center justify-center text-[#E87991] font-bold font-mono text-base">
                100+
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#FFF7F7]">
                  Algorithmic Rigor & Problem Solving
                </h4>
                <p className="text-xs text-[#B9A6AA]">
                  Solved 100+ data structures & algorithms problems focusing on arrays, strings, two pointers, and recursion on HackerRank.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E87991] font-bold px-3 py-1.5 rounded-lg bg-[#302029] border border-[#49333D] self-start sm:self-auto">
              <span>HackerRank Verified</span>
              <ChevronRight size={13} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
