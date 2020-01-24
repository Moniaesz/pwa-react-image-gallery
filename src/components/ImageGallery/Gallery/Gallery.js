import React from 'react';
import './Gallery.css';
import SingleImage from '../Gallery/../SingleImage/SingleImage';

function Gallery ({ images, loadSampleImages, selectedCategory }) {

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
            />
          ))
        }

      </ul>
    </section>
  )
}

export default Gallery;