import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        Languages: ['Python', 'Java', 'Javascript', 'C', 'C++'],
        Frameworks: [
            'React',
            'Flask',
            'GraphQL',
            'FastAPI',
            'Spring Boot',
            'pyTorch',
            'LangChain',
            'LangGraph',
        ],
        Databases: ['MS SQL', 'PostgreSQL', 'MongoDB'],
        Tools: [
            'Git',
            'IntelliJ',
            'VS Code',
            'Maven',
            'Docker',
            'AWS',
            'Jenkins',
            'Airflow',
        ],
    };

    return (
        <section id="skills" style={{ padding: '100px 20px' }}>
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
                    Skills
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
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '30px',
                    }}
                >
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                        >
                            <h3
                                style={{
                                    fontSize: '1.1rem',
                                    marginBottom: '15px',
                                    color: 'var(--primary-color)',
                                }}
                            >
                                {category}
                            </h3>
                            <ul style={{ listStyle: 'none' }}>
                                {items.map((item, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            marginBottom: '8px',
                                            color: '#8892b0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        <span
                                            style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: 'var(--secondary-color)',
                                            }}
                                        ></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
