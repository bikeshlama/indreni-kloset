
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User, ShoppingCart, LogOut } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Add scroll event listener to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logged out successfully",
      });
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        variant: "destructive",
        title: "Logout failed",
        description: "There was an error logging out. Please try again.",
      });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className={cn(
                "font-bold text-xl transition-colors duration-300",
                isScrolled ? "text-navy" : "text-white"
              )}>Indreni Kloset</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="/products" 
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                isScrolled ? "text-gray-700 hover:text-navy" : "text-white/90 hover:text-white"
              )}
            >
              Products
            </Link>
            <Link 
              to="/how-it-works" 
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                isScrolled ? "text-gray-700 hover:text-navy" : "text-white/90 hover:text-white"
              )}
            >
              How It Works
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                isScrolled ? "text-gray-700 hover:text-navy" : "text-white/90 hover:text-white"
              )}
            >
              Contact
            </Link>
            
            <div className="ml-4 flex items-center space-x-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant={isScrolled ? "outline" : "ghost"} 
                      size="sm" 
                      className={cn(
                        isScrolled 
                          ? "border-indigo-500 text-indigo-600 hover:bg-indigo-50" 
                          : "text-white border border-white/30 hover:bg-white/10"
                      )}
                    >
                      <User className="mr-2 h-4 w-4" />
                      My Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => navigate("/dashboard")}>
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/dashboard/account")}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button 
                    size="sm" 
                    variant={isScrolled ? "outline" : "ghost"}
                    className={cn(
                      isScrolled 
                        ? "border-indigo-500 text-indigo-600 hover:bg-indigo-50" 
                        : "text-white border border-white/30 hover:bg-white/10"
                    )} 
                    asChild
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button 
                    size="sm" 
                    className={isScrolled 
                      ? "bg-indigo-600 text-white hover:bg-indigo-700" 
                      : "bg-white text-indigo-900 hover:bg-white/90"} 
                    asChild
                  >
                    <Link to="/register">Join as Reseller</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={cn(
                "p-2 rounded-md focus:outline-none",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-navy">
              Products
            </Link>
            <Link to="/how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-navy">
              How It Works
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-navy">
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              {user ? (
                <div>
                  <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                    Dashboard
                  </Link>
                  <Link to="/dashboard/account" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium bg-white text-indigo-600 border border-indigo-500 hover:bg-indigo-50 mb-2">
                    Login
                  </Link>
                  <Link to="/register" className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700">
                    Join as Reseller
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
