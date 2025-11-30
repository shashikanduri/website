import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Personal Spotify Agent',
            description:
                'Engineered a conversational AI agent using LangGraph that orchestrates general Spotify app operations through a ReAct workflow. Implemented Spotify OAuth authentication and developed custom tools for the Spotify Web API.',
            tech: ['Python', 'LangGraph', 'Spotify API', 'OAuth'],
            links: {
                github: '#',
                external: '#',
            },
        },
        {
            title: 'Hash-based Proof of Stake',
            description:
                'Researched and evaluated a novel proof-of-stake consensus algorithm using Python with Multithreading and RSA encryption to simulate a 100-node blockchain network, achieving 15-20% improvement in decentralization metrics.',
            tech: ['Python', 'Multithreading', 'RSA Encryption', 'Blockchain'],
            links: {
                github: '#',
                external: '#',
            },
        },
        {
            title: 'Brain Tumor Detection',
            description:
                'Built models using vision transformers, fast R-CNN and YOLO models to detect brain tumors using datasets with T1-Weighted MRI scans of the brain.',
            tech: ['Vision Transformers', 'Fast R-CNN', 'YOLO', 'Python'],
            links: {
                github: '#',
                external: '#',
            },
        },
    ];

    return (
        <section id="projects" style={{ padding: '100px 20px' }}>
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
                    Some Things I've Built
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
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '20px',
                                }}
                            >
                                <FaFolder
                                    style={{
                                        fontSize: '2.5rem',
                                        color: 'var(--primary-color)',
                                    }}
                                />
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    {/* <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: 'var(--text-color)',
                                            fontSize: '1.2rem',
                                        }}
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href={project.links.external}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: 'var(--text-color)',
                                            fontSize: '1.2rem',
                                        }}
                                    >
                                        <FaExternalLinkAlt />
                                    </a> */}
                                </div>
                            </div>

                            <h3
                                style={{
                                    fontSize: '1.4rem',
                                    marginBottom: '10px',
                                    color: '#e0e0e0',
                                }}
                            >
                                {project.title}
                            </h3>

                            <p
                                style={{
                                    color: '#8892b0',
                                    fontSize: '0.95rem',
                                    marginBottom: '20px',
                                    flex: 1,
                                }}
                            >
                                {project.description}
                            </p>

                            <ul
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '15px',
                                    fontSize: '0.8rem',
                                    color: '#8892b0',
                                    fontFamily: 'monospace',
                                }}
                            >
                                {project.tech.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
