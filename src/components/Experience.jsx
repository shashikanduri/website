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
                'Lead developer on a water quality tracking platform covering 4,000 monitoring nodes; responsible for React UI, Python (Flask/FastAPI) microservices exposing REST APIs, async SQLAlchemy, and caching across the request lifecycle.',
                'Architected AWS infrastructure — ECS Fargate with ALB for backends, S3 + CloudFront for SPA frontends and RDS SQL Server with cost-optimized shared services and Bitbucket Pipelines for automated on-merge deployments.',
                'Authored Python SDKs that package complete hydrologic and water quality analyses, producing statistical summaries, visualizations, and structured results used across the platform\'s API and analytical workflows.',
                'Built Python/Airflow DAGs for sampling schedules, result analysis, and contamination alerts reaching 2,000+ water systems, cutting manual notification work for program staff by 90%.',
                'Designed and implemented MS SQL Server database schemas, incorporating tables, procedures, triggers, views and indexes to support web applications and data workflows, ensuring data integrity and optimal performance.',
            ],
        },
        {
            company: 'Graphwear Technologies',
            role: 'Software Engineer Intern',
            duration: 'Apr 2025 – Jul 2025',
            location: 'Sacramento, CA',
            url: 'https://www.graphwear.co/',
            points: [
                'Built and deployed a FastAPI backend on AWS (ECS Fargate, RDS PostgreSQL, Alembic migrations) to ingest and analyze sensor data from a Bluetooth wearable, serving endpoints for the iOS app and internal dashboards.',
                'Set up infrastructure-as-code and CI/CD pipelines with AWS CloudFormation and Bitbucket Pipelines, automating provisioning, testing, and deployment for the project.',
                'Contributed core features to the companion iOS app in Swift, including Bluetooth data packet parsing and observer-based state management for real-time lactate readings.',
            ],
        },
        {
            company: 'Aaseya',
            role: 'Software Engineer',
            duration: 'Aug 2020 – Jun 2022',
            location: 'Hyderabad, India',
            url: 'https://www.aaseya.com/',
            points: [
                'Built Flask microservices powering data exchange for a court management system; implemented JWT authentication, Pydantic schema validation, centralized exception handling, and role-based access control via decorators.',
                'Developed workflow automation for court operations (hearings, case registrations) in a case management system for the Saudi Arabia Ministry of Justice; integrated external judicial data sources via REST services.',
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
