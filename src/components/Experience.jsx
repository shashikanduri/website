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
                'Lead developer on water quality analytics and training platform covering 4,000 monitoring nodes; responsible for React frontend and Python microservices (Flask/FastAPI) with SQLAlchemy ORM, Alembic migrations, and Redis caching, exposing REST APIs.',
                'Architected AWS infrastructure with ECS Fargate for backend services, S3 + CloudFront for SPA frontends, SQS queues with Lambda consumers, RDS SQL Server for the database, and Bitbucket Pipelines for CI/CD.',
                'Authored an internal Python library with an object-oriented design that packages complete hydrologic and water quality analyses into reusable classes, producing statistical summaries, visualizations, and structured results consumed across the platform\'s APIs and analytical workflows.',
                'Built Airflow DAGs for sampling schedules, data analysis, and contamination result notifications for 2,000+ water systems, cutting manual work for program staff by 90%.',
                'Implemented checkout system integrating PayPal Expanded Checkout for eLearning course purchases, handling $10,000+ in daily transactions, with CloudWatch and SNS for monitoring and alerts.',
                'Designed and implemented MS SQL Server database schema incorporating tables, procedures, triggers, views and indexes to support web applications and data workflows, ensuring data integrity and optimal performance.',
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
                'Designed and developed complex Pega case types and workflows for various court management operations for the Ministry of Justice, Saudi Arabia.',
                'Built an end-to-end Hearings management module on PEGA enabling judges to schedule, reschedule, and cancel hearings across multiple case types involving appellants, defendants, and presiding judges; Used various Pega rules/records like case types, classes, flows, sections, data pages, activities, data transforms, and database tables.',
                'Eliminated double-booking race conditions across concurrent judge sessions on shared time slots by implementing a re-check-before-commit pattern that re-validated slot availability at runtime.',
                'Implemented travel ban processing workflows on PEGA using parent-child case hierarchies (pyWorkCover and covered cases), with cascading multi-level approvals and an authority matrix that resolved approver eligibility based on case attributes; orchestrated multi-stage processing using subprocesses, flows, and SLAs for time-bound escalations.',
                'Integrated with external systems via Connect-REST with connection problem flows for graceful failure handling; debugged complex production issues using Clipboard and Tracer to inspect runtime case state and rule execution paths.',
            ],
        },
        {
            company: 'JK Tech',
            role: 'PEGA Developer',
            duration: 'Jan 2019 – Aug 2020',
            location: 'Hyderabad, India',
            url: 'https://jktech.com/',
            points: [
                'Contributed to E-Pragati, the Government of Andhra Pradesh\'s flagship digitization initiative aimed at moving citizen services online through a unified portal (OnePortal), within the Education and RERA service verticals.',
                'Built workflows for examination scheduling and Help Line Counter (offline in-person payment booth) modules using flows, sections, queue processing, and activities; integrated the CCAvenue payment gateway via Service-REST and JSP rules to enable online collection of exam fees and regulatory charges which handled tens of thousands of bookings per day during peak exam seasons across citizen services.',
                'Delivered various RERA modules covering real-estate project registrations, multi-stage approval workflows, and the quarterly project updates system for registered builders; implemented using case types, flows, SLAs, decision tables, data pages, validate rules, and correspondence rules, with role-based access controlled via access groups, access roles, and Access of Role to Object (ARO) rules to segregate builder, regulator, and admin permissions.',
                'Designed and implemented MS SQL Server database schema incorporating tables, procedures, triggers, views and indexes to support web applications and data workflows, ensuring data integrity and optimal performance.',
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
