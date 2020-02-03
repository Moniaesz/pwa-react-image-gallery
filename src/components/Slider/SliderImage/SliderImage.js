import React, { useState } from 'react';
import './SliderImage.css';
import ImageInfo from '../../ImageInfo/ImageInfo';
import offlineIMG from '../../../assets/offlineIMG.jpg';

function SliderImage (props) {
  const { title, src, description, id, category } = props.image;
  const { deleteImage } = props;
  const [ imageSrc, setImageSrc ] = useState(src);

  return (
    <div
      className='slider-image__container'
    >
      <h3>{title}</h3>
      <ul className='slider-image__wrapper'>
        <ImageInfo
          id={id}
          category={category}
          deleteImage={deleteImage}
        />
        <img
          onError={() => setImageSrc(offlineIMG)}
          src={imageSrc}
          alt={title}
          className='slider__img'
        />
        <h4 className='single-img__description slider-img__description'>{description}</h4>
      </ul>
  </div>
  );
}

export default SliderImage;