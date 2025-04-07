
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

const ProductsPage = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // This would typically fetch from your API - mocking some data for now
      return [
        { id: 1, name: "Summer Dress", price: 45.99, category: "Dresses", image: "/placeholder.svg" },
        { id: 2, name: "Casual Jeans", price: 39.99, category: "Pants", image: "/placeholder.svg" },
        { id: 3, name: "Cotton T-Shirt", price: 19.99, category: "Tops", image: "/placeholder.svg" },
        { id: 4, name: "Formal Blazer", price: 89.99, category: "Outerwear", image: "/placeholder.svg" },
        { id: 5, name: "Floral Skirt", price: 34.99, category: "Skirts", image: "/placeholder.svg" },
        { id: 6, name: "Winter Jacket", price: 129.99, category: "Outerwear", image: "/placeholder.svg" },
      ];
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our curated collection of trendy fashion items at wholesale prices. 
              Perfect for reselling and growing your fashion business.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-pulse">Loading products...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products?.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 bg-gray-200">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-indigo-500 font-medium mb-1">{product.category}</p>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                    <div className="flex space-x-2">
                      <Button variant="outline">View Details</Button>
                      <Button>Add to Order</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
