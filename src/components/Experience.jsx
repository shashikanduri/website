import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    const experiences = [
        {
            company: 'Office of Water Programs',
            role: 'Full Stack Engineer',
            duration: 'Jun 2023 – Present',
            location: 'Sacramento, CA',
            url: 'https://www.owp.csus.edu/',
            points: [
                'Led the design and development of a state-wide water quality analytics and training platform; built frontend with React/TypeScript and backend APIs and microservices with Python (Flask/FastAPI), SQLAlchemy and Alembic.',
                'Architected and shipped production AWS infrastructure supporting the platform\'s public API and frontend — ECS Fargate for backend services, RDS SQL Server for the database, S3 + CloudFront for the React SPA, and Bitbucket Pipelines for CI/CD.',
                'Developed an internal Python SDK wrapping hydrologic data analyses and water science computations into reusable OOP classes (using Pandas, NumPy, SciPy), reducing what previously required a full service\'s worth of logic to three lines of code, consumed natively in Python codebases as packages and exposed via APIs to Java and PHP applications across the organization.',
                'Built Airflow DAGs for sampling schedules, data analysis, and contamination result notifications across 2,000+ water systems; incorporated data mismatch resolution using LLM calls to automatically reconcile sample collection dates against lab reports, reducing manual correction effort by 90%.',
                'Implemented a checkout system using PayPal Expanded Checkout for eLearning course purchases, handling $10,000+ in daily transactions, with CloudWatch for monitoring and alerts.',
            ],
        },
        {
            company: 'Graphwear Technologies',
            role: 'Software Engineer Intern',
            duration: 'Apr 2025 – Jul 2025',
            location: 'Sacramento, CA',
            url: 'https://www.graphwear.co/',
            points: [
                'Built and deployed a FastAPI backend on AWS to ingest and analyze sensor data from a Bluetooth wearable, serving endpoints for the iOS app and internal dashboards.',
                'Contributed core iOS features in Swift, including Bluetooth packet parsing every 30 seconds and observer-based state management for near real-time lactate readings.',
                'Set up infrastructure-as-code and CI/CD pipelines with AWS CloudFormation and Bitbucket Pipelines, automating infrastructure provisioning, testing, and deployment for the project.',
            ],
        },
        {
            company: 'Aaseya',
            role: 'Software Engineer',
            duration: 'Aug 2020 – Jun 2022',
            location: 'Hyderabad, India',
            url: 'https://www.aaseya.com/',
            points: [
                'Built backend microservices in Spring Boot powering data exchange for a court management system; implemented JWT authentication, centralized exception handling, and role-based access control.',
                'Developed an end-to-end Hearings Management module in Pega, enabling judges to schedule, reschedule, and cancel hearings across multiple case types with REST APIs and role-based access for appellants, defendants, and judges.',
                'Contributed to workflows like case registration, travel ban and others on Pega using parent-child case hierarchies (pyWorkCover and covered cases), circumstanced rules, cascading and authority matrix approvals; handled multi-stage processing using subprocesses, flows, and SLAs for time-bound escalations.',
                'Integrated with external systems via Connect-REST with connection problem flows for graceful failure handling; debugged complex production issues using Clipboard and Tracer to inspect runtime case states and rule resolutions.',
            ],
        },
        {
            company: 'JK Tech',
            role: 'Software Engineer',
            duration: 'Jan 2019 – Aug 2020',
            location: 'Hyderabad, India',
            url: 'https://jktech.com/',
            points: [
                'Developed backend REST APIs in Spring Boot and created multiple Pega modules for the Government of Andhra Pradesh\'s E-Pragati (OnePortal) platform, covering examination scheduling, real-estate registrations, Helpline Counter operations and integrations for CCAvenue payment gateway.',
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
