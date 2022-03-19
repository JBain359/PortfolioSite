import React from 'react';
import JoeSplashPic from '../assets/JoeSplashPic.png';
import { useLocation } from 'react-router-dom';

const AboutCard = () => {
  const location = useLocation();

  const getDescription = () => {
    switch (location.pathname) {
      case '/':
        return (
          <>
            <h2>Joseph Bain</h2>
            <p>
              Front-end web developer working on making modern and functional
              web apps and sites to assist with everyday tasks. Making the web
              prettier and more intuitive one interface at a time.
            </p>
          </>
        );
        break;
      case '/pixel':
        return (
          <>
            <h3>HaywireJo</h3>
            <p>
              Hi there! I'm Jo, a pixel artist and illustrator! I have a love
              and passion for pixel game art, so I create some myself. Hope you
              enjoy!
            </p>
          </>
        );
        break;
      case '/game':
        return (
          <>
            <h2>Joseph Bain</h2>
            <p>
              2D Game Developer working on cute and fun games. Working in Unity,
              specializing in game art, programming, and design. Thanks in
              advance for playing my games!
            </p>
          </>
        );
        break;
      default:
        return <p>Regular Person</p>;
    }
  };

  return (
    <>
      <section className="about-card">
        <table>
          <tbody>
            <tr>
              <td>
                <article>{getDescription()}</article>
              </td>
              <td>
                <img src={JoeSplashPic} alt="Joe Splash Pic" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AboutCard;
