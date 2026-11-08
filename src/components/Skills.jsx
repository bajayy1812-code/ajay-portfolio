import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Server, Database, Terminal, CheckCheck, Wrench, ChevronRight
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
    description: 'Building responsive, accessible, and performant user interfaces with modular component architecture.',
    skills: [
      { name: 'React.js', context: 'Hooks, Lifecycle, State Management, SPA' },
      { name: 'JavaScript (ES6+)', context: 'Async/Await, Closures, DOM, Modular JS' },
      { name: 'HTML5', context: 'Semantic Structure, Accessibility (a11y)' },
      { name: 'CSS3 / Tailwind', context: 'Flexbox, CSS Grid, Design Systems' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    badge: 'API & Services',
    description: 'Architecting scalable RESTful APIs, request middleware pipelines, and controller abstractions.',
    skills: [
      { name: 'Node.js', context: 'Event-driven Asynchronous Runtime' },
      { name: 'Express.js', context: 'Routing, Custom Middleware, Controllers' },
    ],
  },
  {
    title: 'Database Systems',
    icon: Database,
    badge: 'Persistence',
    description: 'Schema modeling, relational indexing, document aggregations, and persistent CRUD operations.',
    skills: [
      { name: 'MongoDB', context: 'Mongoose ODM, Document Schemas, Aggregation' },
      { name: 'SQL', context: 'Relational Queries, Joins, Table Constraints' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Terminal,
    badge: 'Foundations',
    description: 'Algorithmic problem solving, clean code syntax, and data structures implementation.',
    skills: [
      { name: 'JavaScript', context: 'Primary Language for Full Stack Web Engineering' },
      { name: 'Python', context: 'Scripting, Automation, Algorithmic Logic' },
    ],
  },
  {
    title: 'Testing & Automation',
    icon: CheckCheck,
    badge: 'Quality Assurance',
    description: 'End-to-end automated testing to guarantee user journey integrity and cross-browser reliability.',
    skills: [
      { name: 'Playwright', context: 'E2E Testing, UI Automation, Test Assertions' },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    badge: 'Developer Environment',
    description: 'Industry-standard version control, API debugging, and collaborative team development.',
    skills: [
      { name: 'Git', context: 'Branching, Commit Workflows, Merge Conflict Resolution' },
      { name: 'GitHub', context: 'Remote Repositories, Issue Tracking, Versioning' },
      { name: 'VS Code', context: 'Primary Development Environment & Debugging' },
      { name: 'Postman', context: 'API Endpoint Validation & Testing Suites' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="section-padding bg-[#F3EEE3] relative border-t border-[#D8D0C2]">
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
              <span className="w-6 h-px bg-[#D9541E]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D9541E] font-bold">Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
              Engineered for <span className="editorial-serif font-medium text-[#D9541E]">Precision & Scale.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#77736B] max-w-2xl">
              Categorized technical competencies verified through hands-on project implementations and formal training.
            </p>
          </motion.div>

          {/* Categorized Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={fadeUp}
                  className="editorial-card p-6 flex flex-col justify-between hover:shadow-md hover:border-[#BDB3A3] transition-all duration-200"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-[#E9E2D5] text-[#D9541E] border border-[#D8D0C2]">
                        <IconComponent size={18} />
                      </div>
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#E9E2D5] text-[#111111] border border-[#D8D0C2]">
                        {category.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#111111] mb-1.5">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#77736B] leading-relaxed mb-4">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills List */}
                  <div className="pt-3 border-t border-[#D8D0C2] space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex flex-col p-2 rounded-lg bg-[#E9E2D5]/40 hover:bg-[#E9E2D5] transition-colors border border-transparent hover:border-[#D8D0C2]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#111111] group-hover:text-[#D9541E] transition-colors">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D8D0C2] group-hover:bg-[#D9541E] transition-colors" />
                        </div>
                        <span className="text-[10px] font-mono text-[#77736B] mt-0.5">
                          {skill.context}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Problem Solving & DSA Highlight */}
          <motion.div
            variants={fadeUp}
            className="mt-8 p-6 rounded-xl bg-[#E9E2D5]/70 border border-[#D8D0C2] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FFFFFF] border border-[#D8D0C2] flex items-center justify-center text-[#D9541E] font-bold font-mono text-base">
                100+
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#111111]">
                  Algorithmic Problem Solving (DSA)
                </h4>
                <p className="text-xs text-[#77736B]">
                  Actively solved 100+ data structure & algorithm problems focusing on arrays, strings, two pointers, and recursion.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D9541E] font-bold px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#D8D0C2] self-start sm:self-auto">
              <span>HackerRank Verified</span>
              <ChevronRight size={13} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
