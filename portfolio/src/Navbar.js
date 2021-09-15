import React from 'react';
import { useGlobalContext } from './context';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const { page, setPage, webColor, pixelColor, gameColor, goToPixel, goToWeb } =
    useGlobalContext();

  return (
    <nav>
      <ul className="center">
        {/* <li>
          <button
            style={{
              padding: '10px',
              borderBottom: ' 3px #2CFF7A',
              borderStyle: 'solid',
            }}
          >
            Joseph Bain
          </button>
        </li> */}
        <li>
          <button
            className="web-dev-btn"
            style={{
              background: page === 'web' && webColor,
              animation: page === 'web' && 'none',
              color: page === 'web' && '#fff',
            }}
            onClick={page === 'web' || goToWeb}
          >
            Web Dev Portfolio
          </button>
        </li>
        <li>
          <button
            className="pixel-art-btn"
            style={{
              background: page === 'pixel' && pixelColor,
              animation: page === 'pixel' && 'none',
              color: page === 'pixel' && '#fff',
            }}
            onClick={page === 'pixel' || goToPixel}
          >
            Pixel Art Portfolio
          </button>
        </li>
        <li>
          <a href="https://haywirejo.itch.io/" target="_blank">
            <button
              className="game-dev-btn"
              style={{
                background: page === 'game' && gameColor,
                animation: page === 'game' && 'none',
                color: page === 'game' && '#fff',
              }}
            >
              Game Dev Portfolio
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
