import React from 'react';
import './Banner.css';
import yabesh from '../../Assets/yabesh.png'

const Banner = () => {
    return (
        <div className='banner' id='profile'>
            <div className='banner-img'>
                <img src={yabesh} alt='profiles' />
            </div>
            <div className='banner-text'>
                <p className='banner-text-p1'>Hello I'm</p>
                <h1 className='title'>Yabesh S</h1>
                <p className='banner-text-p2'>Frontend Developer</p>
                <div className='banner-btn'>
                    <a href='/Yabesh-Resume.pdf' download className='btn btn-color-1'>Download CV</a>
                    <a href='#contact'>
                    <button className='btn btn-color-2'>Contact Info</button></a>
                </div>

                <div className='banner-social'>
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
            </div>
        </div>
    )
}

export default Banner
