import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'INÍCIO', href: '#home' },
    { name: 'PERFIL', href: '#sobremim' },
    { name: 'PROJETOS', href: '#projetos' },
    { name: 'REGISTROS', href: '#galeria' },
    { name: 'CONTATO', href: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-base/80 backdrop-blur-md py-4 border-b border-cyber-border shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white z-50 flex items-center gap-2 tracking-tighter">
          <div className="w-2 h-2 bg-cyber-red animate-pulse"></div>
          <span className="font-mono">J.EMANUEL</span>
          <span className="text-cyber-muted text-xs font-mono font-normal ml-2 hidden sm:inline-block border border-cyber-border px-2 py-0.5 rounded">CYBERSEC</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-cyber-muted hover:text-white text-xs font-mono tracking-widest transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-cyber-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button 
            className="md:hidden text-cyber-muted hover:text-white transition-colors z-50 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Menu"
        >
            <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-current transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-full h-0.5 bg-current transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-full h-0.5 bg-current transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
        </button>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 top-0 pt-24 bg-cyber-surface/95 backdrop-blur-xl z-40 flex flex-col items-center space-y-6 md:hidden border-b border-cyber-border"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-cyber-muted hover:text-white font-mono tracking-widest transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
