import React from 'react';
import './SliderImage.css';

function SliderImage (props) {
  const { title, src, description } = props.image;

  return (
    <div className='slider-image__container'>
      <h3>{title}</h3>
      <ul className='slider-image__wrapper'>
        <img
          src={src}
          alt={title}
          className='slider__img'
        />
        <h4 className='single-img__description slider-img__description'>{description}</h4>
      </ul>
  </div>
  )
}

export default SliderImage;