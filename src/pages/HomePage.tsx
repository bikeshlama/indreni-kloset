
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import Benefits from "@/components/home/Benefits";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
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
        
        const { data: roles } = await supabase
          .from("user_roles")
          .select()
          .eq("user_id", session.user.id)
          .eq("role", "admin");
        
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
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      {isAdmin && (
        <div className="bg-navy text-white py-2 text-center">
          <Link to="/dashboard/admin">
            <Button variant="outline" className="text-white border-white hover:bg-navy-light">
              <Shield className="mr-2 h-4 w-4" />
              Access Admin Panel
            </Button>
          </Link>
        </div>
      )}
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
