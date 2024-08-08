import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import '../styles/Landing.scss'

const Landing = () => {
    return (
        <section className="landing" id="landing">
            <div className="landing-content">
                <h1 className="welcome-text">Welcome to My Portfolio</h1>
                <h1 className='welcome-text2'>Muhsin Tarik Orgerim</h1>
                <Link to="about-me" smooth={true} duration={500} className="learn-more">Learn more about me</Link>
            </div>
        </section>
    )
}
export default Landing