import React from 'react';

// Importando os componentes das seções
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Formations from './components/Formations/Formations';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Header />
      
      <main className="focus:outline-none" tabIndex="-1">
        <Home />
        <Projects />
        <Gallery />
        <About />
        <Formations />
        <Contact />
      </main>

      <footer className="bg-black text-white py-10 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} João Emanuel Nascimento. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Desenvolvido com <span className="text-purple-400">React</span> e <span className="text-purple-400">Tailwind CSS</span>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
