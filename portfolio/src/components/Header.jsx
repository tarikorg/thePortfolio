import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import { scroller } from 'react-scroll';
import '../styles/Header.scss'

import linkedin from '../assets/Footer/linkedin.png'
import github from '../assets/Footer/github.png'
import resume from '../assets/MuhsinTarik-1.pdf'

const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        const sections = document.querySelectorAll('main section');
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section) => {
            if (
                section.offsetTop <= scrollPosition &&
                section.offsetTop + section.offsetHeight > scrollPosition
            ) {
                setActiveSection(section.id);
            }
        });

        if (window.scrollY < window.innerHeight * 0.05) {
            setActiveSection('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <nav>
                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li className={activeSection === 'about-me' ? 'active' : ''}>
                        <Link to="about-me" smooth={true} duration={500}>About Me</Link>
                    </li>
                    <li className={activeSection === 'tech-stack' ? 'active' : ''}>
                        <Link to="tech-stack" smooth={true} duration={500}>Tech Stack</Link>
                    </li>
                    <li className={activeSection === 'projects' ? 'active' : ''}>
                        <Link to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li className={activeSection === 'hobbies' ? 'active' : ''}>
                        <Link to="hobbies" smooth={true} duration={500}>Hobbies</Link>
                    </li>
                    <li className={activeSection === 'contact-me' ? 'active' : ''}>
                        <Link to="contact-me" smooth={true} duration={500}>Contact Me</Link>
                    </li>
                </ul>
            </nav>
            <a href={resume} download="MuhsinTarikOrgerim-resume.pdf" className="resume-button">
                <span className="text">DOWNLOAD</span>
                <span className="text">RESUME</span>
            </a>
            <div className="hire-me">
                <span className="hire-me-text">HIRE ME</span>
                <div className="hire-me-icons">
                    <a href="https://www.linkedin.com/in/tarikorg" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/tarikorg" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" />
                    </a>
                </div>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
        </header>
    );
};

export default Header