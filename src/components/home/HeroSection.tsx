
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:flex-1 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade">
              Scale Your Fashion Business with Indreni Kloset
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Join our platform designed for fashion resellers. Browse premium products, set your prices, and we handle the logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100" asChild>
                <Link to="/register">Join as a Reseller</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block md:flex-1">
            <img 
              src="/placeholder.svg" 
              alt="Fashion Reseller Platform" 
              className="w-full max-w-md mx-auto mt-8 md:mt-0 rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
