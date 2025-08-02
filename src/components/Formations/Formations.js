import React from 'react';

const Formations = () => {
    const complementaryCourses = [
        'Fluência e Fundamentos da IA',
        'Desvendando a Indústria 4.0',
        'Web 3.0',
        'Privacidade e Proteção de Dados (LGPD)',
        'Desenvolvimento Web',
        'Desvendando o 5G',
        'Redes',
        'Sistemas Operacionais',
        'Lógica de Programação',
        'Programação para Dispositivos Móveis'
    ];

    return (
        <section id="formacoes" className="min-h-screen bg-black text-white py-24 px-4 flex items-center">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Minhas <span className="text-purple-500">Formações</span>
                </h2>
                <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-purple-500">
                    <h3 className="text-2xl font-bold text-purple-400">Técnico em Desenvolvimento de Sistemas</h3>
                    <p className="text-xl font-semibold text-gray-300 mt-1">SENAI Santo Amaro - Paulo Ernesto Tolle</p>
                    <p className="text-gray-400 mt-4">
                        Curso técnico completo que me proporcionou uma base sólida em desenvolvimento de software, com foco em tecnologias backend, bancos de dados, e metodologias de desenvolvimento. A formação prática e orientada a projetos foi fundamental para desenvolver as competências que possuo hoje.
                    </p>
                </div>
                 <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-purple-500 mt-8">
                    <h3 className="text-2xl font-bold text-purple-400">Inglês - Nível B2</h3>
                    <p className="text-xl font-semibold text-gray-300 mt-1">Cultura Inglesa (Exemplo)</p>
                    <p className="text-gray-400 mt-4">
                        Nível avançado de proficiência em inglês, permitindo comunicação eficaz em ambientes profissionais, leitura de documentação técnica e colaboração em equipes internacionais. Atualmente estudando para alcançar o nível C1 (fluência).
                    </p>
                </div>

                <div className="mt-12">
                    <h3 className="text-3xl font-bold text-center mb-8 text-white">Cursos <span className="text-purple-500">Complementares</span></h3>
                    <p className="text-center text-gray-400 mb-8">Todos os cursos foram realizados no SENAI Santo Amaro.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {complementaryCourses.map(course => (
                            <span key={course} className="bg-gray-800 text-gray-300 px-5 py-3 rounded-lg text-center transition-transform transform hover:scale-105 hover:bg-purple-900/50">
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Formations;