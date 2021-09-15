import React from 'react';
import JoeSplashPic from './assets/JoeSplashPic.png';

const Info = () => {
  return (
    <>
      <div className="info">
        <section className="projects-container">
          <h3>Projects</h3>
          <ul>
            <li>
              <div className="project">Project</div>
            </li>
            <li>
              <div className="project">Project</div>
            </li>
            <li>
              <div className="project">Project</div>
            </li>
          </ul>
        </section>
        <section className="skills-container">
          <h3>Skills</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Git</li>
            <li>AWS</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Info;
