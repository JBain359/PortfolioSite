import React, { useEffect } from 'react';
import JoeSplashPic from './assets/JoeSplashPic.png';
import { useGlobalContext } from './context';

const AboutCard = () => {
  const { page, setPage, webColor, pixelColor, gameColor } = useGlobalContext();

  const getDescription = () => {
    switch (page) {
      case 'web':
        return (
          <p>
            Front-end developer working on making modern and functional web apps
            and sites to assist with everyday tasks. Currently utilizing the
            MERN and Jamstack. So, what are we building?
          </p>
        );
        break;
      case 'pixel':
        return <p>Pixel Artist</p>;
        break;
      case 'game':
        return <p>Game Developer</p>;
        break;
      default:
        return <p>Regular Person</p>;
    }
  };

  return (
    <>
      <section className="about-card">
        <table>
          <tr>
            <td>
              <article>
                <h2>Joseph Bain</h2>
                {getDescription()}
              </article>
            </td>
            <td>
              <img src={JoeSplashPic} alt="" />
            </td>
          </tr>
        </table>
      </section>
    </>
  );
};

export default AboutCard;
