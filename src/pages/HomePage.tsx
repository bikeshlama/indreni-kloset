
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import Benefits from "@/components/home/Benefits";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import FAQSection from "@/components/home/FAQSection";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const HomePage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Check if the user is an admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) return;
        
        // Using string-based table name to avoid TypeScript errors
        const { data: roles, error } = await supabase
          .from('user_roles')
          .select('*')
          .eq('user_id', session.user.id)
          .eq('role', 'admin');
        
        if (error) {
          console.error("Error checking admin status:", error);
          return;
        }
        
        if (roles && roles.length > 0) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
      }
    };
    
    checkAdminStatus();
  }, []);

  // Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, {
      threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll(".animate-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {isAdmin && (
        <div className="bg-indigo-900 text-white py-2 text-center">
          <Link to="/dashboard/admin">
            <Button variant="outline" className="text-white border-white hover:bg-indigo-800">
              <Shield className="mr-2 h-4 w-4" />
              Access Admin Panel
            </Button>
          </Link>
        </div>
      )}
      <main className="flex-grow">
        <HeroSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 to-white -z-10 transform -skew-y-3"></div>
          <HowItWorks />
        </div>
        <Benefits />
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 to-purple-50/30 -z-10"></div>
          <Testimonials />
        </div>
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
