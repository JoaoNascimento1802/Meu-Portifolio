import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Formations from './components/Formations/Formations';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <div className="bg-cyber-base min-h-screen font-sans">
      <Header />
      <main className="focus:outline-none" tabIndex="-1">
        <Home />
        <About />
        <Formations />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <footer className="bg-black text-white py-12 border-t border-cyber-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-cyber-muted text-sm font-mono tracking-widest uppercase">
              &copy; {new Date().getFullYear()} João Emanuel Nascimento
            </p>
            <p className="text-xs text-cyber-muted font-mono opacity-50">
              Cybersecurity // Offensive Security // Red Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
