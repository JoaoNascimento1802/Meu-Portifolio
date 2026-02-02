import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Importando as imagens
import fotoApresentacao from '../../assets/images/fotopetvitaapresentacao.jpg';
import tccSenai from '../../assets/images/tccsenai.png';
import eventoMvp from '../../assets/images/eventomvpconf.jpg';
import palestraMvp from '../../assets/images/palestramvpcarlos.jpg';
import fotoArduino from '../../assets/images/fotoarduinotcc.jpg';

const ChevronLeftIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="15 18 9 12 15 6"></polyline></svg>
);

const ChevronRightIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="9 18 15 12 9 6"></polyline></svg>
);

const XIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { src: fotoApresentacao, title: 'Apresentação PetVita', description: 'Apresentação do projeto Pet Vita no SENAI Suíço Brasileiro Paulo Ernesto Tolle', type: 'image' },
        { src: tccSenai, title: 'TCC SENAI', description: 'Projeto de conclusão de curso SENAI', type: 'image' },
        { src: eventoMvp, title: 'MVP Conference', description: 'Participação em evento de tecnologia', type: 'image' },
        { src: palestraMvp, title: 'Palestra Segurança Cibernética', description: 'Palestra sobre desafios da segurança cibernética a partir da computação quântica com Carlos Rischioto', type: 'image' },
        { src: fotoArduino, title: 'Protótipo Arduino Final', description: 'Protótipo final - Projeto TCC do 9º ano do SESI Vila Cisper', type: 'image' }
    ];

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(images[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    return (
        <section id="galeria" className="min-h-screen bg-black text-white py-28 px-4 relative">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Galeria</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Momentos da minha jornada na área de tecnologia: eventos, apresentações e estudos que marcaram meu desenvolvimento profissional.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                            onClick={() => openLightbox(index)}
                        >
                            <div className="aspect-video overflow-hidden bg-gray-900 relative">
                                {item.type === 'video' ? (
                                    <>
                                        <video 
                                            src={item.src}
                                            className="w-full h-full object-cover"
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                            onMouseEnter={(e) => {
                                                e.target.play().catch(err => console.log('Erro ao reproduzir:', err));
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.pause();
                                                e.target.currentTime = 0;
                                            }}
                                        >
                                            Seu navegador não suporta vídeos.
                                        </video>
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="bg-purple-600/80 rounded-full p-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <img 
                                        src={item.src} 
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                )}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-300 text-sm">{item.description}</p>
                            </div>
                            {item.type === 'video' && (
                                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                    VÍDEO
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button 
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors p-2 bg-gray-900/50 rounded-full"
                        aria-label="Fechar"
                    >
                        <XIcon className="w-8 h-8" />
                    </button>

                    <button 
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition-colors p-3 bg-gray-900/50 rounded-full"
                        aria-label="Imagem anterior"
                    >
                        <ChevronLeftIcon className="w-8 h-8" />
                    </button>

                    <button 
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-400 transition-colors p-3 bg-gray-900/50 rounded-full"
                        aria-label="Próxima imagem"
                    >
                        <ChevronRightIcon className="w-8 h-8" />
                    </button>

                    <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                        {selectedImage.type === 'video' ? (
                            <video 
                                src={selectedImage.src} 
                                controls
                                autoPlay
                                loop
                                className="w-full h-auto max-h-[80vh] object-contain rounded-lg bg-black"
                            >
                                Seu navegador não suporta vídeos.
                            </video>
                        ) : (
                            <img 
                                src={selectedImage.src} 
                                alt={selectedImage.title}
                                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                            />
                        )}
                        <div className="text-center mt-6">
                            <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                            <p className="text-gray-400">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
