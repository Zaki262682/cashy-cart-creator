
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Plus, List, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addItem, items } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Parse category from URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium">Premium Store</h1>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="relative animate-fadeIn"
                onClick={() => navigate("/checkout")}
              >
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from
      -purple-700 to-pink-600 text-white">
        <div className="container py-24 relative z-10">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fadeIn">
              Discover Premium Quality Products
            </h2>
            <p className="text-lg md:text-xl text-white/90 animate-fadeIn">
              Explore our curated collection of high-quality products designed for your lifestyle.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="group animate-fadeIn"
              onClick={() => navigate("/categories")}
            >
              Browse Categories
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </section>

      {/* Augment Bar */}
      <div className="bg-muted py-3 border-y animate-fadeIn">
        <div className="container">
          <div className="flex items-center justify-between gap-4 text-sm overflow-x-auto whitespace-nowrap pb-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">✨ Premium Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">🚚 Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">🔒 Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">📦 Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container py-8 pb-24">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => {
              setSelectedCategory(null);
              navigate("/");
            }}
            className="animate-fadeIn"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category);
                navigate(`/?category=${category}`);
              }}
              className="animate-fadeIn"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group animate-fadeIn">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transform transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.description}
                </p>
                {product.ingredients && product.ingredients.length > 0 && (
                  <div className="mt-3">
                    <h4 className="text-sm font-medium flex items-center gap-1">
                      <List className="h-4 w-4" />
                      Ingredients
                    </h4>
                    <ul className="mt-1 text-sm text-muted-foreground">
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index} className="inline-block">
                          {ingredient}
                          {index < product.ingredients!.length - 1 ? ', ' : ''}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => addItem(product)}
                    className="animate-shimmer"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
