import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Compass, Layers, Terminal, CheckCircle2, Award } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="section-padding bg-[#E9E2D5]/40 relative border-t border-[#D8D0C2]">
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
              <span className="text-xs font-mono uppercase tracking-widest text-[#D9541E] font-bold">About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
              Engineering Mindset. <span className="editorial-serif font-medium text-[#D9541E]">Full Stack Execution.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#77736B] max-w-2xl">
              An authentic overview of my academic foundation, development journey, and software engineering philosophy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative Column */}
            <motion.div variants={fadeUp} className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#77736B] leading-relaxed">
              <div className="editorial-card p-6 sm:p-7">
                <h3 className="text-base font-bold text-[#111111] mb-3 flex items-center gap-2">
                  <Terminal size={17} className="text-[#D9541E]" />
                  Who I Am & Development Journey
                </h3>
                <p className="mb-3.5">
                  I am a final-year <span className="text-[#111111] font-semibold">Electronics and Communication Engineering</span> student at Sri Shakthi Institute of Engineering and Technology, specializing in full-stack web development with the MERN stack.
                </p>
                <p className="mb-3.5">
                  My development journey started with core programming logic and algorithmic problem-solving, which quickly evolved into architecting production-grade web systems. Through an engineering internship at <span className="text-[#111111] font-semibold">Frenzo Academy</span> and comprehensive project implementations, I have mastered the complete application lifecycle—from designing modular, responsive React frontends to building secure Node.js/Express REST APIs and modeling relational document schemas in MongoDB.
                </p>
                <p>
                  I write clean, maintainable code adhering to REST standards, implement robust authentication and role-based access control (JWT & RBAC), and ensure cross-browser responsiveness and accessibility.
                </p>
              </div>

              {/* Career Objective & Philosophy */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="editorial-card p-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#D9541E] mb-2 flex items-center gap-1.5 font-bold">
                    <Compass size={14} /> Career Objective
                  </h4>
                  <p className="text-xs text-[#77736B] leading-relaxed">
                    Seeking a full-time role as a Full Stack Developer or Frontend Engineer in a collaborative product team where I can contribute to mission-critical features and scale robust web software.
                  </p>
                </div>

                <div className="editorial-card p-5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-1.5 font-bold">
                    <Layers size={14} className="text-[#D9541E]" /> Technical Focus
                  </h4>
                  <p className="text-xs text-[#77736B] leading-relaxed">
                    Specialized in MERN stack architecture, reusable React components, RESTful API routing, database indexing, automated testing with Playwright, and algorithmic rigor.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Educational & Professional Strengths Column */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-5">
              {/* Education Highlight Card */}
              <div className="editorial-card p-6 sm:p-7 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[#E9E2D5] text-[#D9541E] border border-[#D8D0C2]">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#77736B] uppercase tracking-wider block">Formal Education</span>
                    <h4 className="text-sm font-bold text-[#111111]">Bachelor of Engineering (B.E.)</h4>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[#111111]">
                  Electronics & Communication Engineering
                </p>
                <p className="text-xs text-[#77736B] mt-1">
                  Sri Shakthi Institute of Engineering and Technology, Coimbatore
                </p>

                <div className="mt-4 pt-4 border-t border-[#D8D0C2] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-[#77736B] uppercase block">Cumulative Grade</span>
                    <span className="font-mono font-bold text-[#D9541E] text-sm">CGPA: 7.94 / 10.0</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#77736B] uppercase block">Graduation Period</span>
                    <span className="font-mono font-semibold text-[#111111] text-xs">2023 – 2027</span>
                  </div>
                </div>
              </div>

              {/* Core Strengths Checklist */}
              <div className="editorial-card p-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold mb-3 flex items-center gap-1.5">
                  <Award size={14} className="text-[#D9541E]" /> Verified Competencies
                </h4>
                <div className="space-y-2.5 text-xs text-[#77736B]">
                  {[
                    'End-to-end MERN application development',
                    'RESTful API design with Express & Node.js',
                    'Protected routes & JWT authentication with RBAC',
                    'Database schema modeling with Mongoose & MongoDB',
                    '100+ Data Structures & Algorithms problems solved',
                    'Automated E2E testing using Playwright',
                  ].map((strength, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-[#D9541E] flex-shrink-0 mt-0.5" />
                      <span className="text-[#111111]">{strength}</span>
                    </div>
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
