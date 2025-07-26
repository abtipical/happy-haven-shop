import HeroSection from '@/components/Home/HeroSection';
import CategoriesSection from '@/components/Home/CategoriesSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
    </div>
  );
};

export default Home;