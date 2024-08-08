import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import '../styles/Projects.scss'

import battlebrain from '../assets/projectImages/BATTLEBRAIN.png'
import readingnook from '../assets/projectImages/READINGNOOK.png'
import leagueteam from '../assets/projectImages/leagueteam.png'

const projects = [
    {
        title: 'BATTLE BRAIN',
        image: battlebrain,
        description: 'A trivia game that tests your knowledge of random facts.',
        deployedLink: 'https://nameless-inlet-80123-f3bf2fedf73b.herokuapp.com/',
        repoLink: 'https://github.com/tarikorg/BATTLE_BRAIN',

    },
    {
        title: 'Reading Nook',
        image: readingnook,
        description: 'A book search engine that allows you to save books to your profile.',
        deployedLink: 'https://guarded-river-34918-8aebb7f6bceb.herokuapp.com/',
        repoLink: 'https://github.com/tarikorg/Reading_Nook',

    },
    {
        title: 'League Team Builder',
        image: leagueteam,
        description: 'A tool that helps you build a team for the game League of Legends.',
        deployedLink: 'https://thstranick15.github.io/league_team_builder/',
        repoLink: 'https://github.com/tarikorg/league_team_builder'
    }
]

const Projects = () => {
    const projectsRef = useRef(null);

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

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false, // Disable dots
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section id="projects" className="projects hidden" ref={projectsRef}>
            <h2>Projects</h2>
            <div className="carousel-container">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <div key={index} className="project">
                            <h3>{project.title}</h3>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="project-link-button">Deployed Link</a>
                                <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link-button">Repository Link</a>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-arrow-next`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <div className="triangle-right"></div>
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow custom-arrow-prev`}
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <div className="triangle-left"></div>
        </div>
    );
};
export default Projects