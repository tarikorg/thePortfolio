import React, { useEffect, useRef } from 'react'
import '../styles/AboutMe.scss'

import profilePicture from '../assets/handsome_man.jpg'

const AboutMe = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === textRef.current) {
                        textRef.current.classList.add('animate-text');
                    }
                    if (entry.target === imageRef.current) {
                        imageRef.current.classList.add('visible');
                    }
                } else {
                    if (entry.target === textRef.current) {
                        textRef.current.classList.remove('animate-text');
                    }
                    if (entry.target === imageRef.current) {
                        imageRef.current.classList.remove('visible');
                    }
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        if (textRef.current) observer.observe(textRef.current);
        if (imageRef.current) observer.observe(imageRef.current);

        return () => {
            if (textRef.current) observer.unobserve(textRef.current);
            if (imageRef.current) observer.unobserve(imageRef.current);
        };
    }, []);

    return (
        <section id="about-me" className="about-me">
            <div className="about-me-title">
                <h2>About Me</h2>
            </div>
            <div className="about-me-content">
                <img src={profilePicture} alt="Profile" className="profile-picture" ref={imageRef} />
                <div className="about-me-text" ref={textRef}>
                    <p>
                        My name is Muhsin Tarik. I am a full-stack web developer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies.

                    </p>
                    <p>
                        I am a quick learner and am always looking to expand my knowledge and skillset. I am currently seeking a position as a web developer and am excited to see where my career takes me.

                    </p>

                    <p>
                        I thrive both when working independently and as part of a team. With hands-on experience in user interface design, testing, and debugging, I am well-versed in various programming languages and technologies. I am always eager to learn more and keep up with the latest industry trends.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe