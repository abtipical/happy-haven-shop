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
    <></>
  );

  // Mobile Navigation
  const MobileNav = () => (
    <></>
  );

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Navigation;