import React from 'react';
import deleteIcon from '../../assets/icons/delete-white.svg';
import './ImageInfo.css';

function ImageInfo ({ id, category, deleteImage }) {

  return (
    <ul className='image-details'>
      <h2 className='image-category'>
        {category}
      </h2>
      <img
        src={deleteIcon}
        className='delete-icon'
        alt='icon for deleting slide from gallery'
        onClick={() => deleteImage(id)}
      />
    </ul>
  )
}

export default ImageInfo;