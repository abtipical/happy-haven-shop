import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';

// Inline styles for the component
const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    width: '320px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative' as const,
    cursor: 'pointer',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  },
  cardHover: {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
  },
  imageContainer: {
    position: 'relative' as const,
    overflow: 'hidden',
    height: '280px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transition: 'transform 0.6s ease',
  },
  imageHover: {
    transform: 'scale(1.1)',
  },
  badge: {
    position: 'absolute' as const,
    top: '16px',
    left: '16px',
    backgroundColor: '#ff4757',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    zIndex: 2,
  },
  newBadge: {
    backgroundColor: '#2ed573',
  },
  wishlistBtn: {
    position: 'absolute' as const,
    top: '16px',
    right: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    zIndex: 2,
  },
  wishlistBtnActive: {
    backgroundColor: '#ff4757',
    color: 'white',
  },
  quickActions: {
    position: 'absolute' as const,
    bottom: '16px',
    right: '16px',
    display: 'flex',
    gap: '8px',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'all 0.3s ease',
  },
  quickActionsVisible: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  quickActionBtn: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
  },
  content: {
    padding: '24px',
  },
  category: {
    color: '#8b949e',
    fontSize: '13px',
    fontWeight: '500',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '12px',
    lineHeight: '1.4',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical' as const,
    overflow: 'hidden',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
  },
  stars: {
    display: 'flex',
    gap: '2px',
  },
  ratingText: {
    fontSize: '14px',
    color: '#6b7280',
    fontWeight: '500',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  priceGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  currentPrice: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#1a1a1a',
  },
  originalPrice: {
    fontSize: '16px',
    color: '#9ca3af',
    textDecoration: 'line-through',
  },
  discount: {
    backgroundColor: '#dcfce7',
    color: '#16a34a',
    padding: '4px 8px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '600',
  },
  addToCartBtn: {
    width: '100%',
    backgroundColor: '#1a1a1a',
    color: 'white',
    border: 'none',
    borderRadius: '14px',
    padding: '16px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  addToCartBtnHover: {
    backgroundColor: '#333333',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
  },
  stock: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '16px',
  },
  stockDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#16a34a',
  },
  stockText: {
    fontSize: '13px',
    color: '#16a34a',
    fontWeight: '500',
  },
  lowStockDot: {
    backgroundColor: '#f59e0b',
  },
  lowStockText: {
    color: '#f59e0b',
  },
};

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviewCount: number;
    isNew?: boolean;
    isOnSale?: boolean;
    discount?: number;
    stock: number;
  };
  onAddToCart?: (productId: number) => void;
  onAddToWishlist?: (productId: number) => void;
  onQuickView?: (productId: number) => void;
}

const ModernProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onAddToWishlist,
  onQuickView,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onAddToWishlist?.(product.id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.(product.id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickView?.(product.id);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        fill={index < Math.floor(rating) ? '#fbbf24' : 'none'}
        color={index < Math.floor(rating) ? '#fbbf24' : '#d1d5db'}
      />
    ));
  };

  const isLowStock = product.stock <= 5 && product.stock > 0;
  const isOutOfStock = product.stock === 0;

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            ...styles.image,
            ...(isHovered ? styles.imageHover : {}),
          }}
        />
        
        {(product.isNew || product.isOnSale) && (
          <div
            style={{
              ...styles.badge,
              ...(product.isNew ? styles.newBadge : {}),
            }}
          >
            {product.isNew ? 'New' : `${product.discount}% OFF`}
          </div>
        )}

        <button
          style={{
            ...styles.wishlistBtn,
            ...(isWishlisted ? styles.wishlistBtnActive : {}),
          }}
          onClick={handleWishlistClick}
        >
          <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>

        <div
          style={{
            ...styles.quickActions,
            ...(isHovered ? styles.quickActionsVisible : {}),
          }}
        >
          <button style={styles.quickActionBtn} onClick={handleQuickView}>
            <Eye size={16} />
          </button>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.category}>{product.category}</div>
        <h3 style={styles.title}>{product.name}</h3>

        <div style={styles.rating}>
          <div style={styles.stars}>{renderStars(product.rating)}</div>
          <span style={styles.ratingText}>
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        <div
          style={{
            ...styles.stock,
            ...(isLowStock ? { color: '#f59e0b' } : {}),
          }}
        >
          <div
            style={{
              ...styles.stockDot,
              ...(isLowStock ? styles.lowStockDot : {}),
              ...(isOutOfStock ? { backgroundColor: '#ef4444' } : {}),
            }}
          />
          <span
            style={{
              ...styles.stockText,
              ...(isLowStock ? styles.lowStockText : {}),
              ...(isOutOfStock ? { color: '#ef4444' } : {}),
            }}
          >
            {isOutOfStock
              ? 'Out of Stock'
              : isLowStock
              ? `Only ${product.stock} left`
              : 'In Stock'}
          </span>
        </div>

        <div style={styles.priceContainer}>
          <div style={styles.priceGroup}>
            <span style={styles.currentPrice}>${product.price}</span>
            {product.originalPrice && (
              <span style={styles.originalPrice}>${product.originalPrice}</span>
            )}
          </div>
          {product.discount && (
            <div style={styles.discount}>-{product.discount}%</div>
          )}
        </div>

        <button
          style={{
            ...styles.addToCartBtn,
            ...(isHovered ? styles.addToCartBtnHover : {}),
            ...(isOutOfStock ? { backgroundColor: '#9ca3af', cursor: 'not-allowed' } : {}),
          }}
          onClick={handleAddToCart}
          disabled={isOutOfStock}
        >
          <ShoppingCart size={16} />
          {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

// Example usage component
const ProductCardExample = () => {
  const sampleProduct = {
    id: 1,
    name: 'Premium Wireless Headphones with Noise Cancellation',
    category: 'Electronics',
    price: 199,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
    rating: 4.8,
    reviewCount: 127,
    isNew: false,
    isOnSale: true,
    discount: 33,
    stock: 3,
  };

  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
  };

  const handleAddToWishlist = (productId: number) => {
    console.log(`Added product ${productId} to wishlist`);
  };

  const handleQuickView = (productId: number) => {
    console.log(`Quick view for product ${productId}`);
  };

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', backgroundColor: '#f8fafc' }}>
      <ModernProductCard
        product={sampleProduct}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
        onQuickView={handleQuickView}
      />
    </div>
  );
};

export default ModernProductCard;
export { ProductCardExample };