import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contato" className="py-24 bg-cyber-base border-t border-cyber-border text-cyber-text font-sans">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
        >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Iniciar <span className="text-cyber-red">Comunicação</span></h2>
            <div className="h-1 w-24 bg-cyber-red mx-auto mb-6"></div>
            <p className="text-cyber-muted leading-relaxed">
                Interessado em discutir segurança ofensiva, consultoria ou oportunidades?
            </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cyber-surface border border-cyber-border p-8 md:p-12"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-mono text-cyber-muted tracking-widest uppercase">Identificação</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                            className="w-full bg-cyber-base border border-cyber-border p-4 text-white focus:outline-none focus:border-cyber-red transition-colors"
                            placeholder="Seu nome"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-mono text-cyber-muted tracking-widest uppercase">Endereço de Retorno</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            className="w-full bg-cyber-base border border-cyber-border p-4 text-white focus:outline-none focus:border-cyber-red transition-colors"
                            placeholder="seu@email.com"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-cyber-muted tracking-widest uppercase">Carga útil (Mensagem)</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        rows="5"
                        className="w-full bg-cyber-base border border-cyber-border p-4 text-white focus:outline-none focus:border-cyber-red transition-colors resize-none"
                        placeholder="Descreva o motivo do contato..."
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-cyber-red hover:bg-red-700 text-white font-bold py-4 transition-colors uppercase tracking-widest text-sm"
                >
                    Transmitir Dados
                </button>
                {status && <p className="text-cyber-cyan text-sm font-mono text-center mt-4">{status}</p>}
            </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
