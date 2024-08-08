import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import '../styles/ContactMe.scss'

const ContactMe = () => {
    const contactMeRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        description: '',
        access_key: '78520ef3-84c7-4e87-b2ab-1c67fb3e445e',
        subject: 'Message from user'
    });
    const [status, setStatus] = useState('');

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
            { threshold: 0.8 }
        );

        if (contactMeRef.current) {
            observer.observe(contactMeRef.current);
        }

        return () => {
            if (contactMeRef.current) {
                observer.unobserve(contactMeRef.current);
            }
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            await axios.post('https://api.web3forms.com/submit', formData);
            setStatus('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                title: '',
                description: '',
                access_key: '78520ef3-84c7-4e87-b2ab-1c67fb3e445e',
                subject: 'Message from user'
            });
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact-me" className="contact-me hidden" ref={contactMeRef}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
                {status && <p className="status">{status}</p>}
            </form>
        </section>
    );
};


export default ContactMe