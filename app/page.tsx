import React from 'react';
import Hero from '@/components/hero'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Hero />
      <div>
        <Link href = "deck_viewer">deck viewer</ Link>
      </div>
      
      <div>
        <a href = "https://note.com/maddogmtg/">note</a>
      </div>

      <div>
        <a href = "https://x.com/kushiro_mtg">x</a>
      </div>

    </>
  );
};

export default Home;
