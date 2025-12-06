import ProductSection from './ProductSection';

const LATEST_PRODUCTS = [
  {
    id: 'apple-watch',
    name: 'Apple Watch Ultra',
    image: 'https://images.pexels.com/photos/2774068/pexels-photo-2774068.jpeg',
    price: 799,
    oldPrice: 899,
  },
  {
    id: 'macbook',
    name: 'MacBook Air M2',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    price: 1299,
    oldPrice: 1499,
  },
  {
    id: 'alexa',
    name: 'Amazon Echo Dot',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
    price: 49,
    oldPrice: 69,
  },
  {
    id: 'ps5',
    name: 'PlayStation 5',
    image: 'https://images.pexels.com/photos/9072301/pexels-photo-9072301.jpeg',
    price: 499,
    oldPrice: 549,
  },
];

function LatestProducts() {
  return (
    <ProductSection
      id="latest-products"
      title="Últimos productos"
      ctaLabel="Ver todos"
      products={LATEST_PRODUCTS}
      variant="default"
    />
  );
}

export default LatestProducts;
