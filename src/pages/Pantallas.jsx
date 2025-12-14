import { useState, useEffect } from 'react';
import ProductsPage from '../components/ProductsPage';
import { getPantallas } from '../services/productService';

const PANTALLAS_FILTERS = {
  brands: ['Samsung', 'LG', 'Dell', 'ASUS', 'AOC', 'BenQ', 'MSI', 'HP'],
  resolution: ['Full HD', 'QHD', '4K', 'Ultrawide'],
  hz: ['60Hz', '75Hz', '120Hz', '144Hz', '165Hz', '240Hz'],
  panel: ['IPS', 'VA', 'TN', 'OLED'],
  inches: ['21,5"', '24"', '27"', '32"', '34"', '49"'],
  ports: ['HDMI', 'DisplayPort', 'USB-C', 'USB Hub'],
};

const PANTALLAS_QUICK_FILTERS = [
  { id: 'menos-150', label: 'Menos de 150€', image: '/img/quick/menos-300.svg' },
  { id: 'gaming', label: 'Gaming 144Hz+', image: '/img/quick/ofertas.svg' },
  { id: '4k', label: '4K', image: '/img/quick/novedades.svg' },
  { id: 'ultrawide', label: 'Ultrawide', image: '/img/quick/novedades.svg' },
];

function PantallasPage({ products: propProducts }) {
  const [products, setProducts] = useState(propProducts || []);
  const [loading, setLoading] = useState(!propProducts);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (propProducts) {
      setLoading(false);
      return;
    }

    const fetchPantallas = async () => {
      try {
        setLoading(true);
        const data = await getPantallas();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch monitors:', err);
        setError('No se pudieron cargar las pantallas. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchPantallas();
  }, [propProducts]);

  if (loading) {
    return <div className="p-8 text-center">Cargando pantallas...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  return (
    <ProductsPage
      title="Pantallas"
      subtitle="Monitores para oficina y gaming: IPS, 144Hz+, ultrawide y 4K para productividad y entretenimiento."
      products={products}
      filtersConfig={PANTALLAS_FILTERS}
      quickFilters={PANTALLAS_QUICK_FILTERS}
    />
  );
}

export default PantallasPage;
