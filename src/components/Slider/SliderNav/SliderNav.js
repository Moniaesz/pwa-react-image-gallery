import React from 'react';
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import arrowRight from '../../../assets/icons/arrow-right.svg';
import './SliderNav.css';

function SliderNav ({ nextImage, previousImage }) {

  return (
    <nav className='slider-nav'>
    <ul className='slider-nav__list'>
      <li className='slider-nav__item'>
        <img
          src={arrowLeft}
          alt='arrow left' className='slider-nav__icon arrow-left'
          onClick={previousImage}
        />
      </li>
      <li className='slider-nav__item'><h3>Browse images</h3></li>
      <li className='slider-nav__item'>
        <img
          src={arrowRight}
          alt='arrow left' className='slider-nav__icon arrow-right'
          onClick={nextImage}
        />
      </li>
    </ul>
  </nav>
  )
}

export default SliderNav;