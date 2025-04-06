
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Reseller",
      image: "/placeholder.svg",
      quote: "Indreni Kloset transformed my side hustle into a full-time business. Their platform is intuitive, and I love not having to worry about inventory management."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Boutique Owner",
      image: "/placeholder.svg",
      quote: "The quality of products and the ease of order submission make this platform a game-changer for my online boutique. My customers are consistently satisfied."
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Social Media Reseller",
      image: "/placeholder.svg",
      quote: "As someone who sells primarily through social media, having high-quality product images and reliable fulfillment has doubled my sales in just three months."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Resellers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful resellers who have grown their business with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-700">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
