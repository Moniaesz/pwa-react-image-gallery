import React, { useState, useContext } from 'react';
import './SingleImage.css';
import ImageInfo from '../../ImageInfo/ImageInfo';
import EditTextForm from '../EditTextForm/EditTextForm';
import { ImagesContext } from '../../../contexts/ImagesContext';
import offlineIMG from '../../../assets/offlineIMG.jpg';


function SingleImage (props) {
  const { title, src, description, id, category } = props.image;

  const { image } = props;

  const { deleteImage, updateImageDescription, setCurrentImage } = useContext(ImagesContext);

  const [currentDesc, setCurrentDesc] = useState(description);
  const [showEditInput, setShowEditInput] = useState(false);
  const [descriptionInput, setDescriptionInput] = useState("");

  const [ imageSrc, setImageSrc ] = useState(src);

  const handleInputChange = (inputValue) => setDescriptionInput(inputValue)

  const toggleInput = () => {
      showEditInput === false
          ? setShowEditInput(true)
          : setShowEditInput(false);
  };

  const changeDescription = (event, updatedText, id) => {
      event.preventDefault();
      setCurrentDesc(updatedText);
      setDescriptionInput('');
      setShowEditInput(false);
      updateImageDescription(updatedText, id);
  }

  const discardDescriptionChanges = (event) => {
      event.preventDefault();
      setDescriptionInput('');
      setShowEditInput(false);
  }

  return (
    <li className='images__list-item'>
      <div className='single-img_wrapper' onClick={() => setCurrentImage(image)}>
        <ImageInfo
          id={id}
          category={category}
          deleteImage={deleteImage}
        />
        <img
          onError={() => setImageSrc(offlineIMG)}
          src={imageSrc}
          alt={title}
          className='images__single-img'
        />
      </div>
      <h4 className='single-img__description'>{currentDesc}
      </h4>
      <button className='btn btn-toggle-description' onClick={() => toggleInput()}>
          { showEditInput
            ? 'HIDE edit description form'
            : 'SHOW edit description form'
          }
      </button>
      {showEditInput &&
          <EditTextForm
          id={id}
          changeDescription={changeDescription}
          handleInputChange={handleInputChange}
          descriptionInput={descriptionInput}
          discardDescriptionChanges={discardDescriptionChanges}
          />
        }
  </li>
  )
}

export default SingleImage;