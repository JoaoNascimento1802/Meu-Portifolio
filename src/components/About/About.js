import React from 'react';
import { motion } from 'framer-motion';

// Importando o PDF do currículo e a imagem de preview
import curriculumPdf from '../../assets/JoaoEmanuel_CV.pdf';
import curriculumPreviewImg from '../../assets/images/curriculum-preview.png';

const About = () => {
    const hardSkills = ['Java & Spring Boot', 'Bancos de Dados SQL', 'C / C++', 'Git & GitHub', 'Linux / Ubuntu', 'Redes de Computadores', 'Arduino', 'Metodologias Ágeis'];
    const softSkills = ['Liderança', 'Comunicação Eficaz', 'Trabalho em Equipe', 'Proatividade', 'Aprendizado Contínuo'];

    return (
        <section id="sobremim" className="min-h-screen bg-black text-white py-28 px-4 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Sobre <span className="text-purple-500">Mim</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Coluna Principal - Texto e Skills */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Bio */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="text-purple-500">#</span> Quem sou eu?
                            </h3>
                            <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-800">
                                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                                    Olá! Sou João Emanuel, desenvolvedor backend apaixonado por tecnologia e programação desde a infância. Concluí o curso de <strong className="text-purple-400">Técnico em Desenvolvimento de Sistemas</strong> pelo SENAI Santo Amaro e, atualmente, estou cursando <strong className="text-purple-400">Cibersegurança</strong> na FIAP. Meu foco é construir soluções robustas e eficientes com Java e o ecossistema Spring.
                                </p>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Busco constantemente novos desafios para expandir meu conhecimento e aplicar minhas habilidades em projetos inovadores. Tenho um forte interesse em arquitetura de software, segurança da informação e boas práticas de desenvolvimento.
                                </p>
                            </div>
                        </motion.div>

                        {/* Skills Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div> Hard Skills
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {hardSkills.map((skill, idx) => (
                                        <motion.span 
                                            key={skill} 
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="bg-gray-800/80 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-700 hover:border-purple-500/50 cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div> Soft Skills
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {softSkills.map((skill, idx) => (
                                        <motion.span 
                                            key={skill} 
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="bg-gray-800/80 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-700 hover:border-purple-500/50 cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        
                        <motion.div 
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.4 }}
                        >
                            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div> Idiomas
                            </h4>
                            <div className="bg-gray-900/70 p-6 rounded-xl border border-gray-800 inline-block">
                                <span className="text-lg font-bold text-white">Inglês</span>
                                <span className="mx-2 text-gray-600">|</span>
                                <span className="text-gray-400">Nível B2 (Avançado) - Rumo ao C1</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Coluna Lateral - Currículo */}
                    <div className="lg:col-span-4 flex flex-col items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gray-900/70 p-6 rounded-2xl border border-gray-800 w-full sticky top-24"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Meu Currículo</h3>
                            <div className="relative group cursor-pointer mb-6">
                                <a href={curriculumPdf} download="JoaoEmanuel_CV.pdf" aria-label="Baixar currículo em PDF" className="block relative overflow-hidden rounded-xl border-2 border-gray-700 group-hover:border-purple-500 transition-colors duration-300">
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors z-10"></div>
                                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="bg-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Baixar PDF</span>
                                    </div>
                                    <img
                                        src={curriculumPreviewImg}
                                        alt="Preview do Currículo de João Emanuel"
                                        className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </a>
                            </div>
                            <p className="text-gray-400 text-center text-sm">
                                Clique na imagem acima para baixar meu currículo atualizado em formato PDF.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
