// src/pages/SmartphonesPage.jsx
import ProductsPage from '../components/ProductsPage';

// Sample smartphone products for demonstration
const SAMPLE_SMARTPHONES = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 999,
    originalPrice: 1099,
    image: 'https://via.placeholder.com/250?text=iPhone+15+Pro',
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24',
    price: 899,
    originalPrice: 999,
    image: 'https://via.placeholder.com/250?text=Galaxy+S24',
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 3,
    name: 'Google Pixel 8',
    price: 799,
    originalPrice: 899,
    image: 'https://via.placeholder.com/250?text=Pixel+8',
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Xiaomi 14 Ultra',
    price: 699,
    originalPrice: 799,
    image: 'https://via.placeholder.com/250?text=Xiaomi+14',
    rating: 4.5,
    reviews: 127,
  },
  {
    id: 5,
    name: 'OnePlus 12',
    price: 649,
    originalPrice: 749,
    image: 'https://via.placeholder.com/250?text=OnePlus+12',
    rating: 4.6,
    reviews: 142,
  },
  {
    id: 6,
    name: 'Motorola Edge 50',
    price: 549,
    originalPrice: 649,
    image: 'https://via.placeholder.com/250?text=Motorola+Edge',
    rating: 4.4,
    reviews: 98,
  },
];

const SMARTPHONE_FILTERS = {
  brands: ['Apple', 'Samsung', 'Xiaomi', 'Google'],
  storage: ['64GB', '128GB', '256GB', '512GB'],
  ram: ['4GB', '6GB', '8GB', '12GB'],
  camera: ['12MP', '48MP', '64MP', '108MP'],
  os: ['iOS', 'Android'],
  colors: ['Negro', 'Blanco', 'Azul', 'Rojo'],
  inches: ['< 5,5"', '5,5" - 6,1"', '6,1" - 6,7"', '> 6,7"'],
};

const SMARTPHONE_QUICK_FILTERS = [
  { id: 'menos-300', label: 'Menos de 300€', image: '/img/quick/menos-300.svg' },
  { id: 'nuestra-seleccion', label: 'Nuestra selección', image: '/img/quick/seleccion.svg' },
  { id: 'ofertas', label: 'Ofertas', image: '/img/quick/ofertas.svg' },
  { id: 'novedades', label: 'Novedades', image: '/img/quick/novedades.svg' },
];

function SmartphonesPage({ products }) {
  const allProducts = products && products.length > 0 ? products : SAMPLE_SMARTPHONES;
  const featuredProducts = allProducts.slice(0, 6);

  return (
    <ProductsPage
      title="Smartphones"
      subtitle="Móviles para todos los bolsillos: gama de entrada, gama media, gama alta y reacondicionados."
      products={allProducts}
      featuredProducts={featuredProducts}
      filtersConfig={SMARTPHONE_FILTERS}
      quickFilters={SMARTPHONE_QUICK_FILTERS}
    />
  );
}

export default SmartphonesPage;
