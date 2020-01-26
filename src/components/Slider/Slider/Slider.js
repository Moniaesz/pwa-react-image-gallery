import React from 'react';
import './Slider.css';
import SliderNav from '../SliderNav/SliderNav';
import SliderImage from '../SliderImage/SliderImage';

function Slider ({ images, nextImage, previousImage, translateValue, deleteImage }) {

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