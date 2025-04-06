
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Reselling Journey?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join Indreni Kloset today and transform your fashion business with our curated products, 
            flexible pricing, and hassle-free fulfillment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-navy hover:bg-gray-100" asChild>
              <Link to="/register">Join as a Reseller</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
