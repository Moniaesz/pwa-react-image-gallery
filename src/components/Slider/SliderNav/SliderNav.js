import React from 'react';
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import arrowRight from '../../../assets/icons/arrow-right.svg';
import './SliderNav.css';
import { enterKey, arrowLeftKey, arrowRightKey } from '../../../helpers/keyCodes';

function SliderNav ({ nextImage, previousImage }) {

  // key bindings
  const keyPrev = (e) => {
    if (e.keyCode === enterKey || e.keyCode === arrowLeftKey) {
      previousImage();
    }
  }

  const keyNext = (e) => {
    if (e.keyCode === enterKey || e.keyCode === arrowRightKey) {
      nextImage();
    }
  }

  return (
    <nav className='slider-nav'>
    <ul className='slider-nav__list'>
      <li className='slider-nav__item'>
        <img
          src={arrowLeft}
          alt='arrow left' className='slider-nav__icon arrow-left'
          onClick={previousImage}
          tabIndex='0'
          onKeyUp={(e) => keyPrev(e)}
        />
      </li>
      <li className='slider-nav__item'><h3>Browse images</h3></li>
      <li className='slider-nav__item'>
        <img
          src={arrowRight}
          alt='arrow left' className='slider-nav__icon arrow-right'
          onClick={nextImage}
          tabIndex='0'
          onKeyUp={(e) => keyNext(e)}
        />
      </li>
    </ul>
  </nav>
  );
}

export default SliderNav;