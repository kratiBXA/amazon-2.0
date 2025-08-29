// src/components/ProductCard.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
interface Product {
  id: string | number;
  title: string;
  image: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border rounded-xl p-4 shadow hover:shadow-md transition">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-48 object-contain mx-auto"
        />
        <div className="mt-4 font-semibold">{product.title}</div>
        <div className="text-gray-600">${product.price}</div>
      </div>
    </Link>
  );
}
