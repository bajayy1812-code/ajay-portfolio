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
    <section id="education" className="section-padding bg-[#E9E2D5]/40 relative border-t border-[#D8D0C2]">
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
              <span className="text-xs font-mono uppercase tracking-widest text-[#D9541E] font-bold">Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
              Education & <span className="editorial-serif font-medium text-[#D9541E]">Certifications.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#77736B] max-w-2xl">
              Formal academic engineering credentials and verified software development certifications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left: Formal Degree Education Card */}
            <motion.div variants={fadeUp} className="lg:col-span-6 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold flex items-center gap-2">
                <GraduationCap size={16} className="text-[#D9541E]" />
                Academic Background
              </h3>

              <div className="editorial-card p-6 sm:p-8 relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D8D0C2]">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#E9E2D5] text-[#D9541E] font-bold border border-[#D8D0C2]">
                    B.E. Undergraduate Degree
                  </span>
                  <span className="text-xs font-mono text-[#77736B] flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#D9541E]" /> 2023 – 2027
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-[#111111] mb-1">
                  Electronics and Communication Engineering
                </h4>
                <p className="text-sm text-[#D9541E] font-semibold mb-3">
                  Sri Shakthi Institute of Engineering and Technology
                </p>
                <p className="text-xs text-[#77736B] flex items-center gap-1 mb-6">
                  <MapPin size={13} className="text-[#77736B]" /> Coimbatore, Tamil Nadu, India
                </p>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#D8D0C2]">
                  <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#D8D0C2]">
                    <span className="text-[11px] font-mono text-[#77736B] block">Academic Score</span>
                    <span className="text-sm font-bold text-[#D9541E] font-mono">CGPA: 7.94 / 10.0</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#D8D0C2]">
                    <span className="text-[11px] font-mono text-[#77736B] block">Current Status</span>
                    <span className="text-sm font-bold text-[#111111] font-mono">Final Year</span>
                  </div>
                </div>
              </div>

              {/* Problem Solving Achievement Card */}
              <div className="editorial-card p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#E9E2D5] border border-[#D8D0C2] text-[#D9541E]">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#D9541E] font-bold block mb-1">
                      Problem Solving Milestone
                    </span>
                    <h4 className="text-base font-bold text-[#111111] mb-1">
                      100+ Data Structures & Algorithms Problems Solved
                    </h4>
                    <p className="text-xs text-[#77736B] leading-relaxed">
                      Rigorous practice across fundamental DSA concepts including arrays, strings, two pointers, searching, sorting, and algorithmic complexity analysis.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Verified Certifications */}
            <motion.div variants={fadeUp} className="lg:col-span-6 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold flex items-center gap-2">
                <Award size={16} className="text-[#D9541E]" />
                Industry Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="editorial-card p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#E9E2D5] text-[#111111] font-semibold border border-[#D8D0C2]">
                          {cert.issuer}
                        </span>
                        <span className="text-xs font-mono text-[#D9541E] font-bold flex items-center gap-1">
                          <CheckCircle2 size={13} /> {cert.year}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#111111] mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-[#77736B]">
                        {cert.type}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#D8D0C2] flex items-center justify-between text-xs font-mono text-[#77736B]">
                      <span>Credential Type: Professional Certification</span>
                      <span className="text-[#111111] font-semibold">Active & Valid</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Engineering Values Card */}
              <div className="p-6 rounded-2xl bg-[#E9E2D5] border border-[#D8D0C2] space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold">
                  Core Engineering Values
                </h4>
                <div className="space-y-2 text-xs text-[#77736B]">
                  <p>
                    • <strong className="text-[#111111]">Adherence to Standards:</strong> RESTful API principles, semantic HTML, and structured modular architecture.
                  </p>
                  <p>
                    • <strong className="text-[#111111]">Security by Default:</strong> Password hashing (bcrypt), stateless JWT authorization, and protected routes.
                  </p>
                  <p>
                    • <strong className="text-[#111111]">Continuous Quality:</strong> End-to-end automated testing with Playwright to safeguard core user flows.
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
