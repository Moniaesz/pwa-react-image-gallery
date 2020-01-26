import React from 'react';
import './SliderImage.css';
import ImageInfo from '../../ImageInfo/ImageInfo';


function SliderImage (props) {
  const { title, src, description, id, category } = props.image;
  const { translateValue, deleteImage } = props;

  return (
    <div
      className='slider-image__container'
      style={{transform: `translate(-${translateValue}px)`}}
    >
      <h3>{title}</h3>
      <ul className='slider-image__wrapper'>
        <ImageInfo id={id} category={category} deleteImage={deleteImage}/>
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