import { useState, useEffect } from 'react';
import ProductsPage from '../components/ProductsPage';
import { getPortatiles } from '../services/productService';

const PORTATILES_FILTERS = {
  brands: ['Apple', 'Asus', 'Acer', 'Lenovo', 'HP', 'MSI'],
  storage: ['256GB', '512GB', '1TB', '2TB'],
  ram: ['8GB', '16GB', '32GB'],
  os: ['Windows', 'macOS', 'Linux'],
  inches: ['13"', '14"', '15,6"', '16"+'],
  colors: ['Negro', 'Gris', 'Plata', 'Blanco'],
};

const PORTATILES_QUICK_FILTERS = [
  { id: 'menos-600', label: 'Menos de 600€', image: '/img/quick/menos-300.svg' },
  { id: 'gaming', label: 'Portátiles gaming', image: '/img/quick/ofertas.svg' },
  { id: 'ofertas', label: 'Ofertas', image: '/img/quick/ofertas.svg' },
  { id: 'ultrabook', label: 'Ultrabooks ligeros', image: '/img/quick/novedades.svg' },
];

function PortatilesPage({ products: propProducts }) {
  const [products, setProducts] = useState(propProducts || []);
  const [loading, setLoading] = useState(!propProducts);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (propProducts) {
      setLoading(false);
      return;
    }

    const fetchPortatiles = async () => {
      try {
        setLoading(true);
        const data = await getPortatiles();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch laptops:', err);
        setError('No se pudieron cargar los portátiles. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchPortatiles();
  }, [propProducts]);

  if (loading) {
    return <div className="p-8 text-center">Cargando portátiles...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  return (
    <ProductsPage
      title="Portátiles"
      subtitle="Portátiles para estudiar, trabajar o jugar: ultrabooks ligeros, equipos gaming y modelos profesionales."
      products={products}
      filtersConfig={PORTATILES_FILTERS}
      quickFilters={PORTATILES_QUICK_FILTERS}
    />
  );
}

export default PortatilesPage;
