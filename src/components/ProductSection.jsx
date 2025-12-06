import './ProductSection.css';

function ProductSection({ id, title, ctaLabel, products, variant = 'default' }) {
  return (
    <section
      id={id}
      className={`product-section product-section--${variant}`}
    >
      <div className="product-section-header">
        <h2>{title}</h2>
        {ctaLabel && (
          <button className="product-section-link">
            {ctaLabel}
          </button>
        )}
      </div>

      <div className="product-section-grid">
        {products.map((p) => (
          <article key={p.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={p.image} alt={p.name} />
            </div>

            <div className="product-body">
              <div className="product-rating">★★★★★</div>
              <h3 className="product-name">{p.name}</h3>

              <div className="product-prices">
                <span className="product-price-actual">
                  {p.price.toFixed(2)}€
                </span>
                {p.oldPrice && (
                  <span className="product-price-old">
                    {p.oldPrice.toFixed(2)}€
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
