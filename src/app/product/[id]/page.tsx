// src/app/product/[id]/page.tsx
import Image from 'next/image';
type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

export default async function ProductPage({ params,}: { params:Promise< { id: string } >}) {
    const{id} = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);


  if (!res.ok) {
    return <div className="p-6 text-red-500">Failed to load product details.</div>;
  }

  const product: Product = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain"
      />
      <h1 className="text-2xl font-bold mt-6">{product.title}</h1>
      <p className="mt-4 text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold mt-4">${product.price}</p>
    </div>
  );
}
