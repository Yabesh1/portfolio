import React from 'react';
import './About.css';
import education from '../../Assets/eduation.png';
import experience from '../../Assets/experience.png';
import about from '../../Assets/about.png'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about-sec'>
                <p className='about-text'>Get To Know More</p>
                <h1 className='about-title'>About Me</h1>
            </div>
            <div className='about-detail'>
                <div className='about-img'>
                    <img src={about} alt='experience' />
                </div>
                <div className='about-experience'>
                    <div className='about-education'>
                        <div className='about-detail-container'>
                            <img src={experience} alt='experience' />
                            <h4>Experience</h4>
                            <p>Fresher</p>
                            <p>Frontend Development</p>
                        </div>
                        <div className='about-detail-container'>
                            <img src={education} alt='education' />
                            <h4>Education</h4>
                            <p>2021-2025</p>
                            <p>BE-Electronics and Communication</p>
                        </div>
                    </div>
                    <div className='about-para'>
                        <p>Motivated and detail-oriented Frontend Developer with a strong foundation in web technologies including HTML, CSS, JavaScript, and modern frameworks. Passionate about creating responsive and user-friendly interfaces. Eager to apply problem-solving skills and a solid understanding of design principles in real-world projects.
                           Adaptable team player with a commitment to continuous learning and staying updated with emerging trends.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About