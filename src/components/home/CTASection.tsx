
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H5z'/%3E%3Cpath d='M6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '8px 8px'
        }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white/90 px-4 py-1 rounded-full mb-6 border border-white/20">
            Start Your Journey
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Fashion Business?
          </h2>
          
          <p className="text-xl mb-10 text-indigo-100 max-w-3xl mx-auto">
            Join Indreni Kloset today and revolutionize your fashion business with our curated products, 
            flexible pricing, and hassle-free fulfillment.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-indigo-50 group" asChild>
              <Link to="/register" className="flex items-center justify-center">
                Join as a Reseller
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 group" asChild>
              <Link to="/contact" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Contact Us
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 group" asChild>
              <Link to="/support" className="flex items-center justify-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat With Support
              </Link>
            </Button>
          </div>
          
          <div className="mt-10">
            <p className="text-white/70">Already have an account? <Link to="/login" className="text-white hover:underline">Sign in</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
