import './FeaturedCategories.css';

const FEATURED = [
  {
    id: 'games',
    title: 'Videojuegos y consolas',
    subtitle: 'PlayStation, Xbox, Nintendo y más',
    image: 'https://images.pexels.com/photos/9072301/pexels-photo-9072301.jpeg',
  },
  {
    id: 'smart-devices',
    title: 'Dispositivos inteligentes',
    subtitle: 'Altavoces, domótica y asistentes',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
  },
  {
    id: 'smartphones',
    title: 'Smartphones',
    subtitle: 'Gama alta, media y accesorios',
    image: 'https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg',
  },
];

function FeaturedCategories() {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Categorías destacadas</h2>
      </div>

      <div className="featured-grid">
        {FEATURED.map((item) => (
          <article key={item.id} className="featured-card">
            <div className="featured-text">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <button className="featured-btn">Ver ahora</button>
            </div>
            <div className="featured-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedCategories;
