import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock wishlist data
const initialWishlistItems = [
  {
    id: 1,
    name: 'Rainbow Unicorn Dress',
    price: 29.99,
    originalPrice: 39.99,
    image: '/placeholder.svg',
    category: 'clothes',
    rating: 4.8,
    reviews: 124,
    isOnSale: true,
    inStock: true
  },
  {
    id: 2,
    name: 'Adventure Sneakers',
    price: 45.99,
    image: '/placeholder.svg',
    category: 'shoes',
    rating: 4.9,
    reviews: 89,
    isOnSale: false,
    inStock: true
  },
  {
    id: 5,
    name: 'Cozy Bear Hoodie',
    price: 32.99,
    image: '/placeholder.svg',
    category: 'clothes',
    rating: 4.8,
    reviews: 203,
    isOnSale: false,
    inStock: false
  }
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
  };

  const moveToCart = (id: number) => {
    // In a real app, this would add to cart and remove from wishlist
    removeFromWishlist(id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen pb-20 md:pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            My Wishlist
          </h1>
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">
              Save items you love to your wishlist and buy them later
            </p>
            <Link to="/products">
              <Button size="lg" className="btn-gradient">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
            My Wishlist ({wishlistItems.length} items)
          </h1>
          <Button variant="outline" className="btn-soft">
            Share Wishlist
          </Button>
        </div>

        {/* Wishlist Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="product-card">
              <CardContent className="p-0">
                <div className="relative">
                  <Link to={`/product/${item.id}`}>
                    <div className="aspect-square bg-muted/30 rounded-t-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {item.isOnSale && (
                      <Badge className="badge-sale">Sale</Badge>
                    )}
                    {!item.inStock && (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-3 right-3 w-9 h-9 p-0 bg-card/80 backdrop-blur-sm border-border/50"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <Trash2 className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </div>

                <div className="p-4 space-y-3">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="text-sm font-medium ml-1">{item.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({item.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">
                      ${item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {item.inStock ? (
                      <Button 
                        size="sm" 
                        className="flex-1 btn-gradient"
                        onClick={() => moveToCart(item.id)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    ) : (
                      <Button size="sm" className="flex-1" variant="outline" disabled>
                        Notify When Available
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-gradient"
              onClick={() => {
                const inStockItems = wishlistItems.filter(item => item.inStock);
                inStockItems.forEach(item => moveToCart(item.id));
              }}
              disabled={!wishlistItems.some(item => item.inStock)}
            >
              Add All to Cart
            </Button>
            <Link to="/products">
              <Button size="lg" variant="outline" className="btn-soft">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;