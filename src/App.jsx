import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import UIUXShowcase from './components/UIUXShowcase';
import Education from './components/Education';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main text-text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <UIUXShowcase />
        <Education />
        <ResumeViewer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
