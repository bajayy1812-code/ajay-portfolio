import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, CalendarDays, MapPin, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const responsibilities = [
  'Developed a full-stack MERN application with complete frontend and backend integration.',
  'Created reusable React.js components for scalable and maintainable UI.',
  'Developed responsive user interfaces for seamless experience across devices.',
  'Implemented form handling and API integration between client and server.',
  'Built RESTful APIs using Node.js and Express.js following REST principles.',
  'Implemented CRUD operations with authentication and authorization.',
  'Integrated MongoDB using Mongoose ODM for data modeling and persistence.',
  'Managed version control using Git and GitHub for collaborative development.',
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-blue-electric/5 pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-blue-electric" />
            <span className="text-blue-electric text-sm font-semibold tracking-widest uppercase">Experience</span>
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4 text-text-primary">
            Experience & <span className="text-gradient-blue">Journey</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary max-w-xl mb-16 text-lg">
            My professional experience building real-world full-stack applications.
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-electric via-purple-primary to-transparent opacity-30" />

            <motion.div variants={stagger} className="space-y-8">
              {/* Timeline Item */}
              <motion.div variants={fadeUp} className="flex gap-8 md:gap-12">
                {/* Node */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <motion.div
                    animate={{ boxShadow: ['0 0 0 0 rgba(56,189,248,0)', '0 0 0 8px rgba(56,189,248,0.1)', '0 0 0 0 rgba(56,189,248,0)'] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-electric/15 border border-blue-electric/30 flex items-center justify-center relative z-10"
                  >
                    <Briefcase size={20} className="text-blue-electric" />
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex-1 glass-card rounded-2xl p-6 md:p-8 border border-white/8 hover:border-blue-electric/20 transition-all duration-300 mb-6"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-electric/10 text-blue-electric border border-blue-electric/20 uppercase tracking-wider">Internship</span>
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-xs text-green-400">Completed</span>
                      </div>
                      <h3 className="text-text-primary font-black text-xl md:text-2xl">MERN Stack Developer Intern</h3>
                      <p className="text-blue-electric font-semibold text-base mt-0.5">Frenzo Academy</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-right">
                      <div className="flex items-center gap-1.5 text-text-muted text-sm">
                        <CalendarDays size={13} />
                        <span>2025</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-text-muted text-sm">
                        <MapPin size={13} />
                        <span>Coimbatore, India</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    Completed an intensive full-stack development internship building real-world MERN applications. Gained hands-on experience across the entire web development lifecycle — from designing RESTful APIs to building secure, responsive front-end interfaces.
                  </p>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-text-primary font-semibold text-sm mb-3 flex items-center gap-2">
                      <span className="w-4 h-px bg-purple-primary" />
                      Key Responsibilities
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2.5">
                      {responsibilities.map((r, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + i * 0.07 }}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2 size={14} className="text-blue-electric flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-xs leading-relaxed">{r}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6 pt-5 border-t border-white/8">
                    <p className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-3">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Git', 'GitHub', 'REST APIs'].map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 rounded-lg border border-white/10 bg-bg-main/60 text-text-secondary font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* "Currently" indicator */}
              <motion.div variants={fadeUp} className="flex gap-8 md:gap-12">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-green-400/10 border border-green-400/30 flex items-center justify-center relative z-10"
                  >
                    <span className="text-green-400 text-lg">✦</span>
                  </motion.div>
                </div>
                <div className="flex-1 glass-card rounded-2xl p-5 border border-green-400/20 flex items-center gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
                  <div>
                    <p className="text-text-primary font-bold text-sm">Currently Open to Opportunities</p>
                    <p className="text-text-secondary text-xs mt-0.5">Seeking full-time roles in UI/UX design and/or full-stack development.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

