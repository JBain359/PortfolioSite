import React from 'react';
import screenshot from './Screenshots/SS1.PNG';
import screenshot2 from './Screenshots/ManekiMancerMockup.png';
import ProjectCard from '../Helpers/ProjectCard';

const GameDev = () => {
  return (
    <>
      <div className="info">
        <section className="game-projects-container">
          <h3>Projects</h3>
          <ul>
            <li>
              <ProjectCard
                class="game-project"
                imgSource={screenshot}
                title="Fort Mortem"
                description="Strategic survival game where you clear each level by coordinating your defense to outlast the enemy's offensive"
                links={[
                  {
                    name: 'Play Now',
                    href: 'https://haywirejo.itch.io/fort-mortem',
                  },
                ]}
              ></ProjectCard>
            </li>
            <li>
              <ProjectCard
                class="game-project"
                imgSource={screenshot2}
                title="Maneki Mancer"
                description="Arcade style platformer where you collect coins and use them to defeat enemies and advance through stages"
                links={[
                  {
                    name: 'In Development',
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
