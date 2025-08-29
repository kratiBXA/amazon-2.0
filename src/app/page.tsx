import Carousel from '@/components/carousel';
import ProductCard from '@/components/ProductCard';
interface Product {
  id: string | number;
  title: string;
  image: string;
  price: number;
}

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div>
      <Carousel />

      <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
        Welcome to My E-commerce Store
      </h1>

      <div className="product-grid">
        {products.slice(0, 6).map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
