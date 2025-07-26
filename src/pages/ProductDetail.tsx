import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Star, Plus, Minus, Share, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock product data (in real app, this would come from API)
const productData = {
  1: {
    id: 1,
    name: 'Rainbow Unicorn Dress',
    price: 29.99,
    originalPrice: 39.99,
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    category: 'clothes',
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isOnSale: true,
    description: 'A magical rainbow unicorn dress that will make your little one feel like they stepped out of a fairy tale. Made with soft, comfortable cotton blend fabric that\'s perfect for all-day wear.',
    features: [
      'Premium cotton blend fabric',
      'Machine washable',
      'Available in sizes 2T-6T',
      'Magical unicorn design',
      'Rainbow color scheme'
    ],
    sizes: ['2T', '3T', '4T', '5T', '6T'],
    colors: ['Rainbow', 'Pink', 'Purple'],
    inStock: true,
    stockCount: 15
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[Number(id) as keyof typeof productData];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const incrementQuantity = () => setQuantity(prev => Math.min(prev + 1, product.stockCount));
  const decrementQuantity = () => setQuantity(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/products" className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted/30">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.isNew && <Badge className="badge-new">New</Badge>}
                {product.isOnSale && <Badge className="badge-sale">Sale</Badge>}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-warning text-warning' 
                            : 'text-muted-foreground'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground ml-2">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-foreground">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.isOnSale && (
                  <Badge className="bg-success/10 text-success border border-success/20">
                    Save ${(product.originalPrice! - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <label className="block text-sm font-medium mb-3">Size</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      className={selectedSize === size ? 'btn-gradient' : 'btn-soft'}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && (
              <div>
                <label className="block text-sm font-medium mb-3">Color</label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedColor(color)}
                      className={selectedColor === color ? 'btn-gradient' : 'btn-soft'}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-3">Quantity</label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.stockCount} in stock
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1 btn-gradient">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsInWishlist(!isInWishlist)}
                className={isInWishlist ? 'text-destructive border-destructive' : ''}
              >
                <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-destructive' : ''}`} />
              </Button>
              <Button size="lg" variant="outline">
                <Share className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Free Shipping</div>
                      <div className="text-xs text-muted-foreground">Orders over $50</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-success" />
                    </div>
                    <div>
                      <div className="font-medium">Safe Materials</div>
                      <div className="text-xs text-muted-foreground">Child-safe certified</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                      <RotateCcw className="w-5 h-5 text-warning" />
                    </div>
                    <div>
                      <div className="font-medium">Easy Returns</div>
                      <div className="text-xs text-muted-foreground">30-day policy</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center text-muted-foreground">
                    Customer reviews will be displayed here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Shipping Information</h4>
                      <p className="text-muted-foreground">
                        Free shipping on orders over $50. Standard delivery takes 3-5 business days.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Returns Policy</h4>
                      <p className="text-muted-foreground">
                        30-day return policy. Items must be in original condition with tags attached.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;