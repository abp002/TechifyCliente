import { useState, useEffect } from 'react';
import ProductsPage from '../components/ProductsPage';
import { getOrdenadores } from '../services/productService';

const ORDENADORES_FILTERS = {
  brands: ['HP', 'Lenovo', 'Asus', 'Acer', 'MSI'],
  storage: ['256GB', '512GB', '1TB', '2TB'],
  ram: ['8GB', '16GB', '32GB'],
  os: ['Windows', 'Linux'],
  inches: ['< 23"', '23" - 27"', '> 27"'], // si metes monitores o AIOs
};

const ORDENADORES_QUICK_FILTERS = [
  { id: 'oficina', label: 'PC de oficina', image: '/img/quick/seleccion.svg' },
  { id: 'gaming', label: 'PC gaming', image: '/img/quick/ofertas.svg' },
  { id: 'all-in-one', label: 'All-in-One', image: '/img/quick/novedades.svg' },
  { id: 'compactos', label: 'PC compactos', image: '/img/quick/menos-300.svg' },
];

function OrdenadoresPage({ products: propProducts }) {
  const [products, setProducts] = useState(propProducts || []);
  const [loading, setLoading] = useState(!propProducts);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (propProducts) {
      setLoading(false);
      return;
    }

    const fetchOrdenadores = async () => {
      try {
        setLoading(true);
        const data = await getOrdenadores();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch ordenadores:', err);
        setError('No se pudieron cargar los ordenadores. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrdenadores();
  }, [propProducts]);

  if (loading) {
    return <div className="p-8 text-center">Cargando ordenadores...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  return (
    <ProductsPage
      title="Ordenadores"
      subtitle="Sobremesas para oficina, estudio y gaming: elige el PC que mejor se adapta a ti."
      products={products}
      filtersConfig={ORDENADORES_FILTERS}
      quickFilters={ORDENADORES_QUICK_FILTERS}
    />
  );
}

export default OrdenadoresPage;
