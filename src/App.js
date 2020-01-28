import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Gallery from './components/ImageGallery/Gallery/Gallery';
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
          <FilterImages />
          <Gallery/>
          <AddImageForm />
        </div>
      </ImagesContextProvider>
    </div>
  );
}

export default App;
