import React from 'react';
import Deck_img_maker from '@/components/deck_img_maker'
import Hero from '@/components/hero'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Hero />
      <Link href = "deck_viewer">deck viewer</ Link>

    </>
  );
};

export default Home;
