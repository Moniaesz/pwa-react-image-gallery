import React from 'react';
import './SingleImage.css';
import ImageInfo from '../../ImageInfo/ImageInfo';

function SingleImage (props) {
  const {title, src, description, id, category } = props.image;
  const { deleteImage } = props;

  return (
    <li className='images__list-item'>
      <div className='single-img_wrapper'>
        <ImageInfo
          id={id}
          category={category}
          deleteImage={deleteImage}
        />
        <img
          src={src}
          alt={title}
          className='images__single-img'
        />
      </div>
      <h4 className='single-img__description'>{description}
      </h4>

  </li>
  )
}

export default SingleImage;