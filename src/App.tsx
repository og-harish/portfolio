import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import AILab from "./components/AILab";
import ResumeCTA from "./components/ResumeCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import HireMeModal from "./components/HireMeModal";
import ResumeModal from "./components/ResumeModal";
import LoadingScreen from "./components/LoadingScreen";
import CursorGlow from "./components/CursorGlow";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ThreeDCanvasBg from "./components/ThreeDCanvasBg";

function AppContent() {
  const [isHireMeOpen, setIsHireMeOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading || isResumeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading, isResumeOpen]);

  const openHireMe = () => setIsHireMeOpen(true);
  const closeHireMe = () => setIsHireMeOpen(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100]"
          >
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>
      <CursorGlow />
      <ThemeSwitcher />
      
      {/* Background Atmospheric Effects & Interactive 3D Canvas */}
      <ThreeDCanvasBg />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden font-sans">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar onHireMeClick={openHireMe} />
        <main>
          <Hero onHireMeClick={openHireMe} onResumeClick={openResume} />
          <TrustStrip />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <AILab />
          <Services />
          <ResumeCTA onHireMeClick={openHireMe} onResumeClick={openResume} />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
        <HireMeModal isOpen={isHireMeOpen} onClose={closeHireMe} />
        <AnimatePresence>
          {isResumeOpen && (
            <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
