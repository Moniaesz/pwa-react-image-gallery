import React from 'react';
import SliderNav from '../SliderNav/SliderNav';

function Slider ({ images }) {

  return (
    <section className='slider-section'>
      <SliderNav/>
      <ul className='slider-images__list'>
      {
        images.map((image) => (
          <li key={image.id}>
            <p>{image.title}</p>
            <img src={image.src} alt={image.title} style={{height: '20rem'}}/>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Slider;