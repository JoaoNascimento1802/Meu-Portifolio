import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Usando Formspree - você precisará criar uma conta e pegar seu endpoint
            const response = await fetch('https://formspree.io/f/xlglanoz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _replyto: formData.email
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contato" className="py-28 bg-black text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none"></div>

            <div className="container mx-auto max-w-6xl px-4 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Entre em <span className="text-purple-500">Contato</span>
                    </h2>
                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Tem um projeto em mente ou quer apenas trocar uma ideia? Preencha o formulário abaixo ou me envie um email direto.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-900/60 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-colors">
                            <h3 className="text-2xl font-bold mb-6 text-white">Vamos conversar!</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Estou sempre aberto a novas oportunidades e projetos desafiadores. Se você busca um desenvolvedor comprometido com qualidade e segurança, vamos conectar.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <a href="mailto:emanuel.sec@proton.me" className="text-white font-medium hover:text-purple-400 transition-colors">emanuel.sec@proton.me</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/joaonascimento1802" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-purple-400 transition-colors">/in/joaonascimento1802</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/40 p-8 rounded-2xl border border-gray-800">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                    placeholder="Seu nome"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                                    placeholder="seu@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                                    placeholder="Sua mensagem..."
                                    required
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-600/20 flex items-center justify-center gap-2"
                            >
                                <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
                                {!isSubmitting && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                )}
                            </button>
                            
                            {submitStatus === 'success' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-900/30 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg text-center"
                                >
                                    ✓ Mensagem enviada com sucesso! Responderei em breve.
                                </motion.div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-900/30 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg text-center"
                                >
                                    ✗ Erro ao enviar mensagem. Tente novamente ou envie um email direto.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
