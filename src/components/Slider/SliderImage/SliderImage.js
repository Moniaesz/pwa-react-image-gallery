import React from 'react';
import './SliderImage.css';

function SliderImage (props) {
  const { title, src, description } = props.image;
  const { translateValue } = props;

  return (
    <div
      className='slider-image__container'
      style={{transform: `translate(-${translateValue}px)`}}
    >
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