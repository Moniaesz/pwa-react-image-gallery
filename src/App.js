import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Gallery from './components/ImageGallery/Gallery/Gallery';
import sampleImages from './sampleImages';
import FilterImages from './components/FilterImages/FilterImages';
import AddImageForm from './components/AddImageForm/AddImageForm';
import Slider from './components/Slider/Slider/Slider';
import ImagesContextProvider from './contexts/ImagesContext';

function App() {

  return (
    <div className="App">
      <Header />
      <ImagesContextProvider>
        <div className='main'>
          <Slider />
          {/* <FilterImages
            selectedCategory={selectedCategory}
            filterImages={filterImages}
          /> */}
          <Gallery/>
          {/* <AddImageForm addImage={addImage}/> */}
        </div>
      </ImagesContextProvider>
    </div>
  );
}

export default App;
