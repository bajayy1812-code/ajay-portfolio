import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Trophy, CheckCircle2, Calendar, MapPin } from 'lucide-react';

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
  },
  {
    title: 'Introduction to MERN Stack',
    issuer: 'Simplilearn SkillUp',
    year: 'Verified',
    type: 'Full Stack Web Development',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="education" className="section-padding bg-[#241820]/40 relative border-t border-[#49333D]">
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
              <span className="text-xs font-mono uppercase tracking-widest text-[#E87991] font-bold">Academics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#FFF7F7]">
              Learning & <span className="editorial-serif font-medium text-[#E87991]">Growth.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#B9A6AA] max-w-2xl">
              Formal academic credentials, industry certifications, and verified milestones in software engineering.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Formal Degree Education Card */}
            <motion.div variants={fadeUp} className="lg:col-span-6 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold flex items-center gap-2">
                <GraduationCap size={16} className="text-[#E87991]" />
                Academic Background
              </h3>

              <div className="burgundy-card p-6 sm:p-8 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#49333D]">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#241820] text-[#E87991] font-bold border border-[#49333D]">
                    B.E. Undergraduate Degree
                  </span>
                  <span className="text-xs font-mono text-[#B9A6AA] flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#E87991]" /> 2023 – 2027 (Expected)
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-[#FFF7F7] mb-1">
                  Electronics and Communication Engineering
                </h4>
                <p className="text-sm text-[#D6A6A0] font-semibold mb-3">
                  Sri Shakthi Institute of Engineering and Technology
                </p>
                <p className="text-xs text-[#B9A6AA] flex items-center gap-1 mb-6">
                  <MapPin size={13} className="text-[#8D7B80]" /> Coimbatore, Tamil Nadu, India
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#49333D]">
                  <div className="p-3 rounded-xl bg-[#241820] border border-[#49333D]">
                    <span className="text-[11px] font-mono text-[#8D7B80] block">Academic Score</span>
                    <span className="text-sm font-bold text-[#E87991] font-mono">CGPA: 7.94 / 10.0</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#241820] border border-[#49333D]">
                    <span className="text-[11px] font-mono text-[#8D7B80] block">Current Status</span>
                    <span className="text-sm font-bold text-[#FFF7F7] font-mono">Final Year</span>
                  </div>
                </div>
              </div>

              {/* Problem Solving Achievement Card */}
              <div className="burgundy-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#241820] border border-[#49333D] text-[#E87991]">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#E87991] font-bold block mb-1">
                      Problem Solving Milestone
                    </span>
                    <h4 className="text-base font-bold text-[#FFF7F7] mb-1">
                      Solved 100+ DSA Problems
                    </h4>
                    <p className="text-xs text-[#B9A6AA] leading-relaxed">
                      Practiced core algorithmic topics including arrays, two pointers, strings, binary search, and recursion across competitive programming platforms.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Verified Certifications */}
            <motion.div variants={fadeUp} className="lg:col-span-6 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold flex items-center gap-2">
                <Award size={16} className="text-[#E87991]" />
                Industry Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="burgundy-card p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#241820] text-[#FFF7F7] font-semibold border border-[#49333D]">
                          {cert.issuer}
                        </span>
                        <span className="text-xs font-mono text-[#E87991] font-bold flex items-center gap-1">
                          <CheckCircle2 size={13} /> {cert.year}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#FFF7F7] mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#B9A6AA]">
                        {cert.type}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#49333D] flex items-center justify-between text-xs font-mono text-[#B9A6AA]">
                      <span>Credential Type: Professional Certification</span>
                      <span className="text-[#E87991] font-semibold">Active & Valid</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Engineering Values Card */}
              <div className="p-6 rounded-2xl bg-[#241820] border border-[#49333D] space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFF7F7] font-bold">
                  Core Engineering Principles
                </h4>
                <div className="space-y-2 text-xs text-[#B9A6AA]">
                  <p>
                    • <strong className="text-[#FFF7F7]">Standard REST Architecture:</strong> Predictable endpoint structures, JSON serialization, and modular controllers.
                  </p>
                  <p>
                    • <strong className="text-[#FFF7F7]">Defensive Data Security:</strong> Passwords hashed with bcrypt, stateless JWT tokens, and role-based route guards.
                  </p>
                  <p>
                    • <strong className="text-[#FFF7F7]">Automated Reliability:</strong> Integration and end-to-end testing with Playwright to safeguard primary business flows.
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
