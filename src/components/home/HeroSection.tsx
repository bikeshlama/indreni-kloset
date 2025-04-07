
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
    <div className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 text-center md:text-left ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Transform Your Fashion Business</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Scale Your <span className="text-indigo-300">Fashion</span> Reselling Business
            </h1>
            
            <p className="text-xl text-indigo-100 max-w-xl">
              Join our curated platform designed for fashion entrepreneurs. Browse premium products, 
              set your prices, and we'll handle the inventory and logistics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-100" asChild>
                <Link to="/register" className="group">
                  Join as a Reseller
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
          
          <div className={`hidden md:block transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-400/20 rounded-lg rotate-12 blur-sm"></div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-400/20 rounded-lg -rotate-12 blur-sm"></div>
              
              {/* Hero image */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-3 rounded-2xl shadow-2xl border border-white/20 relative z-10">
                <img 
                  src="/placeholder.svg" 
                  alt="Fashion Reseller Platform" 
                  className="w-full rounded-lg shadow-inner"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute top-5 -right-10 bg-white rounded-lg shadow-lg p-4 z-20 rotate-6 animate-float">
                <div className="text-sm font-semibold text-gray-800">Monthly Sales</div>
                <div className="text-2xl font-bold text-indigo-900">$12,486</div>
                <div className="text-xs text-green-600 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  18% from last month
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 z-20 -rotate-3 animate-float animation-delay-300">
                <div className="text-sm font-semibold text-gray-800">New Customers</div>
                <div className="text-2xl font-bold text-indigo-900">+248</div>
              </div>
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
