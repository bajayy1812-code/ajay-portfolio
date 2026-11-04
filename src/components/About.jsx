import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code2, Compass, Layers, CheckCircle2, Terminal } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="about" className="section-padding bg-[#111827] relative border-t border-[#1E293B]">
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
              <span className="text-xs font-mono uppercase tracking-widest text-[#6366F1]">About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
              Engineering Mindset. <span className="text-gradient-accent">Full Stack Execution.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#94A3B8] max-w-2xl">
              An authentic overview of my academic foundation, technical journey, and development philosophy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative Column */}
            <motion.div variants={fadeUp} className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              <div className="p-6 rounded-xl bg-[#151D2E] border border-[#1E293B] shadow-sm">
                <h3 className="text-base font-semibold text-[#F8FAFC] mb-3 flex items-center gap-2">
                  <Terminal size={17} className="text-[#6366F1]" />
                  Who I Am & Development Journey
                </h3>
                <p className="mb-3.5">
                  I am a final-year <span className="text-[#F8FAFC] font-medium">Electronics and Communication Engineering</span> student at Sri Shakthi Institute of Engineering and Technology, specializing in full stack web development with the MERN stack.
                </p>
                <p className="mb-3.5">
                  My development journey started with foundational programming and transitioned into architecting scalable web applications. Through practical internship experience at <span className="text-[#F8FAFC] font-medium">Frenzo Academy</span> and hands-on project implementations, I have mastered the complete application lifecycle—from designing modular, responsive React frontends to engineering secure Node.js/Express APIs and schema modeling in MongoDB.
                </p>
                <p>
                  I focus on writing clean, maintainable code, adhering to RESTful standards, implementing robust authorization mechanisms (JWT & RBAC), and delivering intuitive user experiences without unnecessary complexity.
                </p>
              </div>

              {/* Career Objective & Philosophy */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#151D2E] border border-[#1E293B]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#22D3EE] mb-2 flex items-center gap-1.5 font-bold">
                    <Compass size={14} /> Career Objective
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Seeking a full-time role as a Full Stack or Frontend Developer in a product-focused engineering environment where I can contribute to mission-critical features and expand architectural depth.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#151D2E] border border-[#1E293B]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#6366F1] mb-2 flex items-center gap-1.5 font-bold">
                    <Layers size={14} /> Technical Focus
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    Specialized in MERN stack architecture, state management, REST API design, component reusability, database querying, and rigorous problem-solving with data structures.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Educational & Professional Strengths Column */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-5">
              {/* Education Highlight Card */}
              <div className="p-6 rounded-xl bg-[#151D2E] border border-[#1E293B] relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-[#6366F1]/10 text-[#6366F1]">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider block">Education</span>
                    <h4 className="text-sm font-bold text-[#F8FAFC]">Bachelor of Engineering (B.E.)</h4>
                  </div>
                </div>

                <p className="text-sm font-medium text-[#F8FAFC]">
                  Electronics & Communication Engineering
                </p>
                <p className="text-xs text-[#94A3B8] mt-1">
                  Sri Shakthi Institute of Engineering and Technology, Coimbatore
                </p>

                <div className="mt-4 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#94A3B8]">2023 – 2027</span>
                  <span className="px-2.5 py-1 rounded bg-[#22D3EE]/10 text-[#22D3EE] font-mono font-semibold border border-[#22D3EE]/20">
                    CGPA: 7.94 / 10.0
                  </span>
                </div>
              </div>

              {/* Professional Strengths Checklist */}
              <div className="p-6 rounded-xl bg-[#151D2E] border border-[#1E293B]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F8FAFC] mb-4 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 size={15} className="text-[#6366F1]" />
                  Key Professional Strengths
                </h4>

                <ul className="space-y-3 text-xs text-[#94A3B8]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-1.5 flex-shrink-0" />
                    <span><strong className="text-[#F8FAFC]">Full-Cycle MERN Proficiency:</strong> Seamless integration between React.js components, Express routers, and MongoDB collections.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-1.5 flex-shrink-0" />
                    <span><strong className="text-[#F8FAFC]">Secure Auth Implementation:</strong> Hands-on experience with salted password hashing (bcrypt) and stateless JWT verification.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-1.5 flex-shrink-0" />
                    <span><strong className="text-[#F8FAFC]">Algorithmic Foundations:</strong> 100+ Data Structures & Algorithms problems solved across arrays, strings, recursion, and sorting.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] mt-1.5 flex-shrink-0" />
                    <span><strong className="text-[#F8FAFC]">Collaborative Tooling:</strong> Clean Git workflows, branch conventions, and thorough API endpoint testing via Postman.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
