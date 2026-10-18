import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const importAll = (r) => {
            return r.keys().map(r);
        };
        const imagesContext = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);
        const imageFiles = importAll(imagesContext);
        
        const galleryImages = imageFiles.filter(img => 
            !img.includes('profile-photo') && 
            !img.includes('curriculum-preview')
        );
        
        setImages(galleryImages);
    }, []);

    const openLightbox = (img) => setSelectedImage(img);
    const closeLightbox = () => setSelectedImage(null);

    return (
        <section id="galeria" className="py-24 bg-cyber-surface border-t border-cyber-border text-cyber-text font-sans">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Galeria de <span className="text-cyber-red">Registros</span></h2>
                    <div className="h-1 w-24 bg-cyber-red mb-6"></div>
                    <p className="text-cyber-muted leading-relaxed max-w-2xl">
                        Registros visuais de laboratórios, eventos, participações e montagem de ambientes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`relative cursor-pointer overflow-hidden border border-cyber-border hover:border-cyber-red/50 transition-colors group ${index % 5 === 0 ? 'col-span-2 row-span-2' : ''}`}
                            onClick={() => openLightbox(img)}
                        >
                            <img 
                                src={img} 
                                alt={`Registro ${index + 1}`} 
                                className="w-full h-full object-cover aspect-square saturate-100 group-hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute inset-0 bg-cyber-base/10 group-hover:bg-transparent transition-colors"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        <motion.button 
                            className="absolute top-6 right-6 text-white hover:text-cyber-red transition-colors"
                            onClick={closeLightbox}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </motion.button>
                        <motion.img 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            src={selectedImage} 
                            alt="Visualização ampliada" 
                            className="max-w-full max-h-[90vh] object-contain border border-cyber-border shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
