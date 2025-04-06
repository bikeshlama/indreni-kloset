
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('cta-section');
      if (element) {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="cta-section" className="relative py-24 overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy-dark"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-light opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block py-1 px-3 bg-white/10 text-white/90 rounded-full mb-6 backdrop-blur-sm">
            Start Your Journey
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Reselling Journey?
          </h2>
          
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join Indreni Kloset today and transform your fashion business with our curated products, 
            flexible pricing, and hassle-free fulfillment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-navy hover:bg-cream hover:text-navy-dark group btn-hover-effect" asChild>
              <Link to="/register">
                Join as a Reseller
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 group" asChild>
              <Link to="/contact" className="flex items-center">
                <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Contact Us
              </Link>
            </Button>
            
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 group" asChild>
              <Link to="/support" className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat with Support
              </Link>
            </Button>
          </div>
          
          <div className="mt-12">
            <p className="text-white/70">Already have an account? <Link to="/login" className="text-gold hover:underline">Sign in</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
