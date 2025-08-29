// src/app/all-products/page.tsx
import ProductGrid from '@/components/ProductGrid';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function AllProductsPage() {
  const products = await getProducts();

  // Group products by category
  const grouped = products.reduce((acc: Record<string, Product[]>, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Products by Category</h1>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 capitalize">{category}</h2>
          <ProductGrid products={items} />
        </div>
      ))}
    </div>
  );
}
