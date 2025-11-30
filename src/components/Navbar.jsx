import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Education', to: 'education' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: scrolled ? '15px 0' : '25px 0',
                background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.3s ease',
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontFamily: 'monospace',
                        color: 'var(--primary-color)',
                    }}
                >
                    &gt;&gt;&gt; sasi_kanduri
                </Link>

                {/* Desktop Menu */}
                <ul
                    style={{
                        display: 'flex',
                        gap: '30px',
                        alignItems: 'center',
                    }}
                    className="desktop-menu"
                >
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    color: 'var(--text-color)',
                                    opacity: 0.8,
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.target.style.color = 'var(--primary-color)')}
                                onMouseLeave={(e) => (e.target.style.color = 'var(--text-color)')}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div
                    className="mobile-menu-icon"
                    onClick={toggleMenu}
                    style={{
                        display: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: 'var(--text-color)',
                    }}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            width: '100%',
                            background: 'rgba(10, 10, 10, 0.95)',
                            backdropFilter: 'blur(10px)',
                            padding: '20px',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '20px',
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={toggleMenu}
                                style={{
                                    cursor: 'pointer',
                                    fontSize: '1.1rem',
                                    fontWeight: '500',
                                    color: 'var(--text-color)',
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-icon {
            display: block !important;
          }
        }
      `}</style>
        </nav >
    );
};

export default Navbar;
