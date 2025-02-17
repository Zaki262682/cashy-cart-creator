
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Plus } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { addItem, items } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

      <main className="container py-8 pb-24">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="animate-fadeIn"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
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
