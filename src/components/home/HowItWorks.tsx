
import { Search, ShoppingCart, Package, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      icon: <Search className="h-12 w-12 text-navy" />,
      title: "Browse Products",
      description: "Explore our curated collection of trending fashion items at competitive base prices."
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-navy" />,
      title: "Resell & Market",
      description: "Set your own prices, market to your audience, and grow your customer base with no inventory costs."
    },
    {
      icon: <Package className="h-12 w-12 text-navy" />,
      title: "Submit Orders",
      description: "Place orders through our system and we'll handle packaging and delivery to your customers."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 to-transparent"></div>
      <div className="absolute -left-48 top-1/3 w-96 h-96 bg-navy/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-48 bottom-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block py-1 px-3 bg-navy/5 text-navy rounded-full mb-4">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform makes fashion reselling simple and profitable in just three steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center relative animate-on-scroll card-hover glass-card border border-gray-100"
            >
              <div className="mb-6 bg-navy/5 p-4 rounded-full">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-gold" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a href="/register" className="fancy-link text-lg font-medium">
            Ready to start? Join now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
