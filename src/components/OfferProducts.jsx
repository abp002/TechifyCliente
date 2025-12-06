import ProductSection from './ProductSection';

const OFFER_PRODUCTS = [
  {
    id: 'charger',
    name: 'Cargador inalámbrico MagSafe',
    image: 'https://images.pexels.com/photos/5082569/pexels-photo-5082569.jpeg',
    price: 55,
    oldPrice: 75,
  },
  {
    id: 'watch',
    name: 'Smartwatch deportivo',
    image: 'https://images.pexels.com/photos/2774068/pexels-photo-2774068.jpeg',
    price: 70,
    oldPrice: 85,
  },
  {
    id: 'headphones',
    name: 'Auriculares inalámbricos Pro',
    image: 'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg',
    price: 55,
    oldPrice: 75,
  },
  {
    id: 'iphone14',
    name: 'iPhone 14 Pro Max',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    price: 999,
    oldPrice: 1099,
  },
  {
    id: 'iphone13',
    name: 'iPhone 13 Blanco',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    price: 110,
    oldPrice: 130,
  },
  {
    id: 'tablet',
    name: 'Tablet Pro 11"',
    image: 'https://images.pexels.com/photos/5081394/pexels-photo-5081394.jpeg',
    price: 499,
    oldPrice: 549,
  },
  {
    id: 'cable',
    name: 'Cable USB-C original',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    price: 19,
    oldPrice: 29,
  },
  {
    id: 'homepod',
    name: 'Altavoz inteligente mini',
    image: 'https://images.pexels.com/photos/5081397/pexels-photo-5081397.jpeg',
    price: 39,
    oldPrice: 60,
  },
];

function OfferProducts() {
  return (
    <ProductSection
      id="offer-products"
      title="Productos en oferta"
      ctaLabel="Ver más ofertas"
      products={OFFER_PRODUCTS}
      variant="offers"
    />
  );
}

export default OfferProducts;
