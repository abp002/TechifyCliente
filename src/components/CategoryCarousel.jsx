import { useRef } from 'react';
import './CategoryCarousel.css';

const CATEGORIES = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg',
  },
  {
    id: 'tablets',
    name: 'Tablets',
    image: 'https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg',
  },
  {
    id: 'laptops',
    name: 'Portátiles',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
  },
  {
    id: 'desktops',
    name: 'Ordenadores',
    image: 'https://images.pexels.com/photos/1714203/pexels-photo-1714203.jpeg',
  },
  {
    id: 'monitors',
    name: 'Pantallas',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
  },
  {
    id: 'peripherals',
    name: 'Periféricos',
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg',
  },
  {
    id: 'audio',
    name: 'Audio',
    image: 'https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg',
  },
  {
    id: 'drones',
    name: 'Drones',
    image: 'https://images.pexels.com/photos/1306699/pexels-photo-1306699.jpeg',
  },
  {
    id: 'smart-devices',
    name: 'Smart Devices',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
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
              <button key={cat.id} className="category-item">
                <div className="category-circle">
                  <img src={cat.image} alt={cat.name} />
                </div>
                <span className="category-label">{cat.name}</span>
              </button>
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
