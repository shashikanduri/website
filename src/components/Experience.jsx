import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const experiences = [
        {
            company: 'Office of Water Programs',
            role: 'Software Engineer',
            duration: 'Jun 2023 – Present',
            location: 'Sacramento, CA',
            url: 'https://www.owp.csus.edu/',
            points: [
                'Designed and developed a Water Quality Testing System with web applications and microservices for the State Water Resources Control Board of California using React, Python, Flask/FastAPI, GraphQL, SQLAlchemy, Jinja and RabbitMQ.',
                'Designed and implemented a Stormwater Analytics Web Tools System for the California Department of Transportation, enabling state consultants to report real-time storm data.',
                'Developed reusable Python packages for cross-functional teams, leveraging Pandas, NumPy, and Matplotlib, achieving 90% reusability.',
                'Developed automation scripts and data pipelines using Python and Airflow for sampling schedule notifications, eliminating manual workflows by 90%.',
                'Designed and implemented MS SQL Server database schemas, incorporating tables, procedures, triggers, views and indexes.',
            ],
        },
        {
            company: 'Graphwear Technologies',
            role: 'Software Engineer Intern',
            duration: 'Apr 2025 – Jul 2025',
            location: 'Sacramento, CA',
            url: 'https://www.graphwear.co/',
            points: [
                'Developed iOS application in Swift to interface with a Bluetooth-enabled wearable device, implementing data packet parsing and observer patterns.',
                'Built and deployed FastAPI backend on AWS using ECS Fargate, RDS PostgreSQL and Alembic to store and analyze sensor data.',
                'Implemented CI/CD pipeline using AWS CloudFormation and Bitbucket Pipelines for automated infrastructure provisioning.',
            ],
        },
        {
            company: 'Aaseya',
            role: 'Software Engineer',
            duration: 'Aug 2020 – Jun 2022',
            location: 'Hyderabad, India',
            url: 'https://www.aaseya.com/',
            points: [
                'Developed secure RESTful APIs using Spring Boot with JWT authentication, implementing custom exception handling and input validation.',
                'Architected and developed case management solutions for the Ministry of Justice of Saudi Arabia using advanced PEGA web development concepts.',
            ],
        },
        {
            company: 'JK Tech',
            role: 'PEGA Developer',
            duration: 'Jan 2019 – Aug 2020',
            location: 'Hyderabad, India',
            url: 'https://jktech.com/',
            points: [
                'Developed government service software modules for the OnePortal system of the State of Andhra Pradesh.',
                'Integrated multiple payment gateway solutions (CCAvenue and Axis Bank) into the application using JSP rules and Service-REST configurations.',
            ],
        },
    ];

    return (
        <section id="experience" style={{ padding: '100px 20px' }}>
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
                    Where I've Worked
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
                    className="experience-container"
                    style={{ display: 'flex', gap: '40px' }}
                >
                    {/* Tabs */}
                    <div
                        className="tabs-list"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderLeft: '2px solid var(--glass-border)',
                            minWidth: '200px',
                        }}
                    >
                        {experiences.map((exp, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                style={{
                                    background: activeTab === index ? 'var(--glass-bg)' : 'transparent',
                                    border: 'none',
                                    borderLeft: activeTab === index ? '2px solid var(--primary-color)' : '2px solid transparent',
                                    padding: '15px 20px',
                                    textAlign: 'left',
                                    color: activeTab === index ? 'var(--primary-color)' : '#8892b0',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    marginLeft: '-2px',
                                    fontSize: '0.95rem',
                                    fontFamily: 'var(--font-main)',
                                }}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>
                                {experiences[activeTab].role}{' '}
                                <span style={{ color: 'var(--primary-color)' }}>
                                    @ {experiences[activeTab].company}
                                </span>
                                <a
                                    href={experiences[activeTab].url}
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
                                    fontSize: '0.9rem',
                                    color: '#8892b0',
                                    marginBottom: '20px',
                                    fontFamily: 'monospace',
                                }}
                            >
                                {experiences[activeTab].duration} | {experiences[activeTab].location}
                            </p>
                            <ul style={{ listStyle: 'none' }}>
                                {experiences[activeTab].points.map((point, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            marginBottom: '15px',
                                            position: 'relative',
                                            paddingLeft: '20px',
                                            color: '#8892b0',
                                            fontSize: '1rem',
                                        }}
                                    >
                                        <span
                                            style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '8px',
                                                width: '8px',
                                                height: '8px',
                                                borderRadius: '50%',
                                                background: 'var(--primary-color)',
                                            }}
                                        ></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .experience-container {
            flex-direction: column !important;
          }
          .tabs-list {
            flex-direction: row !important;
            border-left: none !important;
            border-bottom: 2px solid var(--glass-border) !important;
            overflow-x: auto;
            margin-bottom: 30px;
          }
          .tabs-list button {
            border-left: none !important;
            border-bottom: 2px solid transparent;
            margin-left: 0 !important;
            margin-bottom: -2px;
            white-space: nowrap;
          }
          .tabs-list button[style*="var(--primary-color)"] {
            border-bottom: 2px solid var(--primary-color) !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Experience;
