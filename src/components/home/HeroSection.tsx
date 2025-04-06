
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add scroll reveal functionality
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.animate-on-scroll');
      
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('in-view');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[92vh] flex items-center navy-gradient overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-gold opacity-10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute -left-40 -bottom-40 w-[30rem] h-[30rem] bg-navy-light opacity-20 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className={`md:flex-1 md:pr-8 stagger-animate ${isLoaded ? 'visible' : 'invisible'}`}>
            <span className="inline-block py-1 px-3 bg-white/10 backdrop-blur-sm text-white/90 rounded-full mb-6 border border-white/20">
              Fashion Reselling Made Simple
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Scale Your <span className="relative">
                Fashion 
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold"></span>
              </span> Business
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Join our platform designed for fashion resellers. Browse premium products, set your prices, and we handle the logistics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-navy hover:bg-cream hover:text-navy-dark btn-hover-effect group" asChild>
                <Link to="/register">
                  Join as a Reseller
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
          
          <div className={`hidden md:block md:flex-1 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="glass-card p-4 rounded-2xl shadow-2xl overflow-hidden animate-float">
              <img 
                src="/placeholder.svg" 
                alt="Fashion Reseller Platform" 
                className="w-full max-w-md mx-auto rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
