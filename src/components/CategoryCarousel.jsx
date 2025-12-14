import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './CategoryCarousel.css';

const CATEGORIES = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    image: '/img/inicio/category/movil.png',
    path: '/smartphones',
  },
  {
    id: 'tablets',
    name: 'Tablets',
    image: '/img/inicio/category/tablet.png',
    path: '/tablets',
  },
  {
    id: 'laptops',
    name: 'Portátiles',
    image: '/img/inicio/category/portatil.png',
    path: '/portatiles',
  },
  {
    id: 'desktops',
    name: 'Ordenadores',
    image: '/img/inicio/category/pc.png',
    path: '/ordenadores',
  },
  {
    id: 'monitors',
    name: 'Pantallas',
    image: '/img/inicio/category/monitor.png',
    path:'/pantallas',
  },
  {
    id: 'peripherals',
    name: 'Periféricos',
    image: '/img/inicio/category/perifericos.png',
  },
  {
    id: 'audio',
    name: 'Audio',
    image: '/img/inicio/category/auricular.png',
  },
  {
    id: 'drones',
    name: 'Drones',
    image: '/img/inicio/category/dron.png',
  },
  {
    id: 'smart-devices',
    name: 'Smart Devices',
    image: '/img/inicio/category/echo.png',
  },
];

function CategoryCarousel() {
  const trackRef = useRef(null);

  const scrollByAmount = (direction) => {
    if (!trackRef.current) return;
    const amount = direction === 'left' ? -260 : 260;
    trackRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="categories">
      <div className="categories-inner">
        <button
          className="categories-arrow categories-arrow--left"
          onClick={() => scrollByAmount('left')}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div className="categories-track-wrapper">
          <div className="categories-track" ref={trackRef}>
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to={cat.path || '#'} className="category-item">
                <div className="category-circle">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <span className="category-label">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <button
          className="categories-arrow categories-arrow--right"
          onClick={() => scrollByAmount('right')}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default CategoryCarousel;
