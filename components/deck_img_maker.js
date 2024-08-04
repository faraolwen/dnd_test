import React from 'react';
import ImageGrid from '../components/ImageGrid';

export default function Deck_img_maker() {
    const imageUrls = [
        'https://cards.scryfall.io/large/front/b/c/bc7cbe9b-324e-42b8-94e2-36e91cb32163.jpg',
        'https://cards.scryfall.io/large/front/8/2/827ecc44-0b00-4515-8953-bc91fa03705a.jpg',
        'https://cards.scryfall.io/large/front/8/2/827ecc44-0b00-4515-8953-bc91fa03705a.jpg',
        'https://cards.scryfall.io/large/front/8/2/827ecc44-0b00-4515-8953-bc91fa03705a.jpg',
        'https://cards.scryfall.io/large/front/b/c/bc7cbe9b-324e-42b8-94e2-36e91cb32163.jpg',
        'https://cards.scryfall.io/large/front/b/c/bc7cbe9b-324e-42b8-94e2-36e91cb32163.jpg',
        'https://cards.scryfall.io/large/front/e/8/e82e61d1-488d-4627-a54c-d8496a967814.jpg',
        'https://cards.scryfall.io/large/front/e/8/e82e61d1-488d-4627-a54c-d8496a967814.jpg',
        'https://cards.scryfall.io/large/front/e/8/e82e61d1-488d-4627-a54c-d8496a967814.jpg',
        'https://cards.scryfall.io/large/front/e/8/e82e61d1-488d-4627-a54c-d8496a967814.jpg',
        'https://cards.scryfall.io/large/front/e/8/e82e61d1-488d-4627-a54c-d8496a967814.jpg',
        'https://cards.scryfall.io/large/front/8/2/827ecc44-0b00-4515-8953-bc91fa03705a.jpg',
      ];
    
    return (
        <>
        <ImageGrid imageUrls={imageUrls} />
        </>
    )
}