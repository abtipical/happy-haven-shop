import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrendingSection = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "Rainbow Sparkle Dress",
      price: 45.99,
      originalPrice: 59.99,
      image: "/placeholder.svg",
      category: "Clothes",
      trending: true,
    },
    {
      id: 2,
      name: "Adventure Sneakers",
      price: 32.99,
      image: "/placeholder.svg",
      category: "Shoes",
      trending: true,
    },
    {
      id: 3,
      name: "Building Blocks Set",
      price: 24.99,
      image: "/placeholder.svg",
      category: "Toys",
      trending: true,
    },
    {
      id: 4,
      name: "Educational Puzzle Game",
      price: 19.99,
      image: "/placeholder.svg",
      category: "Games",
      trending: true,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Top Trending</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what's hot right now! These are the products flying off our shelves.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {trendingProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="product-card group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-destructive/90 text-white">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </Badge>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="rounded-full p-2">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="btn-gradient">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products?filter=trending">
            <Button size="lg" variant="outline" className="btn-soft">
              View All Trending Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;