import React from 'react';
import deleteIcon from '../../assets/icons/delete-white.svg';
import './ImageInfo.css';

function ImageInfo ({ category }) {

  return (
    <ul className='image-details'>
      <h2 className='image-category'>
        {category}
      </h2>
      <img
        src={deleteIcon}
        className='delete-icon'
        alt='icon for deleting slide from gallery'
      />
    </ul>
  )
}

export default ImageInfo;