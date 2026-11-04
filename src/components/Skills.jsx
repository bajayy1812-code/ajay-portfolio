import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Server, Database, Terminal, CheckCheck, Wrench, Shield, Layers
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    badge: 'Core Stack',
    accent: '#6366F1',
    description: 'Building responsive, accessible, and dynamic user interfaces with modular component architecture.',
    skills: [
      { name: 'React.js', context: 'Hooks, Component Lifecycle, State Management' },
      { name: 'JavaScript (ES6+)', context: 'Async/Await, Closures, DOM Manipulation' },
      { name: 'HTML5', context: 'Semantic Architecture, Accessibility' },
      { name: 'CSS3 / Tailwind', context: 'Flexbox, Grid, Responsive Design Systems' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    badge: 'API & Server',
    accent: '#22D3EE',
    description: 'Designing scalable RESTful APIs, routing middleware, and server-side request pipelines.',
    skills: [
      { name: 'Node.js', context: 'Event-driven Runtime, Asynchronous I/O' },
      { name: 'Express.js', context: 'REST Architecture, Middleware, Controllers' },
    ],
  },
  {
    title: 'Database Management',
    icon: Database,
    badge: 'Persistence',
    accent: '#6366F1',
    description: 'Schema modeling, indexing, relational constraints, and persistent CRUD operations.',
    skills: [
      { name: 'MongoDB', context: 'Mongoose ODM, Document Schemas, Aggregations' },
      { name: 'SQL', context: 'Relational Queries, Joins, Table Constraints' },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Terminal,
    badge: 'Foundations',
    accent: '#22D3EE',
    description: 'Core syntax and algorithmic problem solving across primary languages.',
    skills: [
      { name: 'JavaScript', context: 'Primary Language for Full Stack Development' },
      { name: 'Python', context: 'Scripting, Automation & Algorithmic Problem Solving' },
    ],
  },
  {
    title: 'Testing & Automation',
    icon: CheckCheck,
    badge: 'Quality Assurance',
    accent: '#6366F1',
    description: 'End-to-end automated testing to ensure workflow reliability and cross-browser consistency.',
    skills: [
      { name: 'Playwright', context: 'E2E Testing, UI Automation, Test Assertions' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    badge: 'DevOps & Workflow',
    accent: '#22D3EE',
    description: 'Everyday developer toolsets for version control, endpoint inspection, and collaborative engineering.',
    skills: [
      { name: 'Git', context: 'Branching, Merge Workflows, Version Tracking' },
      { name: 'GitHub', context: 'Remote Repositories, Issue Tracking, CI/CD Actions' },
      { name: 'VS Code', context: 'Primary Code Editor, Extensions, Debugging' },
      { name: 'Postman', context: 'API Endpoint Validation, Environment Variables' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="section-padding bg-[#0B0F19] relative border-t border-[#1E293B]">
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
              <span className="w-6 h-px bg-[#22D3EE]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#22D3EE]">Technical Skills</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
              Categorized <span className="text-gradient-accent">Skill Set.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#94A3B8] max-w-2xl">
              Authentic technical capabilities verified through real-world academic projects, internship experience, and coding practice.
            </p>
          </motion.div>

          {/* Categorized Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={fadeUp}
                  className="glass-card rounded-xl p-6 flex flex-col justify-between glass-card-hover"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{
                            backgroundColor: `${category.accent}15`,
                            border: `1px solid ${category.accent}30`,
                            color: category.accent,
                          }}
                        >
                          <Icon size={18} />
                        </div>
                        <h3 className="text-sm font-bold text-[#F8FAFC]">{category.title}</h3>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111827] text-[#94A3B8] border border-[#1E293B]">
                        {category.badge}
                      </span>
                    </div>

                    <p className="text-xs text-[#94A3B8] mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill Pills with Context */}
                    <div className="space-y-2 mb-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-lg bg-[#111827]/70 border border-[#1E293B] hover:border-[#334155] transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#F8FAFC] font-mono">
                              {skill.name}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: category.accent }} />
                          </div>
                          <span className="text-[11px] text-[#94A3B8] block mt-0.5">
                            {skill.context}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 mt-4 border-t border-[#1E293B]/70 flex items-center justify-between text-[11px] text-[#64748B] font-mono">
                    <span>Verified in Projects</span>
                    <span>Hands-On</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Authenticity Note */}
          <motion.div
            variants={fadeUp}
            className="mt-8 p-4 rounded-xl bg-[#151D2E] border border-[#1E293B] flex items-center gap-3 text-xs text-[#94A3B8]"
          >
            <Shield size={16} className="text-[#22D3EE] flex-shrink-0" />
            <p>
              <strong className="text-[#F8FAFC]">Authenticity Promise:</strong> All skills listed reflect technologies actively applied in project codebases, internship deliverables, and test automation scripts. No inflated percentages.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
