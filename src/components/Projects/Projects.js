import React from 'react';
import { motion } from 'framer-motion';

// Importando a documentação do TCC
import documentacaoPDF from '../../assets/Documentação.PetVita2(1)-4 (1).pdf';

// Ícone do GitHub para os botões
const GithubIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const ExternalLinkIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const DownloadIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'TCC - Desenvolvimento de Sistemas',
      description: 'Sistema completo para gerenciamento de clínicas veterinárias. Inclui autenticação JWT, controle de acesso (Admin/User), agendamento de consultas e gestão de entidades. Backend em Spring Boot e Frontend moderno.',
      links: [
         { label: 'Back-end', url: 'https://github.com/02-Bits/Back-end' },
         { label: 'Front-end', url: 'https://github.com/02-Bits/Front-end' }
      ],
      tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'Docker'],
      featured: true,
      documentation: documentacaoPDF
    },
    {
      title: 'Level-Up-React',
      description: 'CRUD completo de gerenciamento de videogames, utilizando React no front-end e Spring Boot no back-end. Os dados são persistidos em um banco de dados MySQL e a API REST permite operações de criação, leitura, atualização e remoção de jogos eletrônicos.',
      link: 'https://github.com/JoaoNascimento1802/Level-Up-React',
      tech: ['React', 'Spring Boot', 'MySQL', 'API REST', 'CRUD']
    },
    {
      title: 'VetClinic API',
      description: 'Sistema backend para gerenciamento de clínicas veterinárias com Spring Boot, autenticação JWT, controle de acesso por papéis e uma API RESTful completa.',
      link: 'https://github.com/JoaoNascimento1802/Vet_Clinic_API',
      tech: ['Java', 'Spring Boot', 'JWT', 'SQL']
    },
    {
      title: 'Projeto E-commerce Sesi',
      description: 'Backend para e-commerce com Spring Boot, autenticação segura (JWT e Bcrypt), papéis de usuário, e API para gerenciar produtos, pagamentos e mais.',
      link: 'https://github.com/JoaoNascimento1802/Projeto-Ecomerce-Sesi',
      tech: ['Java', 'Spring Boot', 'JWT', 'Bcrypt']
    },
    {
      title: 'EventManager API',
      description: 'Backend para gerenciamento de eventos, desenvolvido em grupo. Oferece API para gerenciar usuários, eventos, pagamentos e categorias.',
      link: 'https://github.com/JoaoNascimento1802/EventManagerAPI',
      tech: ['Java', 'Spring Boot', 'API REST']
    }
  ];

  return (
    <section id="projetos" className="min-h-screen bg-black text-white py-28 px-4 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Projetos</span>
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Uma seleção dos meus trabalhos mais recentes, focados em resolver problemas reais com código limpo e eficiente.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gray-900/60 rounded-2xl p-8 flex flex-col group hover:border-purple-500/50 border border-gray-800 transition-all duration-300 relative overflow-hidden hover:-translate-y-1 ${project.featured ? 'md:col-span-2 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800/80' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors ${project.featured ? 'text-3xl md:text-4xl' : ''}`}>
                          {project.title}
                      </h3>
                      {project.featured && (
                          <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-purple-500/30">
                              Destaque
                          </span>
                      )}
                  </div>
                  
                  <p className="text-gray-400 flex-grow mb-6 leading-relaxed text-lg">
                      {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => (
                          <span key={t} className="bg-gray-800/80 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-lg border border-gray-700">
                              {t}
                          </span>
                      ))}
                  </div>
                  
                  <div className="mt-auto flex flex-wrap gap-4">
                    {project.links ? (
                        <>
                            {project.links.map((link, idx) => (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${link.label} no GitHub`} className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-purple-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-purple-900/20">
                                    {link.label}
                                    <GithubIcon className="w-5 h-5"/>
                                </a>
                            ))}
                            {project.documentation && (
                                <a 
                                    href={project.documentation} 
                                    download="Documentação_PetVita.pdf"
                                    className="inline-flex items-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-green-900/20"
                                    aria-label="Baixar documentação do projeto"
                                >
                                    Documentação
                                    <DownloadIcon className="w-5 h-5"/>
                                </a>
                            )}
                        </>
                    ) : (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.title} no GitHub`} className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-purple-700 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-purple-900/20">
                            Ver no GitHub
                            <GithubIcon className="w-5 h-5"/>
                        </a>
                    )}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a 
                href="https://github.com/JoaoNascimento1802" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-purple-500 pb-1"
            >
                Ver todos os repositórios no GitHub <ExternalLinkIcon className="w-4 h-4" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
