
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Indreni Kloset connects fashion resellers with quality products at wholesale prices. 
              Here's how our platform helps you grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Register as a Reseller</h3>
              <p className="text-gray-600 mb-4">
                Create your account and get instant access to our wholesale product catalog with competitive pricing.
              </p>
              <Link to="/register">
                <Button variant="outline">Sign Up Now</Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Browse and Select Products</h3>
              <p className="text-gray-600 mb-4">
                Explore our diverse range of fashion items, select what you want to sell, and add them to your order.
              </p>
              <Link to="/products">
                <Button variant="outline">View Products</Button>
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sell and Profit</h3>
              <p className="text-gray-600 mb-4">
                Market the products to your customers, collect orders, and submit them through our platform. We handle shipping directly to your customers.
              </p>
              <Link to="/login">
                <Button variant="outline">Start Selling</Button>
              </Link>
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">Benefits of Being an Indreni Kloset Reseller</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-indigo-600 flex-shrink-0 mt-1"></div>
                <div className="ml-4">
                  <h3 className="font-bold">No Inventory Required</h3>
                  <p className="text-gray-600">You don't need to purchase inventory upfront or manage stock.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-indigo-600 flex-shrink-0 mt-1"></div>
                <div className="ml-4">
                  <h3 className="font-bold">Quality Products</h3>
                  <p className="text-gray-600">Access to curated, high-quality fashion items that your customers will love.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-indigo-600 flex-shrink-0 mt-1"></div>
                <div className="ml-4">
                  <h3 className="font-bold">Flexible Working</h3>
                  <p className="text-gray-600">Work from anywhere, anytime, on your own schedule.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-indigo-600 flex-shrink-0 mt-1"></div>
                <div className="ml-4">
                  <h3 className="font-bold">Reliable Shipping</h3>
                  <p className="text-gray-600">We handle all logistics, ensuring products reach customers safely and on time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Register as Reseller
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
