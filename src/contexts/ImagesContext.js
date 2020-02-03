import React, { createContext, useState } from 'react';
import sampleImages from '../sampleImages';

export const ImagesContext = createContext();

const ImagesContextProvider = (props) => {

  const [ images, setImages ] = useState([]);
  const [ selectedCategory, setSelectedCategory ] = useState('all');
  const [ currentImage, setCurrentImage ] = useState(images[0]);
  const [ currentImageID, setCurrentImageID ] = useState(0);

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
    setSelectedCategory(selectedCategory);
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
    setCurrentImageID(currentImageID);
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

