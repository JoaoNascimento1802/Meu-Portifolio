import React from 'react';
import { motion } from 'framer-motion';

const Formations = () => {
    const formations = [
        {
            title: "Segurança Cibernética",
            institution: "FIAP",
            period: "2024 - Cursando",
            description: "Foco em proteção de infraestruturas, análise de vulnerabilidades, resposta a incidentes, ethical hacking e compliance em segurança da informação."
        },
        {
            title: "Técnico em Desenvolvimento de Sistemas",
            institution: "SENAI",
            period: "Concluído em 2023",
            description: "Projeto de Conclusão de Curso (TCC): PetVita. Desenvolvimento de sistemas escaláveis e seguros, programação orientada a objetos (Java), banco de dados (MySQL) e modelagem de software."
        }
    ];

    return (
        <section id="formacoes" className="py-24 bg-cyber-surface border-t border-cyber-border text-cyber-text">
            <div className="container mx-auto max-w-5xl px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Histórico <span className="text-cyber-red">Acadêmico</span></h2>
                    <div className="h-1 w-24 bg-cyber-red"></div>
                </motion.div>

                <div className="relative border-l-2 border-cyber-border pl-8 ml-4 md:ml-0 space-y-12">
                    {formations.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            <span className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-cyber-red ring-4 ring-cyber-base"></span>
                            <div className="bg-cyber-base border border-cyber-border p-8 hover:border-cyber-red/50 transition-colors">
                                <span className="inline-block bg-cyber-surface text-cyber-muted font-mono text-xs px-3 py-1 mb-4 border border-cyber-border">
                                    {item.period}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                <h4 className="text-lg text-cyber-red font-medium mb-4">{item.institution}</h4>
                                <p className="text-cyber-muted leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Formations;
