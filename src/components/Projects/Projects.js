import React from 'react';
import { motion } from 'framer-motion';
import documentacaoPDF from '../../assets/PetVita_Docs.pdf';
import pridePresentationPDF from '../../assets/PRIDE_Vision_AI_Presentation.pdf';

const GithubIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);


const DownloadIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'PRIDE Vision AI - Code to Cloud ASPM Platform',
      description: 'Plataforma corporativa de cibersegurança que atua da ingestão de código (SAST/SCA/DAST) à telemetria de Runtime (eBPF). Desenvolvida com arquitetura Multi-Tenant e isolamento via Row-Level Security (RLS) para prevenção de vazamento B2B. O sistema cruza dados para identificar "Combinações Tóxicas" e possui um Risk Engine determinístico (sem IA) para calcular o risco real com compliance. Integrado ao CI/CD para bloqueio de builds falhos, possui automação de ticketing com Jira (OAuth 3LO) e remediação guiada por GenAI com Data Masking para mascaramento de IPs, senhas e tokens.',
      links: [
         { label: 'Repositório GitHub', url: 'https://github.com/JoaoNascimento1802/Pride_Vision_AI.git' },
         { label: 'Acessar Plataforma', url: 'https://pridevisionai.vercel.app/entrar' }
      ],
      tags: ['FastAPI', 'React', 'ASPM', 'DevSecOps', 'eBPF', 'RLS', 'SSO'],
      docPdf: pridePresentationPDF,
      docLabel: 'Baixar Apresentação'
    },
    {
      title: 'PetVita - TCC (Desenvolvimento de Sistemas)',
      description: 'Sistema de gerenciamento para clínicas veterinárias projetado sob os pilares do Secure by Design. O backend foca na integridade dos dados, com implementação rígida de autenticação JWT e RBAC (Role-Based Access Control) para separar painéis administrativos de usuários comuns, minimizando superfícies de ataque.',
      links: [
         { label: 'Repositório Back-end', url: 'https://github.com/02-Bits/Back-end' },
         { label: 'Repositório Front-end', url: 'https://github.com/02-Bits/Front-end' }
      ],
      tags: ['Java', 'Spring Boot', 'JWT', 'Security', 'MySQL'],
      docPdf: documentacaoPDF,
      docLabel: 'Documentação Técnica'
    },
    {
      title: 'Health Monitor & Security Automation',
      description: 'Scripts em Python focados em monitoramento de endpoints, verificação de disponibilidade via heartbeats e disparo automático de alertas/relatórios (SMTP) para detecção rápida de indisponibilidades.',
      links: [
         { label: 'Código Fonte', url: 'https://github.com/JoaoNascimento1802' }
      ],
      tags: ['Python', 'Automation', 'SMTP', 'Monitoring'],
      docPdf: null
    },
    {
      title: 'Lab & Ofensiva (Red Team)',
      description: 'Estruturação de laboratórios virtuais em ambientes Linux/Windows para execução controlada de varreduras, pentests e análise de pacotes utilizando metodologias abertas e ferramentas como Wireshark.',
      links: [],
      tags: ['Linux', 'Windows Server', 'Wireshark', 'OffSec'],
      docPdf: null
    }
  ];

  return (
    <section id="projetos" className="py-24 bg-cyber-base border-t border-cyber-border text-cyber-text font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:flex justify-between items-end"
        >
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Projetos & <span className="text-cyber-red">Pesquisa</span></h2>
                <div className="h-1 w-24 bg-cyber-red mb-6"></div>
                <p className="text-gray-300 leading-relaxed">
                    Aplicações e laboratórios focados na estruturação e quebra de perímetros, testes de viabilidade e desenvolvimento seguro.
                </p>
            </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-cyber-surface border border-cyber-border hover:border-cyber-red/30 flex flex-col justify-between transition-colors p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-red/5 rounded-full blur-3xl group-hover:bg-cyber-red/10 transition-colors"></div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono text-cyber-text bg-cyber-base border border-cyber-border px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-auto border-t border-cyber-border pt-6">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-cyber-muted hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 flex-shrink-0" />
                    <span>{link.label}</span>
                  </a>
                ))}
                {project.docPdf && (
                   <a 
                    href={project.docPdf} 
                    download 
                    className="flex items-center gap-2 text-sm font-mono text-cyber-red hover:text-white transition-colors"
                   >
                    <DownloadIcon className="w-4 h-4 flex-shrink-0" />
                    <span>{project.docLabel || 'Documentação Técnica'}</span>
                   </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
