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
      className="fixed inset-0 z-50 flex flex-col bg-[#111111]/85 backdrop-blur-md"
    >
      {/* Modal Top Control Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3.5 border-b border-[#D8D0C2] bg-[#F3EEE3] flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#E9E2D5] border border-[#D8D0C2] flex items-center justify-center text-[#D9541E]">
            <FileText size={16} />
          </div>
          <div>
            <p className="text-[#111111] font-bold text-sm tracking-wide">Ajay B — Resume</p>
            <p className="text-[#77736B] text-[11px] font-mono">Ajay_B_Full_Stack_Developer_Resume_Final.pdf</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center gap-1 bg-[#E9E2D5] border border-[#D8D0C2] rounded-lg px-2 py-1">
            <button
              onClick={() => setScale((s) => Math.max(0.6, Number((s - 0.1).toFixed(1))))}
              className="p-1 rounded hover:bg-[#FFFFFF] text-[#77736B] hover:text-[#111111] transition-colors"
              aria-label="Zoom out"
              title="Zoom out"
            >
              <ZoomOut size={14} />
            </button>
            <span className="text-xs font-mono text-[#D9541E] px-2 min-w-[48px] text-center font-bold">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={() => setScale((s) => Math.min(2.0, Number((s + 0.1).toFixed(1))))}
              className="p-1 rounded hover:bg-[#FFFFFF] text-[#77736B] hover:text-[#111111] transition-colors"
              aria-label="Zoom in"
              title="Zoom in"
            >
              <ZoomIn size={14} />
            </button>
            <button
              onClick={() => setScale(1)}
              className="p-1 rounded hover:bg-[#FFFFFF] text-[#77736B] hover:text-[#111111] transition-colors"
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
            className="btn-primary text-xs py-1.5 px-3.5 shadow-sm"
          >
            <Download size={13} />
            <span className="hidden sm:inline">Download</span>
          </a>

          {/* Open in New Tab Button */}
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs py-1.5 px-3"
          >
            <ExternalLink size={13} />
            <span className="hidden sm:inline">New Tab</span>
          </a>

          {/* Close/Back Button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#E9E2D5] border border-[#D8D0C2] text-[#77736B] hover:text-[#111111] transition-colors ml-1"
            aria-label="Close viewer"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* PDF Viewport */}
      <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-[#111111]/40">
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease',
            width: '100%',
            maxWidth: '850px',
            minHeight: '88vh',
          }}
          className="shadow-2xl rounded-lg overflow-hidden bg-white"
        >
          <iframe
            src={`${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
            title="Ajay B Resume Document"
            className="w-full h-[88vh] border-0"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ResumeViewer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="resume" className="section-padding bg-[#F3EEE3] relative border-t border-[#D8D0C2]">
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
            <motion.div variants={fadeUp} className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-px bg-[#D9541E]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#D9541E] font-bold">Curriculum Vitae</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#111111]">
                  Verified <span className="editorial-serif font-medium text-[#D9541E]">Developer Resume.</span>
                </h2>
                <p className="mt-2 text-sm sm:text-base text-[#77736B] max-w-xl">
                  Accurate, recruiter-verified documentation of technical qualifications, project architecture, and engineering background.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-secondary text-xs"
                >
                  <Maximize2 size={14} />
                  <span>Expand Fullscreen</span>
                </button>

                <a
                  href={RESUME_PATH}
                  download="Ajay_B_Full_Stack_Developer_Resume_Final.pdf"
                  className="btn-primary text-xs"
                >
                  <Download size={14} />
                  <span>Download PDF</span>
                </a>
              </div>
            </motion.div>

            {/* Embedded Resume Preview Container */}
            <motion.div
              variants={fadeUp}
              className="editorial-card overflow-hidden shadow-md"
            >
              {/* Document Header Bar */}
              <div className="flex items-center justify-between px-6 py-3.5 bg-[#FAF7F0] border-b border-[#D8D0C2]">
                <div className="flex items-center gap-2.5">
                  <FileText size={16} className="text-[#D9541E]" />
                  <span className="text-xs font-mono text-[#111111] font-semibold">
                    Ajay_B_Full_Stack_Developer_Resume_Final.pdf
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-[#E9E2D5] text-[#77736B] border border-[#D8D0C2]">
                    Single Page Verified
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#111111] hidden sm:flex items-center gap-1.5 font-medium">
                    <CheckCircle2 size={13} className="text-[#D9541E]" /> ATS Optimized
                  </span>
                  <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#D9541E] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Open in new tab</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* In-page Embedded Document Frame */}
              <div className="w-full bg-[#E9E2D5]/40 p-3 sm:p-6 flex justify-center">
                <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm border border-[#D8D0C2] overflow-hidden">
                  <iframe
                    src={`${RESUME_PATH}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                    title="Ajay B Full Stack Developer Resume"
                    className="w-full h-[640px] sm:h-[750px] border-0"
                  />
                </div>
              </div>

              {/* Bottom Footer Information */}
              <div className="px-6 py-3 bg-[#FAF7F0] border-t border-[#D8D0C2] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#77736B]">
                <span>Contact directly for custom portfolio inquiries or technical evaluations.</span>
                <span className="font-mono text-[#111111] font-semibold">Email: bajayy1812@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Modal View */}
      <AnimatePresence>
        {isModalOpen && <ResumeModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
