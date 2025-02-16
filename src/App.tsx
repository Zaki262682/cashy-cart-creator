
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { BottomNav } from "@/components/BottomNav";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            <BottomNav />
          </div>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
