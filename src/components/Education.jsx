
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Education = () => {
    const education = [
        {
            school: 'California State University, Sacramento',
            degree: 'Master of Science, Computer Science',
            duration: 'Aug 2022 – Dec 2024',
            location: 'Sacramento, CA',
            url: 'https://www.csus.edu/',
        },
        {
            school: 'Jawaharlal Nehru Technological University, India',
            degree: 'Bachelor of Technology, Information Technology',
            duration: 'Aug 2013 – May 2017',
            location: 'Hyderabad, India',
            url: 'https://jntuh.ac.in/',
        },
    ];

    return (
        <section id="education" style={{ padding: '100px 20px' }}>
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
                    Where I've Studied
                    <span
                        style={{
                            height: '1px',
                            background: 'var(--glass-border)',
                            flex: 1,
                            maxWidth: '300px',
                        }}
                    ></span>
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: '20px',
                            }}
                        >
                            <div>
                                <h3
                                    style={{
                                        fontSize: '1.3rem',
                                        color: '#e0e0e0',
                                        marginBottom: '5px',
                                    }}
                                >
                                    {edu.school}
                                    <a
                                        href={edu.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            marginLeft: '10px',
                                            color: 'var(--text-color)',
                                            fontSize: '0.9rem',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                </h3>
                                <p
                                    style={{
                                        fontSize: '1.1rem',
                                        color: 'var(--primary-color)',
                                        marginBottom: '5px',
                                    }}
                                >
                                    {edu.degree}
                                </p>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        color: '#8892b0',
                                        fontFamily: 'monospace',
                                    }}
                                >
                                    {edu.location}
                                </p>
                            </div>
                            <div
                                style={{
                                    fontSize: '0.9rem',
                                    color: '#8892b0',
                                    fontFamily: 'monospace',
                                    background: 'var(--glass-bg)',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    border: '1px solid var(--glass-border)',
                                }}
                            >
                                {edu.duration}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
