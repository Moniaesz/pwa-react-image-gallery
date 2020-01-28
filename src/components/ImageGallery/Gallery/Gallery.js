import React, { useContext } from 'react';
import './Gallery.css';
import SingleImage from '../Gallery/../SingleImage/SingleImage';
import { ImagesContext } from '../../../contexts/ImagesContext';

function Gallery () {

  const { images, loadSampleImages, selectedCategory, deleteImage, updateImageDescription } = useContext(ImagesContext);

  let showingImages;

  if (selectedCategory === 'all') {
    showingImages = images;
  } else {
    showingImages = images.filter((image) => (
      image.category === selectedCategory
    ))
  }

  return (
    <section className='gallery-section'>

      {
        images.length === 0
        ? <button
            className='btn btn-sample-images'
            onClick={loadSampleImages}
          >
            Load sample images
          </button>
        : null
      }

      <ul
        className='images__list'
        style={{background: images.length !== 0 ? '#f5f5f5' : 'none' }}
      >
        {
          showingImages.map((image) => (
            <SingleImage
              key={image.id}
              image={image}
              deleteImage={deleteImage}
              updateImageDescription={updateImageDescription}
            />
          ))
        }

      </ul>
    </section>
  )
}

export default Gallery;