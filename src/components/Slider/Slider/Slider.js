import React, { useContext } from 'react';
import './Slider.css';
import SliderNav from '../SliderNav/SliderNav';
import SliderImage from '../SliderImage/SliderImage';
import { ImagesContext } from '../../../contexts/ImagesContext';

function Slider () {

  const { images, nextImage, previousImage, translateValue, deleteImage } = useContext(ImagesContext);

  return (
    <section className='slider-section'>
      <SliderNav
        nextImage={nextImage}
        previousImage={previousImage}
      />
      <ul className='slider-images__list'>
        <div className='slider-images__wrapper'>
          {
            images.map((image) => (
            <SliderImage
              key={image.id}
              image={image}
              translateValue={translateValue}
              deleteImage={deleteImage}
            />
          ))}
        </div>
      </ul>
    </section>
  )
}

export default Slider;