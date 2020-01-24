import React from 'react';
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import arrowRight from '../../../assets/icons/arrow-right.svg';
import './SliderNav.css';

function SliderNav (s) {

  return (
    <nav className='slider-nav'>
    <ul className='slider-nav__list'>
      <li className='slider-nav__item'>
        <img
          src={arrowLeft}
          alt='arrow left' className='slider-nav__icon arrow-left'
        />
      </li>
      <li className='slider-nav__item'>Browse images</li>
      <li className='slider-nav__item'>
        <img
          src={arrowRight}
          alt='arrow left' className='slider-nav__icon arrow-right'
        />
      </li>
    </ul>
  </nav>
  )
}

export default SliderNav;