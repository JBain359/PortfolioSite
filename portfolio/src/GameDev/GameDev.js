import React from 'react';
import screenshot from './Screenshots/SS1.PNG';
import ProjectCard from '../Helpers/ProjectCard';

const GameDev = () => {
  return (
    <>
      <div className="info">
        <section className="projects-container">
          <h3>Projects</h3>
          <ul>
            <li>
              <ProjectCard
                class="game-project"
                imgSource={screenshot}
                title="Fort Mortem"
                description="Strategic survival game  where you clear each level by coordinating your defense to outlast the enemy's offensive"
                links={[
                  {
                    name: 'Play Now',
                    href: 'https://haywirejo.itch.io/fort-mortem',
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

export default GameDev;
