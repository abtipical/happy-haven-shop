import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewArrivalsSection = () => {
  const newProducts = [
    {
      id: 5,
      name: "Cozy Winter Jacket",
      price: 67.99,
      image: "/placeholder.svg",
      category: "Clothes",
      isNew: true,
      daysAgo: 2,
    },
    {
      id: 6,
      name: "LED Light-up Shoes",
      price: 49.99,
      image: "/placeholder.svg",
      category: "Shoes",
      isNew: true,
      daysAgo: 1,
    },
    {
      id: 7,
      name: "Interactive Robot Pet",
      price: 89.99,
      image: "/placeholder.svg",
      category: "Toys",
      isNew: true,
      daysAgo: 3,
    },
    {
      id: 8,
      name: "Memory Challenge Game",
      price: 27.99,
      image: "/placeholder.svg",
      category: "Games",
      isNew: true,
      daysAgo: 1,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">New Arrivals</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh picks just landed! Be the first to discover our latest additions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="product-card group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-success/90 text-white">
                    <Sparkles className="w-3 h-3 mr-1" />
                    New
                  </Badge>
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs">
                      {product.daysAgo} day{product.daysAgo > 1 ? 's' : ''} ago
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                    <span className="text-lg font-bold text-primary">
                      ${product.price}
                    </span>
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
          <Link to="/products?filter=new">
            <Button size="lg" variant="outline" className="btn-soft">
              View All New Arrivals
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;