import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import profilePhoto from '../../assets/images/profile-photo.png';
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

const skills = [
  { name: 'Java', iconSrc: javaUrl },
  { name: 'Spring Boot', iconSrc: springbootUrl },
  { name: 'Python', iconSrc: null },
  { name: 'FastAPI', iconSrc: null },
  { name: 'React', iconSrc: null },
  { name: 'C++', iconSrc: cplusplusUrl },
  { name: 'MySQL', iconSrc: mysqlUrl },
  { name: 'Git', iconSrc: gitUrl },
  { name: 'GitHub', iconSrc: githubUrl },
  { name: 'DevSecOps', iconSrc: null },
  { name: 'SAST/DAST', iconSrc: null },
  { name: 'Arduino', iconSrc: arduinoUrl },
  { name: 'C', iconSrc: cUrl },
  { name: 'Azure', iconSrc: azureUrl },
  { name: 'Linux', iconSrc: linuxUrl },
  { name: 'Ubuntu', iconSrc: ubuntuUrl },
  { name: 'Windows', iconSrc: windowsUrl },
  { name: 'Eclipse', iconSrc: eclipseUrl }
];

const icons = {
  githubLink: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  ),
  linkedin: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  ),
  shield: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  target: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  )
};

const SpotlightCard = ({ title, description, icon: Icon, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="bg-cyber-surface border border-cyber-border p-8 hover:border-cyber-red/50 transition-colors group relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon className="w-24 h-24 text-cyber-red" />
        </div>
        <Icon className="w-10 h-10 text-cyber-red mb-6" />
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-cyber-muted leading-relaxed text-sm">{description}</p>
    </motion.div>
);

const Home = () => {
    const extendedSkills = [...skills, ...skills, ...skills];

    return (
        <div id="home" className="bg-cyber-base w-full min-h-screen pt-24">
            <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-24 flex flex-col">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    <div className="col-span-1 lg:col-span-7 z-10 flex flex-col justify-center order-2 lg:order-1">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="w-8 h-px bg-cyber-red"></div>
                            <span className="text-cyber-red font-mono text-xs font-bold tracking-widest uppercase">Segurança Cibernética</span>
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-4"
                        >
                            João <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyber-muted">Emanuel.</span>
                        </motion.h1>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-xl lg:text-2xl text-cyber-muted font-light mb-8 h-16 lg:h-auto"
                        >
                            <TypeAnimation
                                sequence={[
                                    'Ethical Hacker.', 2000,
                                    'Especialista em Red Team.', 2000,
                                    'Analista de Vulnerabilidades.', 2000,
                                    'Desenvolvedor Seguro.', 2000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </motion.div>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-cyber-muted text-base leading-relaxed max-w-2xl mb-10"
                        >
                            Profissional focado em segurança ofensiva e infraestrutura, estudante de Segurança Cibernética na FIAP.
                            Identifico falhas, testo perímetros e protejo sistemas antes que sejam explorados.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <a 
                                href="#projetos"
                                className="bg-white text-black font-bold py-4 px-8 text-sm tracking-wider uppercase hover:bg-gray-200 transition-colors"
                            >
                                Acessar Projetos
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/joaonascimento1802"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border border-cyber-border hover:border-cyber-red text-white font-bold py-4 px-8 text-sm tracking-wider uppercase hover:bg-cyber-red/10 transition-colors"
                            >
                                Entrar em Contato
                            </a>
                            <div className="flex gap-4 ml-2">
                                <a href="https://www.linkedin.com/in/joaonascimento1802" target="_blank" rel="noopener noreferrer" className="text-cyber-muted hover:text-white transition-colors p-2">
                                    <icons.linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://github.com/JoaoNascimento1802" target="_blank" rel="noopener noreferrer" className="text-cyber-muted hover:text-white transition-colors p-2">
                                    <icons.githubLink className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-span-1 lg:col-span-5 relative order-1 lg:order-2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative w-72 h-72 lg:w-96 lg:h-96"
                        >
                            <div className="absolute -inset-4 border border-cyber-border z-0 hidden lg:block"></div>
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyber-red z-20"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyber-red z-20"></div>
                            
                            <div className="absolute bottom-6 -left-12 bg-cyber-surface border border-cyber-border px-4 py-2 z-30 shadow-xl hidden md:block">
                                <p className="font-mono text-xs text-cyber-muted">STATUS: <span className="text-cyber-red">ACTIVE_</span></p>
                            </div>

                            <img 
                                src={profilePhoto} 
                                alt="João Emanuel" 
                                className="w-full h-full object-cover z-10 relative saturate-100"
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="w-full mx-auto mt-32 overflow-hidden relative border-y border-cyber-border py-8 bg-cyber-surface/30">
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cyber-base to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cyber-base to-transparent z-10"></div>
                    <div className="flex animate-infinite-scroll">
                        {extendedSkills.map((skill, index) => (
                            <div key={index} className="flex-shrink-0 w-32 mx-4 flex flex-col items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300">
                                {skill.iconSrc ? (
                                    <img src={skill.iconSrc} alt={`${skill.name} logo`} className="w-8 h-8 mb-3" />
                                ) : (
                                    <div className="w-8 h-8 mb-3 flex items-center justify-center text-cyber-red">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="16 18 22 12 16 6"></polyline>
                                            <polyline points="8 6 2 12 8 18"></polyline>
                                        </svg>
                                    </div>
                                )}
                                <span className="text-xs font-mono text-cyber-muted uppercase tracking-widest text-center">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10 bg-cyber-surface border-t border-cyber-border">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 md:flex justify-between items-end"
                    >
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tighter">
                                Áreas de <span className="text-cyber-red">Atuação</span>
                            </h2>
                            <p className="text-cyber-muted text-base leading-relaxed">
                                Abordagem ofensiva para identificar vulnerabilidades e proteger infraestruturas.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <SpotlightCard 
                            title="Segurança Ofensiva"
                            description="Análise de vulnerabilidades, testes de penetração e exploração de sistemas com base nas metodologias do Ethical Hacking para identificar falhas antes que sejam exploradas."
                            icon={icons.target}
                            delay={0}
                        />
                        <SpotlightCard 
                            title="Desenvolvimento Seguro"
                            description="Construção de backends robustos em Java e Spring Boot com implementação de autenticação JWT, controle de acesso e práticas DevSecOps."
                            icon={icons.shield}
                            delay={0.1}
                        />
                        <SpotlightCard 
                            title="Monitoramento"
                            description="Estruturação de automações em Python para monitoramento de eventos, análise de tráfego com Wireshark e gerenciamento de ambientes corporativos."
                            icon={icons.shield} 
                            delay={0.2}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
