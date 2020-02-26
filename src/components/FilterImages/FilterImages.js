import React, { useContext }  from 'react';
import './FilterImages.css';
import { ImagesContext } from '../../contexts/ImagesContext';
import { enterKey } from '../../helpers/keyCodes';

function FilterImages () {

  const { selectedCategory, filterImages } = useContext(ImagesContext);

  const categories = ['landscape', 'people', 'cities', 'all'];

  // key bindings
  const keyFilter = (e, category) => {
    if (e.keyCode === enterKey) {
      filterImages(category);
    }
  }

  return (
    <section className='filter-images__section'>
      <h2 className='filter-images__heading'>Filter by image category</h2>
      <ul className='filter-images__list'>
        {categories.map((category) => (
          <li
            key={category}
            className='filter-images__list-item'
            tabIndex='0'
            onClick={() => filterImages(category)}
            onKeyUp={(e) => keyFilter(e, category)}
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