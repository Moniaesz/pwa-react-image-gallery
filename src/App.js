import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Gallery from './components/ImageGallery/Gallery/Gallery';
import sampleImages from './sampleImages';
import FilterImages from './components/FilterImages/FilterImages';
import AddImageForm from './components/AddImageForm/AddImageForm';
import Slider from './components/Slider/Slider/Slider';

const generateRandomID = function () {
  return '_' + Math.random().toString(36).substr(1, 8);
};

function App() {

  // const [ images, setImages ] = useState([]);

  // images state for styling & development purposes
  const [ images, setImages ] = useState([
    {
      id: generateRandomID(),
      title: "Image1",
      src: "/images/gallery-photos/photo1.jpg",
      description: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
      category: 'landscape'
    },
    {
      id: generateRandomID(),
      title: "Image2",
      src: "/images/gallery-photos/photo2.jpg",
      description: "The world is a book and those who do not travel read only one page.",
      category: 'people'
    },
    {
      id: generateRandomID(),
      title: "Image3",
      src: "/images/gallery-photos/photo3.jpg",
      description: "Not all those who wander are lost.",
      category: 'landscape'
    },
    {
      id: generateRandomID(),
      title: "Image4",
      src: "/images/gallery-photos/photo4.jpg",
      description: "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
      category: 'cities'
    },
    {
      id: generateRandomID(),
      title: "Image5",
      src: "/images/gallery-photos/photo5.jpg",
      description: "Travel is the only thing you buy that makes you richer.",
      category: 'people'
    },
    {
      id: generateRandomID(),
      title: "Image6",
      src: "/images/gallery-photos/photo6.jpg",
      description: "Like all great travelers, I have seen more than I remember, and remember more than I have seen.",
      category: 'landscape'
    },
    {
      id: generateRandomID(),
      title: "Image7",
      src: "/images/gallery-photos/photo7.jpg",
      description: "Travel makes a wise man better but a fool worse...",
      category: 'cities'
    },
    {
      id: generateRandomID(),
      title: "Image8",
      src: "/images/gallery-photos/photo8.jpg",
      description: "The traveler sees what he sees. The tourist sees what he has come to see.",
      category: 'people'
    }
  ]);
  const [ selectedCategory, setSelectedCategory ] = useState('all');
  const [ translateValue, setTranslateValue ] = useState(0);
  const [ count, setCount ] = useState(0)

  const loadSampleImages = () => {
    setImages(sampleImages);
  }

   // go to next image in image gallery
   const nextImage = () => {
    if (count === images.length - 1) {
      setTranslateValue(0)
      setCount(0)
    } else {
      setTranslateValue((translateValue) => translateValue + 1000);
      setCount((count) => count + 1)
    }
  }

  // go to previous image in image gallery
  const previousImage = () => {
    if (translateValue === 0 && count === 0) {
      setTranslateValue((images.length - 1) * 1000);
      setCount(images.length - 1)
    } else {
      setTranslateValue((translateValue) => translateValue - 1000)
      setCount((count) => count - 1)
    }
  }

  const filterImages = (selectedCategory) => {
    setSelectedCategory(selectedCategory)
  }

  const addImage = (image) => {
    let updatedImages = [...images];
    updatedImages.push(image);
    console.log(`updatedImages ${JSON.stringify(updatedImages)}`)
    setImages(updatedImages);
  }

  const deleteImage = (id) => {
    console.log('prep to go!')
    let updatedImages = [...images];
    const filteredImages = updatedImages.filter((image) => (
      image.id !== id
    ));
    setImages(filteredImages);
  }

  const updateImageDescription = (desc, id) => {
    const imageToUpdate = images.find((image) => image.id === id);
    imageToUpdate['description'] = desc;
    const imageID = images.indexOf(imageToUpdate);
    let updatedImages = [...images];
    updatedImages[imageID] = imageToUpdate;
    setImages(updatedImages);
  }

  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Slider
          images={images}
          translateValue={translateValue}
          nextImage={nextImage}
          previousImage={previousImage}
          deleteImage={deleteImage}
        />
        <FilterImages
          selectedCategory={selectedCategory}
          filterImages={filterImages}
        />
        <Gallery
          images={images}
          loadSampleImages={loadSampleImages}
          selectedCategory={selectedCategory}
          deleteImage={deleteImage}
          updateImageDescription={updateImageDescription}
        />
        <AddImageForm addImage={addImage}/>
      </div>
    </div>
  );
}

export default App;
