
import React, { Suspense } from 'react';
import {Outlet, Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <header className='header'>
      <div className='nav-container'>
        <nav>
          <ul className='list'>
            <li className='item-nav'>
              <Link to="/" className='link-nav'>Home</Link>
            </li >
            <li className='item-nav'>
              <Link to="/movies" className='link-nav'>Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer>Footer</Footer> */}
    </>
  );
};

export default Header;