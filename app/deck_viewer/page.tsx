"use client";

import Deck_img_maker from '@/components/deck_img_maker'
import Hero from '@/components/hero'
import React, { useRef } from 'react';

export default function Deck_viewer() {
  const divRef = useRef<HTMLDivElement>();

  const handleDownload = async () => {
    if (divRef.current) {
      // `html2canvas` をクライアントサイドでのみインポート
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(divRef.current);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'screenshot.png';
      link.click();
    } else {
      console.error('divRef is null');
    }
  }
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
