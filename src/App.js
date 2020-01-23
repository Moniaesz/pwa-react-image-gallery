import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Gallery from './components/ImageGallery/Gallery/Gallery';
import sampleImages from './sampleImages';


function App() {

  const [ images, setImages ] = useState([]);

  const loadSampleImages = () => {
    setImages(sampleImages);
  }

  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Gallery
          images={images}
          loadSampleImages={loadSampleImages}
        />
      </div>
    </div>
  );
}

export default App;
