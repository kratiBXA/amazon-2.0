'use client';

import { useState, useEffect } from 'react';
import './carousel.css';
// import Image from 'next/image';

const images = [
  '/banner1.jpg',
  '/banner2.jpg',
  '/banner3.jpg',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${index === current ? 'active' : ''}`}
          
        />
      ))}
      <div className="carousel-text">Lets Shop</div>
    </div>
  );
}
