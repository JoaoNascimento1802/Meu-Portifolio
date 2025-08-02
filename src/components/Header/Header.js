import React from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = ['Home', 'Projetos', 'Sobre Mim', 'Formações'];

  return (
    <header className="bg-black/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <span className="text-purple-500">J</span>oão{' '}
          <span className="text-purple-500">E</span>manuel
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase().replace(' ', ''))}
              className={`text-white font-medium relative transition-colors duration-300 ${
                activeSection === item.toLowerCase().replace(' ', '') ? 'text-purple-400' : 'hover:text-purple-400'
              }`}
            >
              {item}
              {activeSection === item.toLowerCase().replace(' ', '') && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-500"></span>
              )}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          {/* Botão para menu mobile pode ser adicionado aqui */}
        </div>
      </nav>
    </header>
  );
};

export default Header;