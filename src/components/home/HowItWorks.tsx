
import { ArrowRight, Search, ShoppingCart, Package } from "lucide-react";

const HowItWorks = () => {
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

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform makes fashion reselling simple and profitable in just three steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center relative card-hover"
            >
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
