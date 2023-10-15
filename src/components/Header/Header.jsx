
import React, { Suspense } from 'react';
import {Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
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