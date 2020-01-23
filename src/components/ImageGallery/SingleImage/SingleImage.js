import React from 'react';
import './SingleImage.css';

function SingleImage (props) {
  const {title, src, description } = props.image;

  return (
    <li className='images__list-item'>
      <img
        src={src}
        alt={title}
        className='images__single-img'
      />
      <h4 className='single-img__description'>{description}
      </h4>

  </li>
  )
}

export default SingleImage;