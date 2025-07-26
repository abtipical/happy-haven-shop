import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/10 to-accent/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by 10,000+ parents</span>
              </div>
              
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

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={heroBanner}
                alt="Kids Paradise - Premium children's products"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-warning rounded-full flex items-center justify-center shadow-lg hero-float">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-success rounded-full flex items-center justify-center shadow-lg hero-float" style={{ animationDelay: '2s' }}>
              <span className="text-xl">✨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;