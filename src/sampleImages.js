import { generateRandomID } from './helpers/generateID';

const sampleImages = [
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
]

export default sampleImages;