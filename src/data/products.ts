
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-fidelity audio with active noise cancellation.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
    ingredients: ["Aluminum", "Memory Foam", "Premium Drivers", "Bluetooth Chip"],
  },
  {
    id: "2",
    name: "Minimalist Watch",
    price: 199.99,
    description: "Elegant timepiece with Swiss movement.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Accessories",
    ingredients: ["Stainless Steel", "Sapphire Crystal", "Swiss Movement", "Leather Strap"],
  },
  {
    id: "3",
    name: "Leather Laptop Sleeve",
    price: 79.99,
    description: "Handcrafted premium leather protection for your device.",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80",
    category: "Accessories",
    ingredients: ["Full-grain Leather", "Wool Felt", "YKK Zipper", "Microfiber Lining"],
  },
];
