import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const responsibilities = [
  'Developed a full-stack MERN application with seamless client-server state synchronization.',
  'Created reusable React components following DRY principles and modular architecture.',
  'Developed responsive interfaces optimized and verified across mobile and desktop devices.',
  'Built RESTful APIs using Node.js and Express with robust request routing and error handlers.',
  'Implemented CRUD operations with stateless JWT authentication routines.',
  'Integrated MongoDB and Mongoose ODM with strictly enforced schema definitions.',
  'Debugged and tested application features for reliable performance.',
  'Used Git and GitHub for version control, branching, and pull requests.',
  'Worked through deployment and server configuration workflows.',
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
    <section id="experience" className="section-padding bg-[#171114] relative border-t border-[#49333D]">
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
              <span className="w-6 h-px bg-[#E87991]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#E87991] font-bold">Career Path</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFF7F7]">
              Where I've <span className="editorial-serif font-medium text-[#E87991]">learned by doing.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#B9A6AA] max-w-2xl">
              Hands-on engineering contributions delivered in verified professional training and development environments.
            </p>
          </motion.div>

          {/* Timeline Node */}
          <div className="relative pl-6 sm:pl-8 border-l border-[#49333D] space-y-12">
            {/* Frenzo Academy Internship */}
            <motion.div variants={fadeUp} className="relative">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#171114] border-2 border-[#E87991] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87991]" />
              </div>

              {/* Experience Card */}
              <div className="burgundy-card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#49333D]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#241820] text-[#E87991] font-bold border border-[#49333D]">
                        Internship
                      </span>
                      <span className="text-xs text-[#FFF7F7] font-mono font-medium flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-[#E87991]" /> Verified Experience
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#FFF7F7]">
                      MERN Stack Developer Intern
                    </h3>
                    <p className="text-sm font-semibold text-[#D6A6A0] mt-0.5">
                      Frenzo Academy
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-[#B9A6AA]">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#E87991]" />
                      <span className="font-semibold text-[#FFF7F7]">2025</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#8D7B80]" />
                      <span>Coimbatore, India</span>
                    </div>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold mb-3 flex items-center gap-1.5">
                    <Terminal size={14} className="text-[#E87991]" /> Practical Engineering Contributions
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs text-[#B9A6AA]">
                    {responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E87991] mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed text-[#FFF7F7]">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-4 border-t border-[#49333D] flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#8D7B80] mr-2">Core Tech:</span>
                  {technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded bg-[#241820] text-[#FFF7F7] border border-[#49333D] font-mono font-medium"
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
