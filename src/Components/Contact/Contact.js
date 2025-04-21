import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [messageStatus, setMessageStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_6eg5wri',
            'template_ge87969',
            form.current,
            '55n4f7dQLwgCsRwc8'
        )
        .then((result) => {
            console.log(result.text);
            setMessageStatus('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            setMessageStatus('Error sending message. Please try again.');
        });

        e.target.reset();
    };

    return (
        <div className='contact' id='contact'>
            <div className='contact-head'>
                <p>Get in Touch</p>
                <h1>Contact Me</h1>
            </div>
            <div className='contact-detail'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' placeholder='Your Message' rows={5} required />
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                {messageStatus && <div className="message-status">{messageStatus}</div>}

                <div className='icons'>
                    <a href="tel:8946009278" className="contact-link">
                        <i className="bi bi-telephone-fill phone"></i>
                    </a>
                    <a href="mailto:yabeshkrm43@gmail.com" className="contact-link">
                        <i className="bi bi-envelope email"></i>
                    </a>
                    <a href="https://wa.me/918946009278" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="bi bi-whatsapp whatsapp"></i>
                    </a>
                    <a href="https://github.com/Yabesh1" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="bi bi-github github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yabesh-s" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="bi bi-linkedin linkedin"></i>
                    </a>
                </div>

                <div>
                    <p>&copy; 2025 Yabesh. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
