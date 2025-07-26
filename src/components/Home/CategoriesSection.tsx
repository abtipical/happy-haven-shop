import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clothesImage from '@/assets/category-clothes.jpg';
import shoesImage from '@/assets/category-shoes.jpg';
import toysImage from '@/assets/category-toys.jpg';
import gamesImage from '@/assets/category-games.jpg';

const categories = [
  {
    id: 'clothes',
    name: 'Clothes',
    description: 'Adorable outfits for every occasion',
    image: clothesImage,
    itemCount: 245,
    color: 'from-primary/20 to-primary/5'
  },
  {
    id: 'shoes',
    name: 'Shoes',
    description: 'Comfortable steps for little feet',
    image: shoesImage,
    itemCount: 189,
    color: 'from-secondary/20 to-secondary/5'
  },
  {
    id: 'toys',
    name: 'Toys',
    description: 'Imagination-sparking playtime fun',
    image: toysImage,
    itemCount: 387,
    color: 'from-accent/20 to-accent/5'
  },
  {
    id: 'games',
    name: 'Games',
    description: 'Educational and entertaining games',
    image: gamesImage,
    itemCount: 156,
    color: 'from-success/20 to-success/5'
  }
];

const CategoriesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed to bring joy and comfort to your little ones
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="category-card group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
              
              <div className="relative z-10">
                <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-muted/50">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {category.itemCount} items
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link to="/products">
            <Button size="lg" className="btn-gradient">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;