import React, { useEffect, useRef, useState } from 'react';

// Importando os ícones da pasta assets
import javaUrl from '../../assets/icons/java.svg';
import springbootUrl from '../../assets/icons/springboot.svg';
import cplusplusUrl from '../../assets/icons/c++.svg';
import mysqlUrl from '../../assets/icons/mysql.svg';
import gitUrl from '../../assets/icons/git.svg';
import githubUrl from '../../assets/icons/github.svg';
import arduinoUrl from '../../assets/icons/arduino.svg';
import cUrl from '../../assets/icons/c.svg';
import azureUrl from '../../assets/icons/azure.svg';
import linuxUrl from '../../assets/icons/linux.svg';
import ubuntuUrl from '../../assets/icons/ubuntu.svg';
import windowsUrl from '../../assets/icons/windows.svg';
import eclipseUrl from '../../assets/icons/eclipse.svg';

// Ícones para links e seções
const icons = {
  githubLink: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  linkedin: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  arrowRight: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  code: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  ),
  puzzle: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2a2 2 0 0 1 2 2h2a2 2 0 0 0 2-2V7z"></path><path d="M10 21v-2a2 2 0 0 1-2-2H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 1 2-2z"></path><path d="M21 14h-2a2 2 0 0 1-2-2v-2a2 2 0 0 0-2-2h-2a2 2 0 0 1-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"></path></svg>
  ),
  brainCircuit: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 2a2.5 2.5 0 0 0-2.5 2.5v.5a2.5 2.5 0 0 0 5 0v-.5A2.5 2.5 0 0 0 12 2z"></path><path d="M12 15a2.5 2.5 0 0 0-2.5 2.5v.5a2.5 2.5 0 0 0 5 0v-.5A2.5 2.5 0 0 0 12 15z"></path><path d="M5 12a2.5 2.5 0 0 0-2.5 2.5v.5a2.5 2.5 0 0 0 5 0v-.5A2.5 2.5 0 0 0 5 12z"></path><path d="M19 12a2.5 2.5 0 0 0-2.5 2.5v.5a2.5 2.5 0 0 0 5 0v-.5A2.5 2.5 0 0 0 19 12z"></path><path d="M12 9a2.5 2.5 0 0 0-2.5 2.5v.5a2.5 2.5 0 0 0 5 0v-.5A2.5 2.5 0 0 0 12 9z"></path><path d="M5 5a2.5 2.5 0 0 0-2.5 2.5v.5a2.5 2.5 0 0 0 5 0v-.5A2.5 2.5 0 0 0 5 5z"></path><path d="M19 5a2.5 2.5 0 0 0-2.5 2.5v.5a2.5 2.5 0 0 0 5 0v-.5A2.5 2.5 0 0 0 19 5z"></path><path d="M9.5 5a2.5 2.5 0 0 0 5 0"></path><path d="M9.5 19a2.5 2.5 0 0 0 5 0"></path><path d="M2.5 9.5a2.5 2.5 0 0 1 5 0"></path><path d="M16.5 9.5a2.5 2.5 0 0 1 5 0"></path></svg>
  ),
};

// Hook customizado para observar a interseção (animação de scroll)
const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Para a animação não repetir
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};


const Home = ({ setActiveSection }) => {
    const skills = [
        { name: 'Java', iconSrc: javaUrl }, { name: 'Spring Boot', iconSrc: springbootUrl },
        { name: 'C++', iconSrc: cplusplusUrl }, { name: 'MySQL', iconSrc: mysqlUrl },
        { name: 'Git', iconSrc: gitUrl }, { name: 'GitHub', iconSrc: githubUrl },
        { name: 'Arduino', iconSrc: arduinoUrl }, { name: 'C', iconSrc: cUrl },
        { name: 'Azure', iconSrc: azureUrl }, { name: 'Linux', iconSrc: linuxUrl },
        { name: 'Ubuntu', iconSrc: ubuntuUrl }, { name: 'Windows', iconSrc: windowsUrl },
        { name: 'Eclipse', iconSrc: eclipseUrl },
    ];
    
    const extendedSkills = [...skills, ...skills];

    // Criando refs e estados para cada elemento que será animado
    const [summaryRef, summaryIsVisible] = useIntersectionObserver({ threshold: 0.3 });
    const [philosophyRef, philosophyIsVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [card1Ref, card1IsVisible] = useIntersectionObserver({ threshold: 0.5, rootMargin: '0px 0px -50px 0px' });
    const [card2Ref, card2IsVisible] = useIntersectionObserver({ threshold: 0.5, rootMargin: '0px 0px -50px 0px' });
    const [card3Ref, card3IsVisible] = useIntersectionObserver({ threshold: 0.5, rootMargin: '0px 0px -50px 0px' });

    return (
        // O componente agora é um container para múltiplas seções
        <div>
            {/* --- SEÇÃO 1: APRESENTAÇÃO INICIAL --- */}
            <section id="home" className="min-h-screen bg-black text-white flex flex-col justify-center items-center pt-24 pb-12 px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700">
                            João Emanuel Nascimento
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-6">
                        Desenvolvedor Backend Java | Spring Boot
                    </p>
                    <p className="max-w-2xl mx-auto text-gray-400 mb-8 leading-relaxed">
                        Olá! Sou um desenvolvedor de 17 anos recém-formado pelo SENAI, apaixonado por transformar desafios complexos em software funcional e eficiente. Meu foco é construir soluções robustas e escaláveis com Java e o ecossistema Spring.
                    </p>
                    <div className="flex justify-center items-center gap-4 mb-12">
                        <button 
                            onClick={() => setActiveSection('projetos')}
                            className="bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                        >
                            Meus Projetos
                            <icons.arrowRight className="w-5 h-5" />
                        </button>
                        <a href="https://www.linkedin.com/in/joaonascimento1802" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors duration-300 p-2">
                            <icons.linkedin className="w-8 h-8" />
                        </a>
                        <a href="https://github.com/JoaoNascimento1802" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-500 transition-colors duration-300 p-2">
                            <icons.githubLink className="w-8 h-8" />
                        </a>
                    </div>
                </div>
                <div className="w-full max-w-6xl mx-auto mt-12 overflow-hidden relative">
                    <h3 className="text-center text-lg font-semibold text-gray-500 uppercase tracking-widest mb-6">Minhas Habilidades</h3>
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
                    <div className="flex animate-infinite-scroll">
                        {extendedSkills.map((skill, index) => (
                            <div key={index} className="flex-shrink-0 w-48 mx-4 flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-lg">
                                <img src={skill.iconSrc} alt={`${skill.name} logo`} className="w-12 h-12" />
                                <span className="mt-2 text-sm font-medium text-gray-400">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO 2: CARD DE RESUMO --- */}
            <section className="py-24 bg-gray-900/50">
                <div ref={summaryRef} className={`container mx-auto max-w-4xl px-4 scroll-fade-in-up ${summaryIsVisible ? 'is-visible' : ''}`}>
                    <div className="bg-gray-900 border border-purple-800/50 rounded-xl p-8 shadow-2xl shadow-purple-900/20">
                        <h2 className="text-3xl font-bold text-center mb-4">
                            Um Desenvolvedor <span className="text-purple-400">Focado em Resultados</span>
                        </h2>
                        <p className="text-center text-gray-400 leading-relaxed">
                            Minha jornada na tecnologia é movida pela curiosidade e pelo desejo de construir. No SENAI, solidifiquei minha paixão em uma carreira, aprendendo não apenas a codificar, mas a pensar como um engenheiro de software: analisando problemas, projetando sistemas e colaborando em equipe para entregar valor real. Estou preparado para aplicar minha energia e minhas habilidades para criar produtos de alta qualidade.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO 3: FILOSOFIA DE DESENVOLVIMENTO --- */}
            <section className="py-24 bg-black">
                <div className="container mx-auto max-w-6xl px-4">
                    <div ref={philosophyRef} className={`text-center mb-16 scroll-fade-in-up ${philosophyIsVisible ? 'is-visible' : ''}`}>
                        <h2 className="text-4xl font-bold">Minha Filosofia de Desenvolvimento</h2>
                        <p className="text-gray-500 mt-2">Os três pilares que guiam meu trabalho.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div ref={card1Ref} className={`bg-gray-900 p-8 rounded-lg text-center scroll-fade-in-up ${card1IsVisible ? 'is-visible' : ''}`} style={{animationDelay: '0.1s'}}>
                            <div className="flex justify-center mb-4">
                                <div className="bg-purple-900/50 p-4 rounded-full">
                                    <icons.code className="w-8 h-8 text-purple-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Código Robusto e Escalável</h3>
                            <p className="text-gray-400">
                                Escrevo código pensando no futuro. Prezo pela clareza, manutenibilidade e por arquiteturas que suportem o crescimento do negócio.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div ref={card2Ref} className={`bg-gray-900 p-8 rounded-lg text-center scroll-fade-in-up ${card2IsVisible ? 'is-visible' : ''}`} style={{animationDelay: '0.3s'}}>
                             <div className="flex justify-center mb-4">
                                <div className="bg-purple-900/50 p-4 rounded-full">
                                    <icons.puzzle className="w-8 h-8 text-purple-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Solução de Problemas</h3>
                            <p className="text-gray-400">
                                Antes de escrever a primeira linha de código, foco em entender profundamente o problema a ser resolvido para entregar a solução mais eficaz.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div ref={card3Ref} className={`bg-gray-900 p-8 rounded-lg text-center scroll-fade-in-up ${card3IsVisible ? 'is-visible' : ''}`} style={{animationDelay: '0.5s'}}>
                             <div className="flex justify-center mb-4">
                                <div className="bg-purple-900/50 p-4 rounded-full">
                                    <icons.brainCircuit className="w-8 h-8 text-purple-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Aprendizado Contínuo</h3>
                            <p className="text-gray-400">
                                A tecnologia evolui constantemente e eu também. Estou sempre estudando novas ferramentas, conceitos e melhores práticas para me aprimorar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;