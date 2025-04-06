
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, ShoppingCart, Settings, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DashboardSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardSidebar = ({ isOpen, toggleSidebar }: DashboardSidebarProps) => {
  const location = useLocation();
  
  const navItems = [
    {
      label: "Dashboard",
      icon: <Home className="w-5 h-5" />,
      href: "/dashboard",
    },
    {
      label: "Products",
      icon: <Package className="w-5 h-5" />,
      href: "/dashboard/products",
    },
    {
      label: "My Orders",
      icon: <ShoppingCart className="w-5 h-5" />,
      href: "/dashboard/orders",
    },
    {
      label: "Account",
      icon: <User className="w-5 h-5" />,
      href: "/dashboard/account",
    },
    {
      label: "Settings",
      icon: <Settings className="w-5 h-5" />,
      href: "/dashboard/settings",
    },
  ];

  return (
    <>
      <aside
        className={cn(
          "bg-white border-r border-gray-200 transition-all duration-300 z-20",
          "fixed inset-y-0 left-0 md:relative",
          isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full md:translate-x-0 md:w-20"
        )}
      >
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4">
          <h2 className={cn("font-semibold text-navy", isOpen ? "block" : "hidden md:block")}>
            {isOpen ? "Indreni Kloset" : "IK"}
          </h2>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleSidebar}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <div className="p-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all",
                  location.pathname === item.href
                    ? "bg-navy text-white"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <span>{item.icon}</span>
                <span className={cn(isOpen ? "block" : "hidden md:hidden")}>{item.label}</span>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </aside>
      
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default DashboardSidebar;
