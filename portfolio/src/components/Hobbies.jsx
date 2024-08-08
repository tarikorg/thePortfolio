import React, { useState, useEffect, useRef } from "react";
import Slider from 'react-slick';
import '../styles/Hobbies.scss'


import az from '../assets/hobbies/az.jpg'
import az1 from '../assets/hobbies/az1.jpg'
import concert from '../assets/hobbies/concert.jpg'
import garou from '../assets/hobbies/garou.jpg'
import garou2 from '../assets/hobbies/garou2.jpg'
import kobe from '../assets/hobbies/kobe.jpg'
import luffy from '../assets/hobbies/luffy.jpg'
import obito from '../assets/hobbies/obito.jpg'
import poland from '../assets/hobbies/poland.jpg'
import stormrage from '../assets/hobbies/stormrage.jpg'
import strongest from '../assets/hobbies/strongest.jpg'
import vader from '../assets/hobbies/vader.jpg'
import warszawa from '../assets/hobbies/warszawa.jpg'
import islamvsvolk from '../assets/hobbies/islamvsvolk.png'
import danielvsinsecuregoat from '../assets/hobbies/danielvsinsecuregoat.png'
import dustinvsislam from '../assets/hobbies/dustinvsislam.png'
import justinvsmax from '../assets/hobbies/justinvsmax.png'


const hobbiesData = {
    art: [
        {
            title: 'Illidan Stormrage - The Chosen One',
            image: stormrage,
            description: 'In this painting, I wanted to capture a portrait of Illidan Stormrage, a fictional character in the Warcraft Series. He was born with golden eyes, a sign of great power and destiny to save the world. He has a tragic, lonely, and misunderstood character, which makes him one of the most complex and interesting characters in the series. I was trying to capture his fierce determination and inner turmoil in this painting. One of my favorite quotes from him is "Sometimes the hand of fate must be forced."'
        },
        {
            title: 'Vader',
            image: vader,
            description: 'Darth Vader, also known as Anakin Skywalker, is a fictional character in the Star Wars series. He is a Sith Lord who was once a Jedi Knight and a hero of the Clone Wars. However, he was seduced by the dark side of the Force and became the apprentice of Emperor Palpatine. Vader is known for his iconic black armor, deep voice, and heavy breathing. He is one of the most iconic villains in film history.'
        },
        {
            title: 'Uchiha Obito',
            image: obito,
            description: 'Uchiha Obito is a fictional character in the Naruto series. He was believed to have died during the Third Shinobi World War, but he was actually saved by Madara Uchiha and trained to become a powerful ninja. Obito eventually becomes the masked villain known as Tobi and later takes on the identity of Madara Uchiha. His goal is to create a world of peace and order by using the power of the Ten-Tails.'
        },
        {
            title: 'The beginning of the journey',
            image: luffy,
            description: 'In this painting, i wanted to capture the moment when Luffy and Zoro first set sail on their journey to find more crew members and become the King of the Pirates. The painting shows the two characters sailed off with a small boat, with the vast ocean and the blue sky in the background. I was trying to capture the sense of adventure and excitement that comes with embarking on a new journey.'

        },
        {
            title: 'The Strongest',
            image: strongest,
            description: 'In this painting, I wanted to capture the moment when Madara Uchiha, the strongest shinobi in the Naruto series, was facing off against Might Guy, whos born with no talent but worked hard to become stronger than anyone around. His sacrifice impressed Madara and was declared as the strongest shinobi he ever faced. I was trying to capture the intensity and power of the battle between these two characters.'
        },
        {
            title: 'Kobe Bryant',
            image: kobe,
            description: 'Kobe Bryant is my favorite basketball player of all time. i grew up watching him play and was inspired by his mentality and passion for the game. I was devastated when he passed away in a helicopter crash in 2020. I wanted to create a painting to honor his legacy and show my respect for him. I was trying to capture his intensity, focus, and determination in this painting.'
        },
        {
            title: 'Battle between Master and Disciple',
            image: garou,
            description: 'Garou is a fictional character in the One Punch Man series. he is one of my favorite characters in fiction. I love his character development and determination to become the strongest monster (even though he never lost his humanity). I was trying to capture the intensity and power of the battle between Garou and his master, Silver Fang, in this painting.'
        },
        {
            title: 'Escape from the shackles',
            image: garou2,
            description: 'In this painting, I wanted to capture the moment when Garou broke free from his shackles and his fierceful determination to pursue his goal of becoming the strongest. I was trying digital painting for the first time and wanted to experiment with different techniques and styles. I was trying to capture the intensity and power of the character in this painting.'
        }
    ],
    life: [
        {
            title: 'Warsaw, Palace of Culture and Science',
            image: warszawa,
            description: 'Warsaw is the place where i grew up and spent most of my teenage years. I have a lot of memories and life experiences in this city. The Palace of Culture and Science is one of the most iconic buildings in Warsaw and the symbol of the city.'
        },
        {
            title: 'The silence of the innocent',
            image: poland,
            description: 'Auschwitz-Birkenau is a place where i visited with my family. It was a very emotional and powerful experience to see the place where so many innocent people lost their lives during the Holocaust. It was a reminder of the importance of remembrance and education to prevent such atrocities from happening again.'
        },
        {
            title: 'AZ MEMORIES',
            image: az,
            description: 'Me and my friend'
        },
        {
            title: 'AZ MEMORIES',
            image: az1,
            description: 'ghost town'
        },
        {
            title: 'Concert',
            image: concert,
            description: 'BBNO$(he is in the middle) concert with my friend'
        }
    ],
    mma: [
        {
            title: 'Daniel Cormier vs Jon Jones',
            image: danielvsinsecuregoat,
            description: 'As a huge mma fan, this was the peak light heavyweight rivalry in the history of the sport. Daniel Cormier vs Jon Jones was a fight that had everything. The build-up, the drama, the controversy, and the skill level of both fighters made it one of the most anticipated fights in the history of the sport.'
        },
        {
            title: 'Dustin vs Islam',
            image: dustinvsislam,
            description: 'This fight was a surprise to many mma fans. This was Dustin Porier`s last title shot before his retirement, he had nothing to lose and everything to gain. Islam Makhachev on the other hand arguably is the best lightweight of all time. This fight happened in new jersey but unfortunately something came up and i couldnt see it live in the arena but hey i still watched it on tv.'
        },
        {
            title: 'Islam vs Volk',
            image: islamvsvolk,
            description: 'Islam Makhachev vs Alexander Volkanovski is arguably the best skill to skill fight ever happened in the octagon. Both fighters are at the peak of their careers and are considered the best in their weight class. This fight was a dream fight for many mma fans and it lived up to the hype.'
        },
        {
            title: 'Justin vs Max',
            image: justinvsmax,
            description: 'Justin Gaethje vs Max Holloway was a fight that had everything. The build-up, the drama, the controversy, and the skill level of both fighters made it one of the most anticipated fights in the history of the sport. This fight was a dream fight for many mma fans and it lived up to the hype. Truly a worthy fight for UFC 300 and for the mma hall of fame.'
        }

    ]
}

const Hobbies = () => {
    const [activeCategory, setActiveCategory] = useState('art');
    const hobbiesRef = useRef(null);

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
            { threshold: 0.3 }
        );

        if (hobbiesRef.current) {
            observer.observe(hobbiesRef.current);
        }

        return () => {
            if (hobbiesRef.current) {
                observer.unobserve(hobbiesRef.current);
            }
        };
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const categories = Object.keys(hobbiesData);

    return (
        <section id="hobbies" className="hobbies hidden" ref={hobbiesRef}>
            <h2>Hobbies</h2>
            <div className="category-buttons">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`category-button ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <div className="carousel-container">
                <Slider {...settings}>
                    {hobbiesData[activeCategory].map((item, index) => (
                        <div key={index} className="hobby">
                            <div className="hobby-details">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="hobby-image">
                                <img src={item.image} alt={item.title} />
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

export default Hobbies