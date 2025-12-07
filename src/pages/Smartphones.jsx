// src/pages/SmartphonesPage.jsx
import { useState, useEffect } from 'react';
import ProductsPage from '../components/ProductsPage';
import { getSmartphones } from '../services/productService';

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

function SmartphonesPage({ products: propProducts }) {
  const [products, setProducts] = useState(propProducts || []);
  const [loading, setLoading] = useState(!propProducts);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If products are passed via props, don't fetch
    if (propProducts) {
      setLoading(false);
      return;
    }

    const fetchSmartphones = async () => {
      try {
        setLoading(true);
        const data = await getSmartphones();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch smartphones:', err);
        setError('No se pudieron cargar los productos. Por favor, inténtalo de nuevo más tarde.');
        // Fallback or empty state could be handled here
      } finally {
        setLoading(false);
      }
    };

    fetchSmartphones();
  }, [propProducts]);

  if (loading) {
    return <div className="p-8 text-center">Cargando smartphones...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  return (
    <ProductsPage
      title="Smartphones"
      subtitle="Móviles para todos los bolsillos: gama de entrada, gama media, gama alta y reacondicionados."
      products={products}
      filtersConfig={SMARTPHONE_FILTERS}
      quickFilters={SMARTPHONE_QUICK_FILTERS}
    />
  );
}

export default SmartphonesPage;
