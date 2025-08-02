import React, { useState, useEffect, useRef } from 'react';

// Importando os componentes das seções
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Formations from './components/Formations/Formations';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSection, setVisibleSection] = useState('home');
  const sectionRef = useRef(null);

  // Efeito para a animação de transição entre seções
  useEffect(() => {
    if (sectionRef.current) {
        sectionRef.current.classList.remove('fade-in');
        void sectionRef.current.offsetWidth; // Força o navegador a recalcular o layout
        sectionRef.current.classList.add('fade-in');
    }
    setVisibleSection(activeSection);
  }, [activeSection]);

  // Função para renderizar a seção ativa
  const renderSection = () => {
    switch (visibleSection) {
      case 'home':
        // AQUI ESTÁ A MUDANÇA: Passando a função para o componente Home
        return <Home setActiveSection={setActiveSection} />;
      case 'projetos':
        return <Projects />;
      case 'sobremim':
        return <About />;
      case 'formações':
        return <Formations />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-black min-h-screen font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main ref={sectionRef}>
        {renderSection()}
      </main>

      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} João Emanuel Nascimento. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}