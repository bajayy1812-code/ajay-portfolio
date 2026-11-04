import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const responsibilities = [
  'Developed full-stack MERN web applications with complete client-server state synchronization.',
  'Created modular, reusable React.js interface components following DRY principles.',
  'Engineered responsive, accessible frontends tested across multiple screen resolutions.',
  'Implemented client-side form validation and seamless RESTful API integration.',
  'Built robust RESTful API endpoints using Node.js and Express.js with custom error handlers.',
  'Implemented comprehensive CRUD workflows and stateless JWT authentication routines.',
  'Integrated MongoDB database layers using Mongoose ODM with strict schema definitions.',
  'Managed version control, feature branches, and collaborative code reviews via Git and GitHub.',
];

const technologiesUsed = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose ODM',
  'REST APIs',
  'Git',
  'GitHub',
  'Postman',
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="section-padding bg-[#0B0F19] relative border-t border-[#1E293B]">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Section Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#6366F1]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#6366F1]">Career Path</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
              Internship & <span className="text-gradient-accent">Practical Experience.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#94A3B8] max-w-2xl">
              Hands-on engineering contributions delivered in verified professional training and development roles.
            </p>
          </motion.div>

          {/* Timeline Node */}
          <div className="relative pl-6 sm:pl-8 border-l border-[#1E293B] space-y-12">
            {/* Frenzo Academy Internship */}
            <motion.div variants={fadeUp} className="relative">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#151D2E] border-2 border-[#6366F1] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1E293B]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#1E293B]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#6366F1]/10 text-[#6366F1] font-semibold border border-[#6366F1]/20">
                        Internship
                      </span>
                      <span className="text-xs text-green-400 font-mono font-medium flex items-center gap-1">
                        <CheckCircle2 size={12} /> Completed
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#F8FAFC]">
                      MERN Stack Developer Intern
                    </h3>
                    <p className="text-sm font-medium text-[#22D3EE] mt-0.5">
                      Frenzo Academy
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#94A3B8]">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#6366F1]" />
                      <span>2025</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#64748B]" />
                      <span>Coimbatore, India</span>
                    </div>
                  </div>
                </div>

                {/* Role Narrative */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  Completed an intensive full-stack internship focusing on the complete MERN lifecycle. Gained practical experience designing normalized database schemas, building secure REST services, and implementing reactive component states in client-facing applications.
                </p>

                {/* Technical Responsibilities Grid */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] font-semibold mb-3 flex items-center gap-2">
                    <Terminal size={14} className="text-[#6366F1]" />
                    Key Engineering Contributions & Responsibilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                        <CheckCircle2 size={14} className="text-[#22D3EE] mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack Badges */}
                <div className="pt-4 border-t border-[#1E293B] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#64748B] mr-1">Technologies:</span>
                  {technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#0B0F19] text-[#F8FAFC] border border-[#1E293B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
