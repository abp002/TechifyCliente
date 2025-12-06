import Hero from '../components/Hero';
import CategoryCarousel from '../components/CategoryCarousel';
import LatestProducts from '../components/LatestProducts';
import FeaturedCategories from '../components/FeaturedCategories';
import OfferProducts from '../components/OfferProducts';
import PromoBanners from '../components/PromoBanners';
import InfoStrip from '../components/InfoStrip';

function Home() {
  return (
    <>
      <Hero />
      <CategoryCarousel />
      <LatestProducts />
      <FeaturedCategories />
      <OfferProducts />
      <PromoBanners />
      <InfoStrip />
    </>
  );
}

export default Home;
