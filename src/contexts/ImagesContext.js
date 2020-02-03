import React, { createContext, useState } from 'react';
import sampleImages from '../sampleImages';
import { generateRandomID } from '../helpers/generateID';

export const ImagesContext = createContext();

const ImagesContextProvider = (props) => {

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
  const [ currentImage, setCurrentImage ] = useState(images[0]);
  const [ currentImageID, setCurrentImageID ] = useState(0)

  const loadSampleImages = () => {
    setImages(sampleImages);
  }

   // go to next image in image gallery
   const nextImage = () => {
     let nextImageID = images.indexOf(currentImage) + 1;
     if (nextImageID === images.length) {
       nextImageID = 0;
     }
     const nextImage = images[nextImageID];
     setCurrentImage(nextImage);
  }

  // go to previous image in image gallery
  const previousImage = () => {
    let previousImageID = images.indexOf(currentImage) - 1;
    if (previousImageID === -1 ) {
      previousImageID = images.length - 1;
    }
    const previousImage = images[previousImageID];
    setCurrentImage(previousImage);
  }

  // filter images in Gallery
  const filterImages = (selectedCategory) => {
    setSelectedCategory(selectedCategory)
  }

  // add image to Gallery & Slider
  const addImage = (image) => {
    setImages(images.concat(image));
  }

  // add image to Gallery & Slider
  const deleteImage = (id) => {
    const clickedImage = images.find((image) => image.id === id)
    let currentImageID = images.indexOf(clickedImage) - 1;
    if(currentImageID === -1) {
      currentImageID = 0;
    }
    setImages(images.filter((image) => (
      image.id !== id
    )));
    setCurrentImageID(currentImageID)
  }

  // add image description in Gallery & Slider
  const updateImageDescription = (desc, id) => {
    const imageToUpdate = images.find((image) => image.id === id);
    imageToUpdate['description'] = desc;
    const imageID = images.indexOf(imageToUpdate);
    let updatedImages = [...images];
    updatedImages[imageID] = imageToUpdate;
    setImages(updatedImages);
  }

  return (
    <ImagesContext.Provider
      value={{
        images,
        setImages,
        currentImage,
        setCurrentImage,
        currentImageID,
        selectedCategory,
        nextImage,
        previousImage,
        loadSampleImages,
        addImage,
        filterImages,
        deleteImage,
        updateImageDescription}}
      >
        {props.children}
    </ImagesContext.Provider>
  );
}

export default ImagesContextProvider;

