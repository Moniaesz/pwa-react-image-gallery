import React, { useContext, useEffect } from 'react';
import './Gallery.css';
import SingleImage from '../Gallery/../SingleImage/SingleImage';
import { ImagesContext } from '../../../contexts/ImagesContext';

function Gallery () {

  const { images, setImages, loadSampleImages, selectedCategory } = useContext(ImagesContext);

  let showingImages;

  if (selectedCategory === 'all') {
    showingImages = images;
  } else {
    showingImages = images.filter((image) => (
      image.category === selectedCategory
    ))
  }

  // use images data (if exist) from localStorage
  useEffect(() => {
    const localStorageRef = localStorage.getItem('images');
    if (localStorageRef) {
      setImages(JSON.parse(localStorageRef));
    }
  }, [setImages]);

  // update images data in localStorage
  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(images));
  }, [images]);

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
  );
}

export default Gallery;