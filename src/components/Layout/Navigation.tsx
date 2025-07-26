import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X, Home, Package, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/products', label: 'Products', icon: Package },
    { path: '/orders', label: 'Orders', icon: History },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Desktop Navigation
  const DesktopNav = () => (
    <nav className="hidden md:flex bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold text-foreground">Kids Paradise</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative bounce-on-hover">
              <Search className="w-5 h-5" />
            </Button>
            <Link to="/wishlist">
              <Button variant="ghost" size="sm" className="relative bounce-on-hover">
                <Heart className={`w-5 h-5 ${isActive('/wishlist') ? 'text-primary fill-primary' : ''}`} />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-warning text-warning-foreground">
                  2
                </Badge>
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative bounce-on-hover">
                <ShoppingCart className={`w-5 h-5 ${isActive('/cart') ? 'text-primary' : ''}`} />
                <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 bg-primary text-primary-foreground">
                  3
                </Badge>
              </Button>
            </Link>
            <Button className="btn-gradient">
              <User className="w-4 h-4 mr-2" />
              Hello, User!
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );

  // Mobile Navigation
  const MobileNav = () => (
    <>
      {/* Mobile Header */}
      <nav className="md:hidden bg-card border-b border-border shadow-sm">
        <div className="px-4 h-16 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">K</span>
            </div>
            <span className="text-lg font-bold text-foreground">Kids Paradise</span>
          </Link>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="relative">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg z-50">
            <div className="p-4 space-y-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-primary/10 text-primary font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border">
                <Button className="w-full btn-gradient">
                  <User className="w-4 h-4 mr-2" />
                  Hello, User!
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-lg z-40">
        <div className="flex justify-around items-center h-16 px-4">
          <Link to="/wishlist" className="flex flex-col items-center space-y-1">
            <div className="relative">
              <Heart className={`w-5 h-5 ${isActive('/wishlist') ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
              <Badge className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center p-0 bg-warning text-warning-foreground text-xs">
                2
              </Badge>
            </div>
            <span className={`text-xs ${isActive('/wishlist') ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              Wishlist
            </span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center space-y-1">
            <div className="relative">
              <ShoppingCart className={`w-5 h-5 ${isActive('/cart') ? 'text-primary' : 'text-muted-foreground'}`} />
              <Badge className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                3
              </Badge>
            </div>
            <span className={`text-xs ${isActive('/cart') ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
              Cart
            </span>
          </Link>
        </div>
      </div>
    </>
  );

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Navigation;