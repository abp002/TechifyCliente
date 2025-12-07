// src/components/ProductsPage.jsx
import './ProductsPage.css';
import ProductSection from './ProductSection';

function ProductsPage({
  title,
  subtitle,
  products,
  quickFilters,
  sortOptions,
  filtersConfig,
}) {
  const safeProducts = Array.isArray(products) ? products : [];
  const safeQuickFilters = Array.isArray(quickFilters) ? quickFilters : [];
  const safeSortOptions = Array.isArray(sortOptions)
    ? sortOptions
    : ['Relevancia', 'Precio más bajo', 'Precio más alto', 'Más vendidos', 'Oferta'];

  const {
    brands = [],
    storage = [],
    ram = [],
    camera = [],
    os = [],
    colors = [],
    inches = [],
  } = filtersConfig || {};

  return (
    <div className="products-page">
      {/* Top header: full width, above filters */}
      <header className="products-page-top">
        <div className="products-top-inner">
          <div className="products-top-text">
            <h1 className="products-title">{title}</h1>
            {subtitle && <p className="products-subtitle">{subtitle}</p>}
          </div>

          <div className="products-top-quick">
            <div className="quick-filters-row">
              {safeQuickFilters.map((f) => (
                <button key={f.id} className="quick-filter">
                  <div className="quick-filter-icon">
                    <img src={f.image} alt={f.label} />
                  </div>
                  <span className="quick-filter-label">{f.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured products removed: list now shows only the main products */}
      </header>

      {/* Content area: filters on the left, main content on the right */}
      <div className="products-content">
        <aside className="products-filters">
          <div className="filters-header">
            <h3>Filtros</h3>
            <button className="clear-btn">Limpiar</button>
          </div>

          <div className="filter-block">
            <div className="filter-label">Precio</div>
            <div className="price-range">
              <input type="range" min="0" max="3000" />
              <div className="price-inputs">
                <input type="number" defaultValue={0} />
                <span>—</span>
                <input type="number" defaultValue={3000} />
              </div>
            </div>
          </div>

          {brands.length > 0 && (
            <div className="filter-block">
              <div className="filter-label">Marcas</div>
              {brands.map((b) => (
                <label key={b} className="filter-checkbox">
                  <input type="checkbox" /> {b}
                </label>
              ))}
            </div>
          )}

          {storage.length > 0 && (
            <div className="filter-block">
              <div className="filter-label">Almacenamiento</div>
              {storage.map((s) => (
                <label key={s} className="filter-checkbox">
                  <input type="checkbox" /> {s}
                </label>
              ))}
            </div>
          )}

          {ram.length > 0 && (
            <div className="filter-block">
              <div className="filter-label">Memoria RAM</div>
              {ram.map((r) => (
                <label key={r} className="filter-checkbox">
                  <input type="checkbox" /> {r}
                </label>
              ))}
            </div>
          )}

          {camera.length > 0 && (
            <div className="filter-block">
              <div className="filter-label">Cámara</div>
              {camera.map((c) => (
                <label key={c} className="filter-checkbox">
                  <input type="checkbox" /> {c}
                </label>
              ))}
            </div>
          )}

          {os.length > 0 && (
            <div className="filter-block">
              <div className="filter-label">Sistema operativo</div>
              {os.map((o) => (
                <label key={o} className="filter-checkbox">
                  <input type="checkbox" /> {o}
                </label>
              ))}
            </div>
          )}

          {colors.length > 0 && (
            <div className="filter-block">
              <div className="filter-label">Color</div>
              {colors.map((c) => (
                <label key={c} className="filter-checkbox">
                  <input type="checkbox" /> {c}
                </label>
              ))}
            </div>
          )}

          {inches.length > 0 && (
            <div className="filter-block">
              <div className="filter-label">Pulgadas</div>
              {inches.map((i) => (
                <label key={i} className="filter-checkbox">
                  <input type="checkbox" /> {i}
                </label>
              ))}
            </div>
          )}
        </aside>

        <main className="products-main">
          <div className="sorting-row">
            <span className="results-count">{safeProducts.length} resultados</span>

            <div className="sorting-buttons">
              {safeSortOptions.map((opt, index) => (
                <button
                  key={opt}
                  className={
                    index === 0
                      ? 'sorting-btn sorting-btn--active'
                      : 'sorting-btn'
                  }
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <ProductSection id="products-list" title={null} ctaLabel={null} products={safeProducts} />
        </main>
      </div>
    </div>
  );
}

export default ProductsPage;
