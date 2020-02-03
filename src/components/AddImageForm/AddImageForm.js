import React, { useRef, useContext } from 'react';
import { generateRandomID } from '../../helpers/generateID';
import './AddImageForm.css';
import { ImagesContext } from '../../contexts/ImagesContext';

function AddImageForm () {

  const { addImage } = useContext(ImagesContext);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();

  const createImage = (event) => {
    event.preventDefault();

    const image = {
      id: generateRandomID(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
      src: imageRef.current.value ||"/images/gallery-photos/image-placeholder.jpg"
    }

    addImage(image);
    event.currentTarget.reset();
  }

  return (
    <section className='add-image__section'>
      <form onSubmit={createImage}>
        <fieldset className='add-image__form'>
          <legend className='add-image__form__legend'>Add image</legend>
          <input
            name='title'
            type='text'
            placeholder='Title'
            ref={titleRef}
            required
          />
          <input
            name='image'
            placeholder='Image'
            ref={imageRef}
          />
          <textarea
            name='description'
            placeholder='Description'
            ref={descriptionRef}
            className='add-image__descritption'
            required
          />
          <select name='category' ref={categoryRef}>
            <option value='landscape'>Landscape</option>
            <option value='people'>People</option>
            <option value='cities'>Cities</option>
          </select>
          <button type='submit' className='btn btn-add-image'>Add Photo</button>
        </fieldset>
      </form>
    </section>
  );
}

export default AddImageForm;