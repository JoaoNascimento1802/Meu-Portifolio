import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// Importando a foto de perfil
import profilePhoto from '../../assets/images/profile-photo.jpg';

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

// Ícones SVG inline para botões
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
  shield: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  ),
  server: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
  ),
  cpu: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
  )
};

const SpotlightCard = ({ title, description, icon: Icon, delay }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
  
    const handleMouseMove = (e) => {
      if (!divRef.current || isFocused) return;
  
      const div = divRef.current;
      const rect = div.getBoundingClientRect();
  
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(1);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };
  
    const handleMouseEnter = () => {
      setOpacity(1);
    };
  
    const handleMouseLeave = () => {
      setOpacity(0);
    };
  
    return (
      <motion.div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 px-8 py-16 shadow-2xl"
      >
        <div
          className="pointer-events-none absolute -inset-px transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-gray-800/50 rounded-2xl border border-gray-700/50 shadow-inner">
                <Icon className="h-10 w-10 text-purple-500" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-100">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    );
};

const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

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

    return (
        <div className="overflow-hidden relative bg-black">
            <div 
                className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(700px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.08), transparent 70%)`
                }}
            ></div>

            <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 relative z-10">
                <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-purple-900/20 rounded-full blur-[120px] animate-blob mix-blend-screen -z-10"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-900/20 rounded-full blur-[120px] animate-blob [animation-delay:2000ms] mix-blend-screen -z-10"></div>

                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Conteúdo à esquerda */}
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider text-purple-300 mb-6">
                                    Disponível para oportunidades
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
                                    João Emanuel
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                        Nascimento
                                    </span>
                                </h1>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-12"
                            >
                                <TypeAnimation
                                    sequence={[
                                        'Desenvolvedor Backend',
                                        2000,
                                        'Especialista em Java & Spring Boot',
                                        2000,
                                        'Segurança da Informação',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </motion.div>

                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="text-gray-400 mb-10 leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0"
                            >
                                Olá! Sou um desenvolvedor backend recém-formado pelo SENAI e estudante de Cibersegurança na FIAP, apaixonado por transformar desafios complexos em software funcional e eficiente. Meu foco é construir soluções robustas e escaláveis com Java e o ecossistema Spring.
                            </motion.p>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                                className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6"
                            >
                                <a 
                                    href="#projetos"
                                    className="bg-purple-600 text-white font-bold py-3.5 px-8 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 flex items-center gap-2"
                                >
                                    Ver Projetos
                                    <icons.arrowRight className="w-5 h-5" />
                                </a>
                                <a 
                                    href="#contato"
                                    className="bg-white/5 text-white font-semibold py-3.5 px-8 rounded-full border border-white/10 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300"
                                >
                                    Falar comigo
                                </a>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/joaonascimento1802" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white hover:bg-purple-900/50 p-3 rounded-full transition-all duration-300">
                                        <icons.linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="https://github.com/JoaoNascimento1802" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white hover:bg-purple-900/50 p-3 rounded-full transition-all duration-300">
                                        <icons.githubLink className="w-6 h-6" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Foto à direita */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex-shrink-0"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
                                <div className="relative p-2 bg-purple-900/80 rounded-full">
                                    <div className="p-1 bg-purple-400/60 rounded-full">
                                        <img 
                                            src={profilePhoto} 
                                            alt="João Emanuel Nascimento" 
                                            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl shadow-purple-900/50"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="w-full max-w-7xl mx-auto mt-20 overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
                    <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
                        {extendedSkills.map((skill, index) => (
                            <div key={index} className="flex-shrink-0 w-40 mx-6 flex flex-col items-center justify-center group cursor-pointer">
                                <div className="p-4 bg-gray-900/60 rounded-2xl border border-gray-800 group-hover:border-purple-500/50 transition-colors duration-300">
                                    <img src={skill.iconSrc} alt={`${skill.name} logo`} className="w-12 h-12 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300" />
                                </div>
                                <span className="mt-3 text-sm font-medium text-gray-500 group-hover:text-purple-400 transition-colors">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO 2: FOCO E DIFERENCIAIS (Substituindo Filosofia/Resumo) --- */}
            <section className="py-24 relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-white">O que eu <span className="text-purple-500">Entrego</span></h2>
                        <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Combinando desenvolvimento de software robusto com práticas modernas de segurança e performance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <SpotlightCard 
                            title="Segurança by Design"
                            description="Integração de práticas de segurança desde a concepção do código, utilizando conhecimentos acadêmicos em Cibersegurança da FIAP."
                            icon={icons.shield}
                            delay={0}
                        />
                        <SpotlightCard 
                            title="Backend Robusto"
                            description="Desenvolvimento de APIs RESTful escaláveis e de alta disponibilidade com Java e Spring Boot, focadas em manutenibilidade."
                            icon={icons.server}
                            delay={0.2}
                        />
                        <SpotlightCard 
                            title="Arquitetura Limpa"
                            description="Aplicação de Design Patterns e princípios SOLID para criar sistemas que crescem sem acumular dívida técnica."
                            icon={icons.cpu}
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
