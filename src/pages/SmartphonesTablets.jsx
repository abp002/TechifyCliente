import './SmartphonesTablets.css'
import CategoryCard from '../components/CategoryCard'
import ProductSection from '../components/ProductSection'
import TabbedProductCarousel from '../components/TabbedProductCarousel'

function SmartphonesTablets() {
  const topSmartphones = [
    {
      id: 1,
      name: 'Samsung Galaxy S23',
      price: 899,
      oldPrice: 999,
      image: 'https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg'
    },
    {
      id: 2,
      name: 'iPhone 14 Pro',
      price: 1199,
      oldPrice: null,
      image: 'https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 12',
      price: 249,
      oldPrice: 299,
      image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg'
    },
    {
      id: 4,
      name: 'Google Pixel 7',
      price: 649,
      oldPrice: null,
      image: 'https://images.pexels.com/photos/5081394/pexels-photo-5081394.jpeg'
    }
  ]

  const topTablets = [
    {
      id: 1,
      name: 'iPad Air',
      price: 649,
      oldPrice: null,
      image: 'https://images.pexels.com/photos/5081396/pexels-photo-5081396.jpeg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy Tab S8',
      price: 799,
      oldPrice: 899,
      image: 'https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg'
    },
    {
      id: 3,
      name: 'Xiaomi Pad 5',
      price: 349,
      oldPrice: 399,
      image: 'https://images.pexels.com/photos/5081388/pexels-photo-5081388.jpeg'
    },
    {
      id: 4,
      name: 'Lenovo Tab P11',
      price: 299,
      oldPrice: null,
      image: 'https://images.pexels.com/photos/5081389/pexels-photo-5081389.jpeg'
    }
  ]

  const smartphoneTabs = [
    { key: 'menos300', label: 'Menos de 300€' },
    { key: 'seleccion', label: 'Nuestra selección' },
    { key: 'ofertas', label: 'Ofertas' },
    { key: 'novedades', label: 'Novedades' }
  ]

  const smartphonesByTab = {
    menos300: [
      {
        id: 1,
        name: 'Xiaomi Redmi 14C 4/128GB Negro',
        price: 189.99,
        oldPrice: 249.99,
        discount: 24,
        badge: 'Trending',
        rating: 4.6,
        reviews: 563,
        image: 'https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg'
      },
      {
        id: 2,
        name: 'Samsung Galaxy A16 8/256GB Negro',
        price: 199.99,
        oldPrice: 359,
        discount: 44,
        badge: null,
        rating: 4.3,
        reviews: 411,
        image: 'https://images.pexels.com/photos/6078121/pexels-photo-6078121.jpeg'
      }
    ],
    seleccion: [
      {
        id: 3,
        name: 'Google Pixel 7',
        price: 649,
        oldPrice: 699,
        discount: 7,
        badge: 'Nuestra selección',
        rating: 4.8,
        reviews: 320,
        image: 'https://images.pexels.com/photos/5081394/pexels-photo-5081394.jpeg'
      }
    ],
    ofertas: [
      {
        id: 4,
        name: 'Xiaomi Redmi Note 14 4G 8/256GB',
        price: 169,
        oldPrice: 249.99,
        discount: 32,
        badge: 'Oferta',
        rating: 4.6,
        reviews: 563,
        image: 'https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg'
      }
    ],
    novedades: [
      {
        id: 5,
        name: 'Realme 13 Pro 5G',
        price: 449,
        oldPrice: null,
        discount: null,
        badge: 'Nuevo',
        rating: 4.4,
        reviews: 120,
        image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg'
      }
    ]
  }

  const tabletTabs = [
    { key: 'menos300', label: 'Menos de 300€' },
    { key: 'seleccion', label: 'Nuestra selección' },
    { key: 'ofertas', label: 'Ofertas' },
    { key: 'novedades', label: 'Novedades' }
  ]

  const tabletsByTab = {
    menos300: [
      {
        id: 1,
        name: 'Lenovo Tab P11',
        price: 279.99,
        oldPrice: 329.99,
        discount: 15,
        badge: 'Trending',
        rating: 4.3,
        reviews: 210,
        image: 'https://images.pexels.com/photos/5081396/pexels-photo-5081396.jpeg'
      }
    ],
    seleccion: [
      {
        id: 2,
        name: 'iPad 10ª Gen',
        price: 449,
        oldPrice: null,
        discount: null,
        badge: 'Nuestra selección',
        rating: 4.8,
        reviews: 640,
        image: 'https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg'
      }
    ],
    ofertas: [
      {
        id: 3,
        name: 'Samsung Galaxy Tab S7 FE',
        price: 399,
        oldPrice: 499,
        discount: 20,
        badge: 'Oferta',
        rating: 4.5,
        reviews: 310,
        image: 'https://images.pexels.com/photos/5081388/pexels-photo-5081388.jpeg'
      }
    ],
    novedades: [
      {
        id: 4,
        name: 'Xiaomi Pad 7',
        price: 379,
        oldPrice: null,
        discount: null,
        badge: 'Nuevo',
        rating: 4.4,
        reviews: 95,
        image: 'https://images.pexels.com/photos/5081389/pexels-photo-5081389.jpeg'
      }
    ]
  }

  return (
    <main className="st-page">
      <section className="st-hero">
        <div className="st-hero-text">
          <h1>Smartphones y tablets</h1>
          <p>
            Explora nuestra selección de móviles y tabletas: desde gama alta hasta opciones
            económicas para el día a día.
          </p>
        </div>
      </section>

      <section className="st-grid">
        <CategoryCard
          title="Smartphones"
          image="https://images.pexels.com/photos/5081393/pexels-photo-5081393.jpeg"
          alt="Smartphones"
          to="/smartphones"
        />

        <CategoryCard
          title="Tablets"
          image="https://images.pexels.com/photos/5081396/pexels-photo-5081396.jpeg"
          alt="Tablets"
          to="/tablets"
        />
      </section>

      <ProductSection
        id="smartphones-top"
        title="Smartphones más vendidos"
        ctaLabel="Ver todos los smartphones"
        products={topSmartphones}
        variant="default"
      />

      <TabbedProductCarousel
        id="smartphones-carousel"
        tabs={smartphoneTabs}
        productsByTab={smartphonesByTab}
      />

      <ProductSection
        id="tablets-top"
        title="Tablets más vendidas"
        ctaLabel="Ver todas las tablets"
        products={topTablets}
        variant="default"
      />

      <TabbedProductCarousel
        id="tablets-carousel"
        tabs={tabletTabs}
        productsByTab={tabletsByTab}
      />
    </main>
  )
}

export default SmartphonesTablets
