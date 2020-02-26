import React from 'react';
import deleteIcon from '../../assets/icons/delete-white.svg';
import './ImageInfo.css';
import { enterKey } from '../../helpers/keyCodes';

function ImageInfo ({ id, category, deleteImage }) {

  const keyDelete = (e) => {
    if (e.keyCode === enterKey) {
      deleteImage(id);
    }
  }

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
        tabIndex='0'
        onKeyUp={(e) => keyDelete(e)}
      />
    </ul>
  );
}

export default ImageInfo;