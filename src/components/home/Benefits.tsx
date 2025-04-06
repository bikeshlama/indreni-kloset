
import { 
  TrendingUp, 
  DollarSign, 
  Truck, 
  Zap, 
  Shield,
  Users
} from "lucide-react";
import { useEffect } from "react";

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-10 w-10 text-navy" />,
      title: "Access Trending Products",
      description: "Get access to the latest fashion trends without inventory investment"
    },
    {
      icon: <DollarSign className="h-10 w-10 text-navy" />,
      title: "Set Your Own Margins",
      description: "Control your profit by setting your own prices based on our wholesale rates"
    },
    {
      icon: <Truck className="h-10 w-10 text-navy" />,
      title: "We Handle Fulfillment",
      description: "Focus on selling while we manage inventory, packaging, and shipping"
    },
    {
      icon: <Zap className="h-10 w-10 text-navy" />,
      title: "Quick Start",
      description: "Begin selling immediately after registration with no upfront costs"
    },
    {
      icon: <Shield className="h-10 w-10 text-navy" />,
      title: "Quality Guarantee",
      description: "All products are vetted for quality to protect your reputation"
    },
    {
      icon: <Users className="h-10 w-10 text-navy" />,
      title: "Grow Your Network",
      description: "Expand your customer base with ready-to-share product imagery"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.benefit-card');
      
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          // Add staggered delay based on index
          setTimeout(() => {
            element.classList.add('in-view');
          }, index * 100);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-navy/5 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold/5 rounded-tr-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block py-1 px-3 bg-navy/5 text-navy rounded-full mb-4">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Why Resellers Choose Us</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indreni Kloset provides everything you need to run a successful fashion reselling business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="benefit-card animate-on-scroll border border-gray-100 rounded-xl p-8 hover:border-navy transition-all duration-500 group hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-navy/5 rounded-full inline-block group-hover:bg-navy/10 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-navy transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
