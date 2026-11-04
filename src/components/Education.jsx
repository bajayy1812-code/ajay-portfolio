import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Trophy, CheckCircle2, Calendar, MapPin, Code2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const certifications = [
  {
    title: 'JavaScript (Basic & Intermediate)',
    issuer: 'HackerRank',
    year: 'Verified',
    type: 'Problem Solving & JS Competency',
    accent: '#22D3EE',
  },
  {
    title: 'Introduction to MERN Stack',
    issuer: 'Simplilearn SkillUp',
    year: 'Verified',
    type: 'Full Stack Web Development',
    accent: '#6366F1',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="education" className="section-padding bg-[#111827] relative border-t border-[#1E293B]">
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
              <span className="w-6 h-px bg-[#22D3EE]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#22D3EE]">Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
              Education & <span className="text-gradient-accent">Certifications.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#94A3B8] max-w-2xl">
              Formal academic engineering credentials and verified certifications in software development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Formal Degree Education Card */}
            <motion.div variants={fadeUp} className="lg:col-span-6 space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#F8FAFC] font-bold flex items-center gap-2">
                <GraduationCap size={18} className="text-[#6366F1]" />
                Academic Background
              </h3>

              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1E293B] relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1E293B]">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#6366F1]/10 text-[#6366F1] font-semibold border border-[#6366F1]/20">
                    B.E. Undergraduate Degree
                  </span>
                  <span className="text-xs font-mono text-[#94A3B8] flex items-center gap-1.5">
                    <Calendar size={13} /> 2023 – 2027
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-[#F8FAFC] mb-1">
                  Electronics and Communication Engineering
                </h4>
                <p className="text-sm text-[#22D3EE] font-medium mb-3">
                  Sri Shakthi Institute of Engineering and Technology
                </p>
                <p className="text-xs text-[#94A3B8] flex items-center gap-1 mb-6">
                  <MapPin size={13} className="text-[#64748B]" /> Coimbatore, Tamil Nadu, India
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1E293B]">
                  <div className="p-3 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
                    <span className="text-[11px] font-mono text-[#64748B] block">Academic Score</span>
                    <span className="text-sm font-bold text-green-400 font-mono">CGPA: 7.94 / 10.0</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
                    <span className="text-[11px] font-mono text-[#64748B] block">Current Status</span>
                    <span className="text-sm font-bold text-[#F8FAFC] font-mono">Final Year</span>
                  </div>
                </div>
              </div>

              {/* Problem Solving Achievement Card */}
              <div className="glass-card rounded-2xl p-6 border border-[#1E293B]">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-[#F8FAFC] font-mono block">100+ Problems</span>
                    <h5 className="text-sm font-semibold text-[#F8FAFC] mt-0.5">
                      Data Structures & Algorithms Solved
                    </h5>
                    <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                      Rigorous analytical practice covering arrays, string manipulation, hash maps, linked lists, and sorting techniques.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Certifications & Verification */}
            <motion.div variants={fadeUp} className="lg:col-span-6 space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#F8FAFC] font-bold flex items-center gap-2">
                <Award size={18} className="text-[#22D3EE]" />
                Technical Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="glass-card rounded-2xl p-6 border border-[#1E293B] glass-card-hover flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-[#64748B] uppercase">
                          {cert.type}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1 font-semibold">
                          <CheckCircle2 size={11} /> {cert.year}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#F8FAFC] mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#22D3EE] font-mono">
                        Issued by: {cert.issuer}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#1E293B]/60 text-[11px] text-[#94A3B8] flex items-center justify-between">
                      <span>Curriculum Verified</span>
                      <span className="font-mono text-[#64748B]">Practical Assessment</span>
                    </div>
                  </div>
                ))}

                {/* Recruiter Note */}
                <div className="p-5 rounded-2xl bg-[#151D2E]/50 border border-[#1E293B] text-xs text-[#94A3B8] leading-relaxed">
                  <p>
                    <strong className="text-[#F8FAFC]">Continuous Learning:</strong> In addition to coursework, actively engaging in self-directed full stack architecture studies and software testing automation with modern tooling.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
