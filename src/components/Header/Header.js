import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

function Header () {
  return (
    <header className='app-header'>
      <img src={logo} alt='app logo' className='app-logo' />
      <h1>React PHOTO-GALLERY</h1>
    </header>
  );
}

export default Header;