import React from 'react';
import './Experience.css';
import check from '../../Assets/check.png'

const Experience = () => {
  return (
    <div className='experience' id='experience'>
      <div className='exp-head'>
        <p>Explore My</p>
        <h1>Skills</h1>
      </div>
      <div className='exp-detail-sec'>
        <div className='exp-detail-left'>
          <h3>Frontend Development</h3>
          <div className='experience-details'>
            <div className='exp-data'>
              <img src={check} alt='check' />
              <h4>HTML</h4>
            </div>
            <div className='exp-data'>
              <img src={check} alt='check' />
              <h4>CSS</h4>
            </div>
            <div className='exp-data'>
              <img src={check} alt='check' />
              <h4>SASS</h4>
            </div>
            <div className='exp-data'>
              <img src={check} alt='check' />
              <h4>JavaScript</h4>
            </div>
            <div className='exp-data'>
              <img src={check} alt='check' />
              <h4>Material UI</h4>
            </div>
            <div className='exp-data'>
              <img src={check} alt='check' />
              <h4>React.js</h4>
            </div>
            <div className='exp-data'>
              <img src={check} alt='check' />
              <h4>Bootstrap</h4>
            </div>
            <div className='exp-data'>
              <img src={check} alt='check' />
              <h4>ReactBootstrap</h4>
            </div>
            <div className='exp-data'>
              <img src={check} alt='check' />
              <h4>JQuery</h4>
            </div>
            <div className='exp-data'>
              <img src={check} alt='check' />
              <h4>Node.js</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience