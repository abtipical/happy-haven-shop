import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroBanner from '@/assets/hero-banner.jpg';
import sampleProducts from '@/assets/sample-products.jpg';
import categoryClothes from '@/assets/category-clothes.jpg';
import categoryShoes from '@/assets/category-shoes.jpg';

const HeroSection = () => {
  const heroImages = [
    { src: sampleProducts, alt: "Featured Products Collection" },
    { src: heroBanner, alt: "Kids Paradise - Premium children's products" },
    { src: categoryClothes, alt: "Trendy Kids Clothing" },
    { src: categoryShoes, alt: "Stylish Kids Footwear" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/10 to-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Everything Your
                <span className="block text-primary hero-float">Little Ones</span>
                Need & Love
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover premium children's clothing, shoes, toys, and games that bring joy to every moment. 
                Quality products that parents trust and kids adore.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="btn-gradient glow-on-hover group">
                  Shop Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="btn-soft">
                View Categories
              </Button>
            </div>

          </div>

          {/* Hero Image Carousel */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-[500px] object-cover absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Target Element */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-warning rounded-full flex items-center justify-center shadow-lg hero-float">
              <span className="text-2xl">🎯</span>
            </div>
            
            {/* Chat/Contact Button */}
            <div className="absolute -bottom-4 -right-4">
              <Button 
                size="lg" 
                className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg hero-float group"
                style={{ animationDelay: '1s' }}
              >
                <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;