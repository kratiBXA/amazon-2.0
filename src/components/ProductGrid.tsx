'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <>
      <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        .card {
          border: 1px solid #ddd;
          border-radius: 12px;
          box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: white;
          transition: box-shadow 0.3s ease;
          height: 100%;
        }
        .card:hover {
          box-shadow: 0 6px 18px rgb(0 0 0 / 0.2);
        }
        .card a {
          color: inherit;
          text-decoration: none;
          flex-grow: 1;
          padding: 16px;
          display: flex;
          flex-direction: column;
        }
        .image-wrapper {
          flex-shrink: 0;
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-wrapper img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }
        .title {
          font-weight: 600;
          margin: 12px 0 8px;
          flex-grow: 1;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
        .price {
          color: #555;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .btn-add {
          background-color: #000;
          color: #fff;
          border: none;
          padding: 12px 0;
          font-size: 1rem;
          cursor: pointer;
          width: 100%;
          border-radius: 0 0 12px 12px;
          transition: background-color 0.3s ease;
        }
        .btn-add:hover {
          background-color: #333;
        }
      `}</style>

      <div className="grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <Link href={`/product/${product.id}`}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>
              <h2 className="title">{product.title}</h2>
              <p className="price">${product.price.toFixed(2)}</p>
            </Link>
            <button className="btn-add">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
