import React, { useContext, useEffect } from 'react';
import './Slider.css';
import SliderNav from '../SliderNav/SliderNav';
import SliderImage from '../SliderImage/SliderImage';
import { ImagesContext } from '../../../contexts/ImagesContext';

function Slider () {

  const { images, nextImage, previousImage, deleteImage, currentImage, setCurrentImage, currentImageID } = useContext(ImagesContext);

  useEffect(() => {
    setCurrentImage(images[currentImageID]);
  }, [images, setCurrentImage, currentImageID])

  return (
    <section className='slider-section'>
      <SliderNav
        nextImage={nextImage}
        previousImage={previousImage}
      />
      <ul className='slider-images__list'>
        <div className='slider-images__wrapper'>
          {
            currentImage && (
              <SliderImage
                key={currentImage.id}
                image={currentImage}
                deleteImage={deleteImage}
              />
            )
          }
        </div>
      </ul>
    </section>
  )
}

export default Slider;