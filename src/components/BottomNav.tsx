
import { Home, ShoppingCart, User, Navigation } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export function BottomNav() {
  const location = useLocation();
  const { items } = useCart();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: ShoppingCart, label: "Cart", path: "/cart", badge: items.length },
    { icon: User, label: "Account", path: "/login" },
    { icon: Navigation, label: "Categories", path: "/categories" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-background md:hidden">
      <div className="grid grid-cols-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center py-2 px-1 text-xs",
              location.pathname === item.path
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            <div className="relative">
              <item.icon className="h-5 w-5 mb-1" />
              {item.badge ? (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] text-primary-foreground flex items-center justify-center">
                  {item.badge}
                </span>
              ) : null}
            </div>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
