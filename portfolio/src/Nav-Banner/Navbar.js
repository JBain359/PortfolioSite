import React from 'react';
import { useGlobalContext } from '../context';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { webColor, pixelColor, gameColor, goToPixel, goToWeb, goToGame } =
    useGlobalContext();
  const location = useLocation();

  // The debounce function receives our function as a parameter
  const debounce = (fn) => {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) {
        cancelAnimationFrame(frame);
      }

      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        // Call our function and pass any params we received
        fn(...params);
      });
    };
  };

  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  };

  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });

  // Update scroll position for first time
  storeScroll();

  return (
    <>
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
                background: location.pathname === '/' && webColor,
                animation: location.pathname === '/' && 'none',
                color: location.pathname === '/' && '#fff',
              }}
              onClick={goToWeb}
            >
              Web Dev Portfolio
            </button>
          </li>
          <li>
            <button
              className="pixel-art-btn"
              style={{
                background: location.pathname === '/pixel' && pixelColor,
                animation: location.pathname === '/pixel' && 'none',
                color: location.pathname === '/pixel' && '#fff',
              }}
              onClick={goToPixel}
            >
              Pixel Art Portfolio
            </button>
          </li>
          <li>
            <button
              className="game-dev-btn"
              style={{
                background: location.pathname === '/game' && gameColor,
                animation: location.pathname === '/game' && 'none',
                color: location.pathname === '/game' && '#fff',
              }}
              onClick={goToGame}
            >
              Game Dev Portfolio
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
