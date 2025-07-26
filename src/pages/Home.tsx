import HeroSection from '@/components/Home/HeroSection';
import CategoriesSection from '@/components/Home/CategoriesSection';
import TrendingSection from '@/components/Home/TrendingSection';
import NewArrivalsSection from '@/components/Home/NewArrivalsSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <TrendingSection />
      <NewArrivalsSection />
    </div>
  );
};

export default Home;