import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';

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
    <section id="experience" className="section-padding bg-[#F3EEE3] relative border-t border-[#D8D0C2]">
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
              <span className="w-6 h-px bg-[#D9541E]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#D9541E] font-bold">Career Path</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
              Internship & <span className="editorial-serif font-medium text-[#D9541E]">Practical Experience.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#77736B] max-w-2xl">
              Hands-on engineering contributions delivered in verified professional training and development environments.
            </p>
          </motion.div>

          {/* Timeline Node */}
          <div className="relative pl-6 sm:pl-8 border-l border-[#D8D0C2] space-y-12">
            {/* Frenzo Academy Internship */}
            <motion.div variants={fadeUp} className="relative">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] border-2 border-[#D9541E] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E]" />
              </div>

              {/* Experience Card */}
              <div className="editorial-card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#D8D0C2]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#E9E2D5] text-[#D9541E] font-bold border border-[#D8D0C2]">
                        Internship
                      </span>
                      <span className="text-xs text-[#111111] font-mono font-medium flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-[#D9541E]" /> Verified Experience
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#111111]">
                      MERN Stack Developer Intern
                    </h3>
                    <p className="text-sm font-semibold text-[#D9541E] mt-0.5">
                      Frenzo Academy
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#77736B]">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#D9541E]" />
                      <span className="font-semibold text-[#111111]">2025</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#77736B]" />
                      <span>Coimbatore, India</span>
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-3 flex items-center gap-1.5">
                    <Terminal size={14} className="text-[#D9541E]" /> Technical Responsibilities & Achievements
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs text-[#77736B]">
                    {responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D9541E] mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed text-[#111111]">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-4 border-t border-[#D8D0C2] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#77736B] mr-2">Core Tech:</span>
                  {technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded bg-[#E9E2D5] text-[#111111] border border-[#D8D0C2] font-mono font-medium"
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
