import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Download, ExternalLink, X, FileText, ZoomIn, ZoomOut, RotateCcw, Maximize2, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const RESUME_PATH = '/resume/Ajay_B_Full_Stack_Developer_Resume_Final.pdf';

function ResumeModal({ onClose }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col bg-bg-main/95 backdrop-blur-xl"
    >
      {/* Modal Top Control Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 border-b border-white/10 glass flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-primary/15 border border-purple-primary/30 flex items-center justify-center">
            <FileText size={17} className="text-purple-light" />
          </div>
          <div>
            <p className="text-text-primary font-bold text-sm tracking-wide">Ajay B — Resume PDF</p>
            <p className="text-text-muted text-[11px] font-mono">Ajay_B_Full_Stack_Developer_Resume_Final.pdf</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center gap-1 glass border border-white/10 rounded-xl px-2.5 py-1.5">
            <button
              onClick={() => setScale((s) => Math.max(0.6, Number((s - 0.1).toFixed(1))))}
              className="p-1.5 rounded-lg hover:bg-white/10 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Zoom out"
              title="Zoom out"
            >
              <ZoomOut size={15} />
            </button>
            <span className="text-xs font-mono text-purple-light px-2 min-w-[48px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale((s) => Math.min(2.0, Number((s + 0.1).toFixed(1))))}
              className="p-1.5 rounded-lg hover:bg-white/10 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Zoom in"
              title="Zoom in"
            >
              <ZoomIn size={15} />
            </button>
            <button
              onClick={() => setScale(1)}
              className="p-1.5 rounded-lg hover:bg-white/10 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Reset zoom"
              title="Reset zoom"
            >
              <RotateCcw size={14} />
            </button>
          </div>

          {/* Download PDF Button */}
          <a
            href={RESUME_PATH}
            download="Ajay_B_Full_Stack_Developer_Resume_Final.pdf"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-primary text-white text-xs font-semibold hover:bg-purple-dark transition-all duration-200 shadow-lg shadow-purple-primary/25"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Download PDF</span>
          </a>

          {/* Open in New Tab Button */}
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass border border-blue-electric/30 text-blue-electric text-xs font-semibold hover:bg-blue-electric/10 transition-colors"
          >
            <ExternalLink size={14} />
            <span className="hidden sm:inline">New Tab</span>
          </a>

          {/* Close/Back Button */}
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-xl glass border border-white/15 text-text-secondary hover:text-text-primary hover:border-white/30 transition-colors ml-1"
            aria-label="Close viewer"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Embedded PDF Canvas with Zoom transform */}
      <div className="flex-1 overflow-auto bg-[#07090F] flex items-start justify-center p-4 sm:p-8">
        <div
          className="w-full max-w-4xl transition-transform duration-200 origin-top"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_12px_60px_rgba(0,0,0,0.9)] bg-bg-card">
            <iframe
              src={`${RESUME_PATH}#view=FitH&toolbar=1&navpanes=0`}
              title="Ajay B Original PDF Resume"
              className="w-full"
              style={{ height: '82vh', minHeight: '640px' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ResumeViewer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [modalOpen, setModalOpen] = useState(false);

  // Listen for global navbar / hero "open-resume-modal" trigger
  useEffect(() => {
    const handleOpenModal = () => {
      setModalOpen(true);
    };
    window.addEventListener('open-resume-modal', handleOpenModal);
    return () => window.removeEventListener('open-resume-modal', handleOpenModal);
  }, []);

  return (
    <>
      <section id="resume" className="section-padding bg-bg-secondary relative overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(139,92,246,0.07) 0%, transparent 65%)'
          }}
        />

        <div className="container-custom relative z-10" ref={ref}>
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className="text-center">
            {/* Section Label */}
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-purple-primary" />
              <span className="text-purple-light text-sm font-semibold tracking-widest uppercase">
                Official Resume
              </span>
              <div className="w-8 h-px bg-purple-primary" />
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4 text-text-primary">
              Curriculum <span className="text-gradient-purple">Vitae</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore my authentic qualification profile, engineering internship, full-stack MERN stack projects, and design competencies directly through the original PDF viewer.
            </motion.p>

            {/* Quick Actions Bar */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <motion.button
                onClick={() => setModalOpen(true)}
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(139,92,246,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-purple-primary text-white font-semibold text-sm shadow-lg shadow-purple-primary/25 hover:bg-purple-dark transition-all duration-200"
              >
                <Maximize2 size={16} />
                Open Fullscreen Viewer
              </motion.button>

              <motion.a
                href={RESUME_PATH}
                download="Ajay_B_Full_Stack_Developer_Resume_Final.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3 rounded-xl glass border border-white/15 text-text-primary font-semibold text-sm hover:border-purple-primary/40 hover:text-purple-light transition-all duration-200"
              >
                <Download size={16} />
                Download PDF
              </motion.a>

              <motion.a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3 rounded-xl glass border border-white/15 text-text-primary font-semibold text-sm hover:border-blue-electric/40 hover:text-blue-electric transition-all duration-200"
              >
                <ExternalLink size={16} />
                Open in New Tab
              </motion.a>
            </motion.div>

            {/* Dedicated In-Page Embedded PDF Viewer Window */}
            <motion.div
              variants={fadeUp}
              className="max-w-4xl mx-auto glass-card rounded-3xl border border-white/10 p-4 sm:p-6 shadow-2xl bg-bg-card/80 text-left"
            >
              {/* Browser/Document Chrome */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-primary/10 border border-purple-primary/25 flex items-center justify-center">
                    <FileText size={18} className="text-purple-light" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-bold text-sm">Ajay_B_Full_Stack_Developer_Resume_Final.pdf</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="flex items-center gap-1 text-[11px] text-green-400 font-semibold">
                        <CheckCircle2 size={12} /> Original PDF Verified
                      </span>
                      <span className="text-[11px] text-text-muted">· Standard 1-Page Format</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass border border-white/10 text-xs font-semibold text-text-secondary hover:text-text-primary hover:border-purple-primary/30 transition-colors"
                  >
                    <Maximize2 size={13} />
                    <span>Fullscreen</span>
                  </button>
                </div>
              </div>

              {/* PDF Container */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/8 bg-[#090B14]">
                <iframe
                  src={`${RESUME_PATH}#view=FitH&toolbar=0&navpanes=0`}
                  title="Ajay B Resume Preview"
                  className="w-full"
                  style={{ height: '700px' }}
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-text-muted">
                <span>Location: <code className="text-purple-light font-mono text-[11px]">public/resume/Ajay_B_Full_Stack_Developer_Resume_Final.pdf</code></span>
                <span>Zoom & navigation enabled inside viewport</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Viewer Modal */}
      <AnimatePresence>
        {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
