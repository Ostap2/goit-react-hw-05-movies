import React from 'react';

const Header = () => {
  return (
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
  );
};

export default Header;
