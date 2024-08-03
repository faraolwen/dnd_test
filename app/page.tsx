// pages/index.js
import React from 'react';
import ImageGrid from '../components/ImageGrid';

const Home = () => {
  const imageUrls = [
    'https://cards.scryfall.io/large/front/b/c/bc7cbe9b-324e-42b8-94e2-36e91cb32163.jpg',
    'https://cards.scryfall.io/large/front/8/2/827ecc44-0b00-4515-8953-bc91fa03705a.jpg',
    'https://cards.scryfall.io/large/front/b/c/bc7cbe9b-324e-42b8-94e2-36e91cb32163.jpg',
    'https://cards.scryfall.io/large/front/b/c/bc7cbe9b-324e-42b8-94e2-36e91cb32163.jpg',
  ];

  return (
    <div>
      <h1>Drag and Drop Image Grid</h1>
      <ImageGrid imageUrls={imageUrls} />
    </div>
  );
};

export default Home;
