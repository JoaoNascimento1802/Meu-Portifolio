import React from 'react';

// Importando o PDF do currículo e a imagem de preview
import curriculumPdf from '../../assets/JoaoEmanuel-CV.pdf';
import curriculumPreviewImg from '../../assets/images/curriculum-preview.png';


const About = () => {
    const hardSkills = ['Java & Spring Boot', 'Bancos de Dados SQL', 'C / C++', 'Git & GitHub', 'Linux / Ubuntu', 'Redes de Computadores', 'Arduino', 'Metodologias Ágeis'];
    const softSkills = ['Liderança', 'Comunicação Eficaz', 'Trabalho em Equipe', 'Proatividade', 'Aprendizado Contínuo'];

    return (
        <section id="sobremim" className="min-h-screen bg-black text-white py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Sobre <span className="text-purple-500">Mim</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-semibold text-purple-400 mb-4">Quem sou eu?</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Olá! Sou João Emanuel, um desenvolvedor backend de 17 anos apaixonado por tecnologia e programação desde a infância. Recentemente formado pelo SENAI Santo Amaro, meu foco é construir soluções robustas e eficientes com Java e o ecossistema Spring.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Busco constantemente novos desafios para expandir meu conhecimento e aplicar minhas habilidades em projetos inovadores. Tenho um forte interesse em arquitetura de software e boas práticas de desenvolvimento.
                        </p>

                        <div className="mt-8">
                            <h4 className="text-xl font-semibold text-purple-400 mb-4">Hard Skills</h4>
                            <div className="flex flex-wrap gap-3">
                                {hardSkills.map(skill => <span key={skill} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md">{skill}</span>)}
                            </div>
                        </div>
                        <div className="mt-8">
                            <h4 className="text-xl font-semibold text-purple-400 mb-4">Soft Skills</h4>
                             <div className="flex flex-wrap gap-3">
                                {softSkills.map(skill => <span key={skill} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md">{skill}</span>)}
                            </div>
                        </div>
                         <div className="mt-8">
                            <h4 className="text-xl font-semibold text-purple-400 mb-4">Idiomas</h4>
                            <p className="text-gray-300">Inglês - Nível B2 (Avançado), buscando a fluência (C1).</p>
                        </div>
                    </div>
                    <div className="md:col-span-1 flex flex-col items-center">
                        <h3 className="text-2xl font-semibold text-purple-400 mb-4 text-center">Meu Currículo</h3>
                        <p className="text-gray-400 text-center mb-4">Clique na imagem para baixar meu CV em formato PDF.</p>
                        {/* O link agora usa a variável importada do PDF */}
                        <a href={curriculumPdf} download="JoaoEmanuel_CV.pdf" className="block border-2 border-purple-500/50 rounded-lg overflow-hidden hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                           {/* A imagem agora usa a variável importada da imagem de preview */}
                           <img
                            src={curriculumPreviewImg}
                            alt="Preview do Currículo de João Emanuel"
                            className="w-full h-auto"
                           />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;