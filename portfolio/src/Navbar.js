import React from 'react';
import { useGlobalContext } from './context';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const { page, setPage, webColor, pixelColor, gameColor, goToPixel, goToWeb } =
    useGlobalContext();

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
    </>
  );
};

export default Navbar;
