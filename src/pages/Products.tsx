import { useState } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Rainbow Unicorn Dress',
    price: 29.99,
    originalPrice: 39.99,
    image: '/placeholder.svg',
    category: 'clothes',
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isOnSale: true,
    inWishlist: false
  },
  {
    id: 2,
    name: 'Adventure Sneakers',
    price: 45.99,
    image: '/placeholder.svg',
    category: 'shoes',
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isOnSale: false,
    inWishlist: true
  },
  {
    id: 3,
    name: 'Building Blocks Set',
    price: 34.99,
    originalPrice: 44.99,
    image: '/placeholder.svg',
    category: 'toys',
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isOnSale: true,
    inWishlist: false
  },
  {
    id: 4,
    name: 'Memory Puzzle Game',
    price: 19.99,
    image: '/placeholder.svg',
    category: 'games',
    rating: 4.6,
    reviews: 78,
    isNew: true,
    isOnSale: false,
    inWishlist: false
  },
  {
    id: 5,
    name: 'Cozy Bear Hoodie',
    price: 32.99,
    image: '/placeholder.svg',
    category: 'clothes',
    rating: 4.8,
    reviews: 203,
    isNew: false,
    isOnSale: false,
    inWishlist: true
  },
  {
    id: 6,
    name: 'Light-Up Shoes',
    price: 52.99,
    originalPrice: 65.99,
    image: '/placeholder.svg',
    category: 'shoes',
    rating: 4.9,
    reviews: 134,
    isNew: true,
    isOnSale: true,
    inWishlist: false
  }
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'clothes', name: 'Clothes' },
  { id: 'shoes', name: 'Shoes' },
  { id: 'toys', name: 'Toys' },
  { id: 'games', name: 'Games' }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [wishlist, setWishlist] = useState<number[]>([2, 5]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            All Products
          </h1>
          <p className="text-muted-foreground">
            Discover amazing products for your little ones
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Search and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? 'btn-gradient' : 'btn-soft'}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="product-card">
              <CardContent className="p-0">
                <div className="relative">
                  <Link to={`/product/${product.id}`}>
                    <div className="aspect-square bg-muted/30 rounded-t-xl overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="badge-new">New</Badge>
                    )}
                    {product.isOnSale && (
                      <Badge className="badge-sale">Sale</Badge>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-3 right-3 w-9 h-9 p-0 bg-card/80 backdrop-blur-sm border-border/50"
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart 
                      className={`w-4 h-4 ${
                        wishlist.includes(product.id) 
                          ? 'text-destructive fill-destructive' 
                          : 'text-muted-foreground'
                      }`} 
                    />
                  </Button>
                </div>

                <div className="p-4 space-y-3">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              No products found matching your criteria
            </div>
            <Button onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;