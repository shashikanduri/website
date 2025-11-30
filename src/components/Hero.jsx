import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section
            id="hero"
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >


            <div style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--primary-color)',
                        marginBottom: '10px',
                        fontWeight: '500',
                    }}
                >
                    Hi, my name is
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: '800',
                        marginBottom: '10px',
                        lineHeight: 1.1,
                    }}
                >
                    Sasi Kanduri.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        fontSize: '1.1rem',
                        color: '#8892b0',
                        maxWidth: '600px',
                        margin: '0 auto 40px',
                    }}
                >
                    I am an experienced Software Engineer with a versatile skill set and a passion for creating innovative solutions. I have worked on design and development of web and mobile applications using various technologies to build scalable solutions.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
                >
                    <Link to="experience" smooth={true} duration={500} offset={-70}>
                        <button className="btn">Check out my work</button>
                    </Link>
                    <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer">
                        <button
                            className="btn"
                            style={{
                                background: 'transparent',
                                border: '2px solid var(--primary-color)',
                                color: 'var(--primary-color)',
                            }}
                        >
                            Resume
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
