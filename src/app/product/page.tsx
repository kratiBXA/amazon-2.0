'use client';
 
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
 
export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      const data: Product[] = await res.json();
      setProducts(data);
      const uniqueCategories = Array.from(new Set(data.map(p => p.category)));
      setCategories(uniqueCategories);
      setLoading(false);
    }
 
    fetchProducts();
  }, []);
 
  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(product => product.category === selectedCategory);
 
  if (loading) return <p>Loading products...</p>;
 
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
 
      <div className="mb-6 space-x-3">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded ${
            selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="border rounded p-4 shadow hover:shadow-md transition block"
          >
            <Image
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-4"
            />
            <h2 className="font-semibold text-lg">{product.title}</h2>
            {/* <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p> */}
            <p className="font-bold">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}