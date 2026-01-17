import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GridBackground from './components/GridBackground';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <GridBackground>
      <Navbar onContactClick={() => setIsContactModalOpen(true)} />
      <main>
        <Hero onContactClick={() => setIsContactModalOpen(true)} />
        <About />
        <TechStack />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <footer className="py-12 border-t border-white/5 text-center relative z-10">
        <p className="text-[10px] font-black tracking-widest text-[#64748b] uppercase mb-2">Developed By</p>
        <p className="text-sm font-bold">Manish Patel © {new Date().getFullYear()}</p>
      </footer>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </GridBackground>
  );
}

export default App;
