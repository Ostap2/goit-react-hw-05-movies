import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='nav-container'>
        <nav>
          <ul className='list'>
            <li className='item-nav'>
              <Link to="/" className='link-nav'>Home</Link> 
            </li>
            <li className='item-nav'>
              <Link to="/Movies" className='link-nav'>Movies</Link> 
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
