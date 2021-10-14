import React from 'react';
import pfp from '../assets/Pfp3.png';
import ProjectCard from '../Helpers/ProjectCard';

const WebDev = () => {
  return (
    <>
      <div className="info">
        <section className="skills-container">
          <h3>Skills</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>AWS</li>
          </ul>
        </section>
        <section className="projects-container">
          <h3>Projects</h3>
          <ul>
            <li>
              <ProjectCard
                class="web-project"
                imgSource={pfp}
                title="Portfolio Site"
                description="I became my own client and created a website to showcase my
                  web development, pixel art, and game development projects"
                links={[
                  {
                    name: 'Source Code',
                    href: 'https://github.com/JBain359/PortfolioSite',
                  },
                ]}
              ></ProjectCard>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default WebDev;
