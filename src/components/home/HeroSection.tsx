
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

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
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-float"></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full bg-indigo-400/5 blur-3xl"></div>
        <div className="absolute -right-40 bottom-0 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-indigo-400/10 to-purple-400/5 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex justify-center">
          <div className={`max-w-3xl space-y-8 text-center ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Transform Your Fashion Business</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Scale Your <span className="text-indigo-300">Fashion</span> Reselling Business
            </h1>
            
            <p className="text-xl text-indigo-100 mx-auto">
              Join our curated platform designed for fashion entrepreneurs. Browse premium products, 
              set your prices, and we'll handle the inventory and logistics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-400 hover:bg-indigo-500 text-indigo-950 font-medium shadow-lg" asChild>
                <Link to="/register" className="group">
                  Join as a Reseller
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-indigo-900" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,192L48,208C96,224,192,256,288,266.7C384,277,480,267,576,229.3C672,192,768,128,864,128C960,128,1056,192,1152,229.3C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
