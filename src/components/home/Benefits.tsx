
import { 
  TrendingUp, 
  DollarSign, 
  Truck, 
  Zap, 
  Shield,
  Users
} from "lucide-react";

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

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Resellers Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indreni Kloset provides everything you need to run a successful fashion reselling business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl p-6 hover:border-navy transition-colors duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
