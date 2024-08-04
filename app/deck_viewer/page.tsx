"use client";

import Deck_img_maker from '@/components/deck_img_maker'
import Hero from '@/components/hero'
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

export default function Deck_viewer() {
  const divRef = useRef(null);

  const handleCapture = async () => {
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current);
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'capture.png';
      link.click();
    }
  };

  return (
    <>
    <h1>this is a new page</h1>
      <Hero />
      <div ref={divRef}>
        <Deck_img_maker />
      </div>
      <button onClick={handleCapture}>Download as Image</button>

    </>
  )
}
