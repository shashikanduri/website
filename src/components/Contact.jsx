import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = 'Hello';
        const body = `Name: ${formData.name}\n\nMessage: ${formData.message}`;
        window.location.href = `mailto:sasik.kanduri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setIsModalOpen(false);
        setFormData({ name: '', message: '' });
    };

    return (
        <section
            id="contact"
            style={{
                padding: '100px 20px',
                textAlign: 'center',
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        color: 'var(--primary-color)',
                        fontSize: '1.1rem',
                        marginBottom: '20px',
                    }}
                >
                    What's Next?
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: '700',
                        marginBottom: '20px',
                    }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        color: '#8892b0',
                        fontSize: '1.1rem',
                        marginBottom: '50px',
                    }}
                >
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <button
                        className="btn"
                        style={{ fontSize: '1.1rem', padding: '15px 30px' }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Say Hello
                    </button>
                </motion.div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            backdropFilter: 'blur(5px)',
                        }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-card"
                            style={{
                                width: '90%',
                                maxWidth: '500px',
                                padding: '40px',
                                textAlign: 'left',
                            }}
                        >
                            <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: '#e0e0e0' }}>Say Hello</h3>
                            <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '10px', color: '#8892b0' }}>Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '8px',
                                            color: '#e0e0e0',
                                            fontSize: '1rem',
                                            outline: 'none',
                                        }}
                                    />
                                </div>
                                <div style={{ marginBottom: '30px' }}>
                                    <label style={{ display: 'block', marginBottom: '10px', color: '#8892b0' }}>Message</label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        style={{
                                            width: '100%',
                                            padding: '12px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '8px',
                                            color: '#e0e0e0',
                                            fontSize: '1rem',
                                            outline: 'none',
                                            resize: 'vertical',
                                        }}
                                    />
                                </div>
                                <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        style={{
                                            padding: '12px 24px',
                                            background: 'transparent',
                                            border: '1px solid var(--glass-border)',
                                            borderRadius: '30px',
                                            color: '#8892b0',
                                            cursor: 'pointer',
                                            fontWeight: '600',
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <footer
                style={{
                    marginTop: 'auto',
                    paddingTop: '100px',
                    color: '#8892b0',
                    fontSize: '0.9rem',
                    fontFamily: 'monospace',
                }}
            >
                <p>Designed & Built by Sasi Kanduri</p>
            </footer>
        </section>
    );
};

export default Contact;
