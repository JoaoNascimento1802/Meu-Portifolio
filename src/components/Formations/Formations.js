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
        <section id="formacoes" className="min-h-screen bg-black text-white py-28 px-4 flex items-center">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Minhas <span className="text-purple-500">Formações</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Base acadêmica sólida e estudos contínuos focados em backend, segurança e boas práticas.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white">Cibersegurança</h3>
                                <p className="text-purple-400 font-semibold mt-1">FIAP</p>
                            </div>
                            <span className="text-sm text-gray-400 bg-black/40 border border-gray-800 px-4 py-2 rounded-full">
                                Cursando
                            </span>
                        </div>
                        <p className="text-gray-400 mt-4 leading-relaxed">
                            Formação voltada à segurança da informação, análise de riscos, práticas defensivas e arquitetura segura de sistemas.
                        </p>
                    </div>

                    <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white">Técnico em Desenvolvimento de Sistemas</h3>
                                <p className="text-purple-400 font-semibold mt-1">SENAI Santo Amaro - Paulo Ernesto Tolle</p>
                            </div>
                            <span className="text-sm text-gray-400 bg-black/40 border border-gray-800 px-4 py-2 rounded-full">
                                Concluído
                            </span>
                        </div>
                        <p className="text-gray-400 mt-4 leading-relaxed">
                            Formação completa com foco em backend, bancos de dados e metodologias de desenvolvimento, consolidando uma base prática voltada a projetos reais.
                        </p>
                    </div>

                    <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white">Inglês - Nível B2</h3>
                                <p className="text-purple-400 font-semibold mt-1">Cultura Inglesa</p>
                            </div>
                            <span className="text-sm text-gray-400 bg-black/40 border border-gray-800 px-4 py-2 rounded-full">
                                Em evolução para C1
                            </span>
                        </div>
                        <p className="text-gray-400 mt-4 leading-relaxed">
                            Proficiência avançada para comunicação profissional, leitura de documentação técnica e colaboração com equipes internacionais.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-center mb-6 text-white">Cursos <span className="text-purple-500">Complementares</span></h3>
                    <p className="text-center text-gray-400 mb-8">Todos os cursos foram realizados no SENAI Santo Amaro.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {complementaryCourses.map(course => (
                            <span key={course} className="bg-gray-800/80 text-gray-300 px-5 py-3 rounded-xl text-center transition-transform transform hover:scale-105 hover:bg-purple-900/40 border border-gray-700">
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
