import React from 'react';
import './Slider.css';
import SliderNav from '../SliderNav/SliderNav';
import SliderImage from '../SliderImage/SliderImage';

function Slider ({ images }) {

  return (
    <section className='slider-section'>
      <SliderNav/>
      <ul className='slider-images__list'>
        <div className='slider-images__wrapper'>
          {
            images.map((image) => (
            <SliderImage
              key={image.id}
              image={image}
            />
          ))}
        </div>
      </ul>
    </section>
  )
}

export default Slider;