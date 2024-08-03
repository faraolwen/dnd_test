"use client";

import Deck_img_maker from '@/components/deck_img_maker'
import Hero from '@/components/hero'
import html2canvas from 'html2canvas';
import React, { useRef } from 'react';

export default function Deck_viewer() {
  const divRef = useRef(null);

  const handleDownload = async () => {
    const canvas = await html2canvas(divRef.current);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'screenshot.png';
    link.click();
  };


  return (
    <>
    <h1>this is a new page</h1>
      <Hero />
      <div ref={divRef}>
        <Deck_img_maker />
      </div>
      <button onClick={handleDownload}>Download as Image</button>

    </>
  )
}
