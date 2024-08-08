import React, { useState, useRef, useEffect } from 'react'

import Header from './components/Header'
import Landing from './components/Landing'
import AboutMe from './components/AboutMe'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Hobbies from './components/Hobbies'
import ContactMe from './components/ContactMe'




import './index.scss'

function App() {


  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {

      } else {

      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Landing />
      <main>
        <section id="about-me">
          <AboutMe />
        </section>
        <section id="tech-stack">
          <TechStack />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="hobbies">
          <Hobbies />
        </section>
        <section id="contact-me">
          <ContactMe />
        </section>

      </main>

    </div>
  );
}


export default App
