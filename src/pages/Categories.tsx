
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ShoppingBag, 
  Laptop, 
  Watch, 
  Headphones,
  ChevronRight,
  ArrowLeft
} from "lucide-react";

export default function Categories() {
  const navigate = useNavigate();
  const categories = Array.from(new Set(products.map((product) => product.category)));
  
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'electronics':
        return <Laptop className="h-6 w-6" />;
      case 'accessories':
        return <Watch className="h-6 w-6" />;
      default:
        return <ShoppingBag className="h-6 w-6" />;
    }
  };

  const getProductCount = (category: string) => {
    return products.filter(product => product.category === category).length;
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="border-b sticky top-0 bg-background z-10">
        <div className="container py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="animate-fadeIn"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-medium">Categories</h1>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid gap-4 animate-fadeIn">
          {categories.map((category) => (
            <Card
              key={category}
              className="group cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => navigate(`/?category=${category}`)}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {getCategoryIcon(category)}
                  </div>
                  <div>
                    <h3 className="font-medium">{category}</h3>
                    <p className="text-sm text-muted-foreground">
                      {getProductCount(category)} products
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
