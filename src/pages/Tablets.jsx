// src/pages/TabletsPage.jsx
import { useState, useEffect } from 'react';
import ProductsPage from '../components/ProductsPage';
import { getTablets } from '../services/productService';

const TABLET_FILTERS = {
  brands: ['Apple', 'Samsung', 'Xiaomi', 'Lenovo'],
  storage: ['64GB', '128GB', '256GB', '512GB'],
  ram: ['4GB', '6GB', '8GB', '12GB'],
  os: ['iPadOS', 'Android', 'Windows'],
  inches: ['< 8"', '8" - 10,5"', '10,5" - 12"', '> 12"'],
  colors: ['Negro', 'Blanco', 'Gris', 'Azul'],
};

const TABLET_QUICK_FILTERS = [
  { id: 'menos-300', label: 'Menos de 300€', image: '/img/quick/menos-300.svg' },
  { id: 'nuestra-seleccion', label: 'Nuestra selección', image: '/img/quick/seleccion.svg' },
  { id: 'ofertas', label: 'Ofertas', image: '/img/quick/ofertas.svg' },
  { id: 'novedades', label: 'Novedades', image: '/img/quick/novedades.svg' },
];

function TabletsPage({ products: propProducts }) {
  const [products, setProducts] = useState(propProducts || []);
  const [loading, setLoading] = useState(!propProducts);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (propProducts) {
      setLoading(false);
      return;
    }

    const fetchTablets = async () => {
      try {
        setLoading(true);
        const data = await getTablets();
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch tablets:', err);
        setError('No se pudieron cargar las tablets. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchTablets();
  }, [propProducts]);

  if (loading) {
    return <div className="p-8 text-center">Cargando tablets...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600">{error}</div>;
  }

  return (
    <ProductsPage
      title="Tablets"
      subtitle="Tablets para estudiar, trabajar o disfrutar del ocio: desde modelos básicos hasta los más potentes."
      products={products}
      filtersConfig={TABLET_FILTERS}
      quickFilters={TABLET_QUICK_FILTERS}
    />
  );
}

export default TabletsPage;
