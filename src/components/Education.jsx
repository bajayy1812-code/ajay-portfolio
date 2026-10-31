import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Star, CheckCircle2, Trophy, Code2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const certifications = [
  {
    title: 'JavaScript',
    issuer: 'HackerRank',
    icon: Code2,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/25',
    verified: true,
  },
  {
    title: 'Introduction to MERN Stack',
    issuer: 'Simplilearn SkillUp',
    icon: Award,
    color: 'text-blue-electric',
    bg: 'bg-blue-electric/10',
    border: 'border-blue-electric/25',
    verified: true,
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section-padding bg-bg-main relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl bg-purple-primary/5 pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {/* Label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-purple-primary" />
            <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">Education & Achievements</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-16 text-text-primary">
            Qualifications & <span className="text-gradient-purple">Achievements</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Education Card */}
            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
                <GraduationCap size={20} className="text-purple-light" />
                Education
              </h3>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-7 border border-purple-primary/25 relative overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl bg-purple-primary/10 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-purple-primary/15 border border-purple-primary/30 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={22} className="text-purple-light" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-purple-light uppercase tracking-widest mb-1">B.E. Engineering</div>
                      <h4 className="text-text-primary font-black text-xl leading-tight">
                        Electronics & Communication Engineering
                      </h4>
                    </div>
                  </div>

                  <p className="text-text-secondary font-semibold text-sm mb-4">
                    Sri Shakthi Institute of Engineering and Technology
                  </p>
                  <p className="text-text-muted text-xs mb-5">Coimbatore, Tamil Nadu, India</p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass rounded-xl p-3.5 border border-white/8">
                      <p className="text-text-muted text-xs mb-1">Duration</p>
                      <p className="text-text-primary font-bold text-sm">2023 – 2027</p>
                    </div>
                    <div className="glass rounded-xl p-3.5 border border-green-400/20">
                      <p className="text-text-muted text-xs mb-1">Current CGPA</p>
                      <p className="text-green-400 font-bold text-sm">7.94 / 10.0</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-electric animate-pulse" />
                    <span className="text-xs text-blue-electric font-semibold">Currently Pursuing — Final Year</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Certifications + Achievements */}
            <div className="space-y-8">
              {/* Certifications */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
                  <Award size={20} className="text-blue-electric" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert) => {
                    const Icon = cert.icon;
                    return (
                      <motion.div
                        key={cert.title}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className={`glass-card rounded-2xl p-5 border ${cert.border} transition-all duration-300 flex items-center gap-4`}
                      >
                        <div className={`w-11 h-11 rounded-xl ${cert.bg} border ${cert.border} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={18} className={cert.color} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-text-primary font-bold text-sm">{cert.title}</h4>
                          <p className="text-text-muted text-xs">{cert.issuer}</p>
                        </div>
                        {cert.verified && (
                          <div className="flex items-center gap-1 text-green-400">
                            <CheckCircle2 size={14} />
                            <span className="text-xs font-semibold">Verified</span>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-bold text-text-primary mb-5 flex items-center gap-2">
                  <Trophy size={20} className="text-yellow-400" />
                  Achievements
                </h3>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-2xl p-6 border border-yellow-400/25 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(250,204,21,0.1)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                      <Trophy size={24} className="text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-gradient-purple mb-1">100+</div>
                      <h4 className="text-text-primary font-bold text-base">DSA Problems Solved</h4>
                      <p className="text-text-secondary text-xs mt-1.5 leading-relaxed">
                        Actively solving Data Structures and Algorithms problems to strengthen problem-solving and computational thinking skills.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {['Arrays', 'Strings', 'Linked Lists', 'Recursion', 'Sorting'].map((topic) => (
                          <span key={topic} className="text-xs px-2.5 py-1 rounded-lg border border-yellow-400/20 bg-yellow-400/5 text-yellow-400/80 font-medium">{topic}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

