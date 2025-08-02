import React from 'react';

// Ícone do GitHub para os botões
const GithubIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const Projects = () => {
  const projects = [
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
    },
    {
      title: 'Back-end VetClinic (TCC)',
      description: 'Versão avançada da VetClinic API para o TCC. Inclui sistema de e-mails automáticos, agendamento e funcionalidades mais sofisticadas. Em desenvolvimento.',
      link: 'https://github.com/02-Bits/Back-endVetClinic',
      tech: ['Java', 'Spring Boot', 'JWT', 'Email', 'TCC']
    }
  ];

  return (
    <section id="projetos" className="min-h-screen bg-black text-white py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meus <span className="text-purple-500">Projetos</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 flex flex-col group hover:border-purple-500 border-2 border-transparent transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-3 text-purple-400">{project.title}</h3>
              <p className="text-gray-400 flex-grow mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => <span key={t} className="bg-purple-900/50 text-purple-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">{t}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-white font-bold py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors duration-300 self-start inline-flex items-center">
                Ver no GitHub
                <GithubIcon className="w-5 h-5 ml-2"/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;