import React from 'react';
import './Project.css';

const Project = () => {
    return (
        <div className='project' id='project'>
            <div className='project-head'>
                <p>Browse My Recent</p>
                <h1>Projects</h1>
            </div>
            <div className='project-list'>
                <div className='project-detail'>
                    <h2>Calculator</h2>
                    <p>
                        A responsive calculator built using React.js. It features a responsive design.
                        This project performs basic arithmetic operations with a clean, user-friendly interface.
                    </p>
                    <div className='btn-source'>
                        <a href="https://calculator-yabesh.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button>View</button>
                        </a>
                        <a href="https://github.com/Yabesh1/calc" target="_blank" rel="noopener noreferrer">
                            <button>Github</button>
                        </a>
                    </div>
                </div>

                <div className='project-detail'>
                    <h2>Weather App</h2>
                    <p>A weather forecasting application developed using React.js. It provides real-time weather updates
                        and forecasts based on location using an external weather API. This project includes a clean, responsive UI.</p>
                    <div className='btn-source'>
                        <a href="https://weather-yabesh-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button>View</button>
                        </a>
                        <a href="https://github.com/Yabesh1/weather-app" target="_blank" rel="noopener noreferrer">
                            <button>Github</button>
                        </a>
                    </div>
                </div>
                <div className='project-detail'>
                    <h2>Food Delivery App</h2>
                    <p>A responsive and user-friendly food delivery web application built with React.js.
                        It allows users to browse menus, place orders, and enjoy seamless navigation.
                        Deployed live at:
                        <a href="https://yabesh-food-delivery-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                            https://yabesh-food-delivery-app.netlify.app/
                        </a>
                    </p>
                    <div className='btn-source'>
                        <a href="https://yabesh-food-delivery-app.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button>View</button>
                        </a>
                        <a href="https://github.com/Yabesh1/Food-delivery-app" target="_blank" rel="noopener noreferrer">
                            <button>GitHub</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;
