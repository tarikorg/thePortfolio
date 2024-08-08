import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import '../styles/TechStack.scss'

import logo1 from '../assets/java.png'  //learning
import logo2 from '../assets/js.png'
import logo3 from '../assets/html.png'
import logo4 from '../assets/css.png'
import logo5 from '../assets/react.png'
import logo6 from '../assets/nodejs.png'
import logo7 from '../assets/postgres.png'
import logo8 from '../assets/mongodb.png'
import logo9 from '../assets/webpack.png'
import logo10 from '../assets/git.png'
import logo11 from '../assets/sass.png'
import logo12 from '../assets/graphql.png'

const experienceLogos = [logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11]
const learningLogos = [logo1, logo12]


const TechStack = () => {
    const techStackRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        entry.target.classList.remove('hidden');
                    } else {
                        entry.target.classList.add('hidden');
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (techStackRef.current) {
            observer.observe(techStackRef.current);
        }

        return () => {
            if (techStackRef.current) {
                observer.unobserve(techStackRef.current);
            }
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 10000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false, // Hide the arrows
        variableWidth: true,
    };

    const learningSettings = {
        ...settings,
        slidesToShow: 1, // Adjust to show fewer logos
    };

    return (
        <section id="tech-stack" className="tech-stack hidden" ref={techStackRef}>
            <h2>Tech Stack</h2>
            <div className="experience">
                <h3>Have experience with:</h3>
                <div className="logos-container experience-logos">
                    <Slider {...settings}>
                        {experienceLogos.map((logo, index) => (
                            <img key={index} src={logo} alt={`Experience Logo ${index + 1}`} className="logo" />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="learning">
                <h3>Currently Learning:</h3>
                <div className="logos-container learning-logos">
                    <Slider {...learningSettings}>
                        {learningLogos.map((logo, index) => (
                            <img key={index} src={logo} alt={`Learning Logo ${index + 1}`} className="logo" />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="tech-details">
                <div className="tech-box">
                    <h3>FrontEnd Techs:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>TailwindCSS</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className="tech-box">
                    <h3>BackEnd Techs:</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Java</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>PostgreSQL</li>
                        <li>GraphQL</li>
                        <li>SQL</li>
                        <li>Sequelize</li>
                        <li>Apollo</li>

                    </ul>
                </div>

            </div>
        </section>
    );
};

export default TechStack