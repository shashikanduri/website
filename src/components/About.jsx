import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '100px 20px' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: '2rem',
                        marginBottom: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                    }}
                >
                    About Me
                    <span
                        style={{
                            height: '1px',
                            background: 'var(--glass-border)',
                            flex: 1,
                            maxWidth: '300px',
                        }}
                    ></span>
                </motion.h2>

                <div
                    style={{
                        display: 'block',
                        // gridTemplateColumns: '3fr 2fr',
                        // gap: '50px',
                        // alignItems: 'start',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p style={{ marginBottom: '20px', color: '#8892b0' }}>
                            Hello! My name is Sasi and I enjoy creating things that live on the internet. My interest in software development started back in 2013 when I decided to try building custom applications — turns out solving complex problems with code was pretty fun!
                        </p>
                        <p style={{ marginBottom: '20px', color: '#8892b0' }}>
                            Fast-forward to today, and I've had the privilege of working at a{' '}
                            <span style={{ color: 'var(--primary-color)' }}>huge corporation</span>, a{' '}
                            <span style={{ color: 'var(--primary-color)' }}>start-up</span>, and{' '}
                            <span style={{ color: 'var(--primary-color)' }}>state projects</span>. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                        </p>
                    </motion.div>

                    {/* <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        style={{ position: 'relative' }}
                    >
                        <div
                            className="glass-card"
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                textAlign: 'center',
                                padding: '40px 20px',
                            }}
                        >
                            <div
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                                    margin: '0 auto 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                }}
                            >
                                SK
                            </div>
                            <h3 style={{ marginBottom: '10px' }}>Sasi Kanduri</h3>
                            <p style={{ color: '#8892b0', fontSize: '0.9rem' }}>Software Engineer</p>
                            <p style={{ color: '#8892b0', fontSize: '0.9rem' }}>Sacramento, CA</p>
                        </div>
                        <div
                            style={{
                                position: 'absolute',
                                top: '20px',
                                left: '20px',
                                width: '100%',
                                height: '100%',
                                border: '2px solid var(--primary-color)',
                                borderRadius: '16px',
                                zIndex: 0,
                                opacity: 0.5,
                            }}
                        ></div>
                    </motion.div> */}
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
