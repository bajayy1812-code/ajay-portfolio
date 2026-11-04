import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Download, ExternalLink, X, FileText, ZoomIn, ZoomOut, RotateCcw, Maximize2, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
      className="fixed inset-0 z-50 flex flex-col bg-[#0B0F19]/95 backdrop-blur-xl"
    >
      {/* Modal Top Control Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 border-b border-[#1E293B] bg-[#111827] flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1]">
            <FileText size={16} />
          </div>
          <div>
            <p className="text-[#F8FAFC] font-bold text-sm tracking-wide">Ajay B — Resume</p>
            <p className="text-[#94A3B8] text-[11px] font-mono">Ajay_B_Full_Stack_Developer_Resume_Final.pdf</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center gap-1 bg-[#151D2E] border border-[#1E293B] rounded-lg px-2 py-1">
            <button
              onClick={() => setScale((s) => Math.max(0.6, Number((s - 0.1).toFixed(1))))}
              className="p-1 rounded hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              aria-label="Zoom out"
              title="Zoom out"
            >
              <ZoomOut size={14} />
            </button>
            <span className="text-xs font-mono text-[#6366F1] px-2 min-w-[48px] text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale((s) => Math.min(2.0, Number((s + 0.1).toFixed(1))))}
              className="p-1 rounded hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              aria-label="Zoom in"
              title="Zoom in"
            >
              <ZoomIn size={14} />
            </button>
            <button
              onClick={() => setScale(1)}
              className="p-1 rounded hover:bg-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              aria-label="Reset zoom"
              title="Reset zoom"
            >
              <RotateCcw size={13} />
            </button>
          </div>

          {/* Download PDF Button */}
          <a
            href={RESUME_PATH}
            download="Ajay_B_Full_Stack_Developer_Resume_Final.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#6366F1] text-white text-xs font-semibold hover:bg-[#4F46E5] transition-colors shadow-sm"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Download</span>
          </a>

          {/* Open in New Tab Button */}
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151D2E] border border-[#1E293B] text-[#22D3EE] text-xs font-semibold hover:bg-[#1E293B] transition-colors"
          >
            <ExternalLink size={13} />
            <span className="hidden sm:inline">New Tab</span>
          </a>

          {/* Close/Back Button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#151D2E] border border-[#1E293B] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors ml-1"
            aria-label="Close viewer"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Embedded PDF Canvas with Zoom transform */}
      <div className="flex-1 overflow-auto bg-[#0B0F19] flex items-start justify-center p-4 sm:p-8">
        <div
          className="w-full max-w-4xl transition-transform duration-200 origin-top"
          style={{ transform: `scale(${scale})` }}
        >
          <div className="rounded-xl overflow-hidden border border-[#1E293B] shadow-2xl bg-[#151D2E]">
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
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => {
      setModalOpen(true);
    };
    window.addEventListener('open-resume-modal', handleOpenModal);
    return () => window.removeEventListener('open-resume-modal', handleOpenModal);
  }, []);

  return (
    <>
      <section id="resume" className="section-padding bg-[#111827] relative border-t border-[#1E293B]">
        <div className="container-custom" ref={ref}>
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="text-center"
          >
            {/* Section Header */}
            <motion.div variants={fadeUp} className="mb-10">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-6 h-px bg-[#6366F1]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#6366F1]">
                  Official Document
                </span>
                <span className="w-6 h-px bg-[#6366F1]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
                Curriculum <span className="text-gradient-accent">Vitae.</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#94A3B8] max-w-2xl mx-auto">
                Inspect my verified qualifications, MERN stack experience, and academic record directly through the integrated viewer.
              </p>
            </motion.div>

            {/* Quick Actions Bar */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3.5 mb-8">
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <Maximize2 size={14} />
                <span>Fullscreen Viewer</span>
              </button>

              <a
                href={RESUME_PATH}
                download="Ajay_B_Full_Stack_Developer_Resume_Final.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#151D2E] hover:bg-[#1E293B] text-[#F8FAFC] border border-[#1E293B] font-semibold text-xs transition-colors"
              >
                <Download size={14} className="text-[#22D3EE]" />
                <span>Download PDF</span>
              </a>

              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#151D2E] hover:bg-[#1E293B] text-[#F8FAFC] border border-[#1E293B] font-semibold text-xs transition-colors"
              >
                <ExternalLink size={14} />
                <span>Open in New Tab</span>
              </a>
            </motion.div>

            {/* In-Page Embedded PDF Viewer */}
            <motion.div
              variants={fadeUp}
              className="max-w-4xl mx-auto glass-card rounded-2xl border border-[#1E293B] p-4 sm:p-6 shadow-xl text-left"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#1E293B]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#6366F1]/10 text-[#6366F1]">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#F8FAFC]">
                      Ajay_B_Full_Stack_Developer_Resume_Final.pdf
                    </h4>
                    <span className="text-[11px] text-green-400 font-mono flex items-center gap-1">
                      <CheckCircle2 size={11} /> Verified Single-Page PDF Format
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="px-3 py-1.5 rounded-lg bg-[#0B0F19] border border-[#1E293B] text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5"
                >
                  <Maximize2 size={12} /> Expand
                </button>
              </div>

              {/* Viewport Frame */}
              <div className="relative w-full rounded-xl overflow-hidden border border-[#1E293B] bg-[#0B0F19]">
                <iframe
                  src={`${RESUME_PATH}#view=FitH&toolbar=0&navpanes=0`}
                  title="Ajay B Resume Preview"
                  className="w-full"
                  style={{ height: '680px' }}
                />
              </div>

              <div className="mt-3.5 flex items-center justify-between text-[11px] font-mono text-[#64748B]">
                <span>Origin: public/resume/Ajay_B_Full_Stack_Developer_Resume_Final.pdf</span>
                <span>Responsive Frame</span>
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
