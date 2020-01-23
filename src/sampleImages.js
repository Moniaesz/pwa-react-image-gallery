export const generateRandomID = function () {
  return '_' + Math.random().toString(36).substr(1, 8);
};

const sampleImages = [
  {
    id: generateRandomID(),
    title: "Image1",
    src: "/images/gallery-photos/photo1.jpg",
    description: "Cupcake ipsum dolor sit amet carrot cake tootsie roll. Jujubes sesame snaps jujubes. Wafer cake biscuit ice cream. Pudding icing chocolate croissant donut. Bonbon cake cake apple pie jelly beans soufflé cupcake pastry. Carrot cake candy canes chupa chups sweet roll cupcake. Toffee cotton candy pastry sugar plum ice cream ice cream. Jujubes cookie chocolate pudding.",
    category: 'landscape'
  },
  {
    id: generateRandomID(),
    title: "Image2",
    src: "/images/gallery-photos/photo2.jpg",
    description: "Cupcake ipsum dolor sit amet carrot cake tootsie roll. Jujubes sesame snaps jujubes. Wafer cake biscuit ice cream. Pudding icing chocolate croissant donut. Bonbon cake cake apple pie jelly beans soufflé cupcake pastry. Carrot cake candy canes chupa chups sweet roll cupcake. Toffee cotton candy pastry sugar plum ice cream ice cream. Jujubes cookie chocolate pudding.",
    category: 'people'
  },
  {
    id: generateRandomID(),
    title: "Image3",
    src: "/images/gallery-photos/photo3.jpg",
    description: "Cupcake ipsum dolor sit amet carrot cake tootsie roll. Jujubes sesame snaps jujubes. Wafer cake biscuit ice cream. Pudding icing chocolate croissant donut. Bonbon cake cake apple pie jelly beans soufflé cupcake pastry. Carrot cake candy canes chupa chups sweet roll cupcake. Toffee cotton candy pastry sugar plum ice cream ice cream. Jujubes cookie chocolate pudding.",
    category: 'landscape'
  },
  {
    id: generateRandomID(),
    title: "Image4",
    src: "/images/gallery-photos/photo4.jpg",
    description: "Cupcake ipsum dolor sit amet carrot cake tootsie roll. Jujubes sesame snaps jujubes. Wafer cake biscuit ice cream. Pudding icing chocolate croissant donut. Bonbon cake cake apple pie jelly beans soufflé cupcake pastry. Carrot cake candy canes chupa chups sweet roll cupcake. Toffee cotton candy pastry sugar plum ice cream ice cream. Jujubes cookie chocolate pudding.",
    category: 'cities'
  },
  {
    id: generateRandomID(),
    title: "Image5",
    src: "/images/gallery-photos/photo5.jpg",
    description: "Cupcake ipsum dolor sit amet carrot cake tootsie roll. Jujubes sesame snaps jujubes. Wafer cake biscuit ice cream. Pudding icing chocolate croissant donut. Bonbon cake cake apple pie jelly beans soufflé cupcake pastry. Carrot cake candy canes chupa chups sweet roll cupcake. Toffee cotton candy pastry sugar plum ice cream ice cream. Jujubes cookie chocolate pudding.",
    category: 'people'
  },
  {
    id: generateRandomID(),
    title: "Image6",
    src: "/images/gallery-photos/photo6.jpg",
    description: "Cupcake ipsum dolor sit amet carrot cake tootsie roll. Jujubes sesame snaps jujubes. Wafer cake biscuit ice cream. Pudding icing chocolate croissant donut. Bonbon cake cake apple pie jelly beans soufflé cupcake pastry. Carrot cake candy canes chupa chups sweet roll cupcake. Toffee cotton candy pastry sugar plum ice cream ice cream. Jujubes cookie chocolate pudding.",
    category: 'landscape'
  },
  {
    id: generateRandomID(),
    title: "Image7",
    src: "/images/gallery-photos/photo7.jpg",
    description: "Cupcake ipsum dolor sit amet carrot cake tootsie roll. Jujubes sesame snaps jujubes. Wafer cake biscuit ice cream. Pudding icing chocolate croissant donut. Bonbon cake cake apple pie jelly beans soufflé cupcake pastry. Carrot cake candy canes chupa chups sweet roll cupcake. Toffee cotton candy pastry sugar plum ice cream ice cream. Jujubes cookie chocolate pudding.",
    category: 'cities'
  },
  {
    id: generateRandomID(),
    title: "Image8",
    src: "/images/gallery-photos/photo8.jpg",
    description: "Cupcake ipsum dolor sit amet carrot cake tootsie roll. Jujubes sesame snaps jujubes. Wafer cake biscuit ice cream. Pudding icing chocolate croissant donut. Bonbon cake cake apple pie jelly beans soufflé cupcake pastry. Carrot cake candy canes chupa chups sweet roll cupcake. Toffee cotton candy pastry sugar plum ice cream ice cream. Jujubes cookie chocolate pudding.",
    category: 'people'
  }
]

export default sampleImages;