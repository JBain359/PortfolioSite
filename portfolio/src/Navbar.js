import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className="center">
        <li>
          <button className="web-dev-btn"> Web Dev Portfolio</button>
        </li>
        <li>
          <a href="https://haywirejo.carrd.co/">
            <button className="pixel-art-btn">Pixel Art Portfolio</button>
          </a>
        </li>
        <li>
          <a href="https://haywirejo.itch.io/">
            <button className="game-dev-btn">Game Dev Portfolio</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
