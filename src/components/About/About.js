import React from 'react';
import { motion } from 'framer-motion';

import curriculumPdf from '../../assets/JoaoEmanuel_CV.pdf';
import curriculumPreviewImg from '../../assets/images/curriculum-preview.png';

const About = () => {
    const hardSkills = [
        'Cibersegurança Ofensiva', 'DevSecOps & ASPM', 'Análise de Vulnerabilidades (SAST/DAST)',
        'Integração de IA (LLMs)', 'Redes TCP/IP & Wireshark', 
        'Python & FastAPI', 'Java & Spring Boot', 'React & Tailwind CSS', 
        'CI/CD Security Gates', 'Linux (Debian/Ubuntu)'
    ];
    const softSkills = ['Proatividade', 'Autodidatismo', 'Trabalho em Equipe', 'Resolução de Problemas', 'Arquitetura de Sistemas'];

    return (
        <section id="sobremim" className="min-h-screen bg-cyber-base text-cyber-text py-24 px-6 overflow-hidden relative font-sans border-t border-cyber-border">
            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left Column: Text & Skills */}
                    <div className="lg:col-span-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                                Perfil <span className="text-cyber-red">Técnico</span>
                            </h2>
                            <div className="h-1 w-24 bg-cyber-red mb-8"></div>
                            
                            <div className="space-y-6 text-cyber-muted leading-relaxed text-lg">
                                <p>
                                    Atuo na área de Segurança da Informação com foco em <strong className="text-white font-normal">Segurança Ofensiva</strong> e <strong className="text-white font-normal">DevSecOps</strong>. Possuo formação técnica em Desenvolvimento de Sistemas (SENAI) e atualmente curso Segurança Cibernética na FIAP, construindo uma base sólida tanto em infraestrutura quanto em código seguro.
                                </p>
                                <p>
                                    Meu diferencial é aliar o desenvolvimento Full Stack (Python, FastAPI, React, Java) à análise de risco sob a ótica de um atacante. Isso permite identificar, correlacionar e remediar falhas de segurança diretamente na esteira de desenvolvimento (CI/CD) utilizando ferramentas de SAST, DAST e ASPM.
                                </p>
                                <p>
                                    Construí projetos que envolvem desde plataformas de gestão de postura de segurança (com Risk Engines e IA Generativa) até o desenvolvimento de APIs seguras e scripts autônomos para monitoramento de infraestrutura.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-xl font-bold text-white mb-6 tracking-wide">COMPETÊNCIAS (HARD)</h3>
                                <div className="flex flex-wrap gap-3">
                                    {hardSkills.map((skill, index) => (
                                        <span key={index} className="bg-cyber-surface border border-cyber-border text-cyber-text px-4 py-2 text-sm font-mono hover:border-cyber-red transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="text-xl font-bold text-white mb-6 tracking-wide">COMPETÊNCIAS (SOFT)</h3>
                                <div className="flex flex-wrap gap-3">
                                    {softSkills.map((skill, index) => (
                                        <span key={index} className="bg-cyber-surface border border-cyber-border text-cyber-text px-4 py-2 text-sm font-mono hover:border-cyber-blue transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Resume Download */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-4"
                    >
                        <div className="bg-cyber-surface border border-cyber-border p-8 sticky top-32">
                            <h3 className="text-lg font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-red"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                Documentação Oficial
                            </h3>
                            
                            <a href={curriculumPdf} download="JoaoEmanuel_CV.pdf" aria-label="Baixar currículo" className="block relative group overflow-hidden border border-cyber-border mb-6">
                                <img 
                                    src={curriculumPreviewImg} 
                                    alt="Preview do Currículo" 
                                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ filter: 'brightness(0.8)' }}
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <span className="bg-cyber-red text-white font-bold py-2 px-6 text-sm tracking-wider shadow-lg transform group-hover:scale-105 transition-transform">
                                        DOWNLOAD PDF
                                    </span>
                                </div>
                            </a>
                            
                            <div className="text-cyber-muted text-sm font-mono space-y-2">
                                <p className="flex justify-between"><span>Tamanho:</span> <span className="text-white">112 KB</span></p>
                                <p className="flex justify-between"><span>Formato:</span> <span className="text-white">PDF</span></p>
                                <p className="flex justify-between"><span>Última Atualização:</span> <span className="text-white">Recente</span></p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
