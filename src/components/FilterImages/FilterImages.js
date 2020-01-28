import React, { useContext }  from 'react';
import './FilterImages.css';
import { ImagesContext } from '../../contexts/ImagesContext';

function FilterImages () {

  const { selectedCategory, filterImages } = useContext(ImagesContext);

  const categories = ['landscape', 'people', 'cities', 'all'];

  return (
    <section className='filter-images__section'>
      <h2 className='filter-images__heading'>Filter by image category</h2>
      <ul className='filter-images__list'>
        {categories.map((category) => (
          <li
            key={category}
            className='filter-images__list-item'
            onClick={() => filterImages(category)}
            style={
              category === selectedCategory
              ? {background: 'rgb(235, 121, 14)', color: '#fff'}
              : null
            }
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FilterImages;