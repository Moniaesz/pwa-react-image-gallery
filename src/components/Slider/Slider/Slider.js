import React, { useContext, useEffect } from 'react';
import './Slider.css';
import SliderNav from '../SliderNav/SliderNav';
import SliderImage from '../SliderImage/SliderImage';
import { ImagesContext } from '../../../contexts/ImagesContext';

function Slider () {

  const { images, nextImage, previousImage, deleteImage, currentImage, setCurrentImage } = useContext(ImagesContext);

  useEffect(() => {
    setCurrentImage(images[0])
  }, [images, setCurrentImage])

  return (
    <section className='slider-section'>
      <SliderNav
        nextImage={nextImage}
        previousImage={previousImage}
      />
      <ul className='slider-images__list'>
        <div className='slider-images__wrapper'>
          <SliderImage
            key={currentImage.id}
            image={currentImage}
            deleteImage={deleteImage}
          />
        </div>
      </ul>
    </section>
  )
}

export default Slider;