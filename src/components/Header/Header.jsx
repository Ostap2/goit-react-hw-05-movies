import React from 'react';
import Outline from './Outline'; // Імпортуйте компонент Outline

const Header = () => {
  return (
    <div>
      <header className='header'>
        <div className='nav-container'>
          <nav>
            <ul className='list'>
              <li className='item-nav'>
                <a href="/" className='link-nav'>Home</a>
              </li >
              <li className='item-nav'>
                <a href="/movies" className='link-nav'>Movies</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outline /> {/* Додайте компонент Outline тут */}
    </div>
  );
};

export default Header;
