
import { useState } from "react";
import ProductFilters from "@/components/products/ProductFilters";
import ProductCard from "@/components/products/ProductCard";
import OrderForm from "@/components/orders/OrderForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Product } from "@/types";

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    sortBy: "newest",
    priceRange: [0, 1000] as [number, number],
    size: "all",
  });

  // This would be replaced with actual API data
  const mockProducts: Product[] = [
    {
      id: "prod-001",
      name: "Classic White Tee",
      description: "A timeless classic white t-shirt made from premium cotton.",
      basePrice: 12.99,
      images: ["/placeholder.svg", "/placeholder.svg"],
      sizes: ["S", "M", "L", "XL"],
      stock: 50,
      category: "tops",
    },
    {
      id: "prod-002",
      name: "Black Denim Jeans",
      description: "Stylish black denim jeans with a modern fit.",
      basePrice: 34.99,
      images: ["/placeholder.svg"],
      sizes: ["28", "30", "32", "34", "36"],
      stock: 30,
      category: "pants",
    },
    {
      id: "prod-003",
      name: "Summer Floral Dress",
      description: "Lightweight floral dress perfect for summer days.",
      basePrice: 29.99,
      images: ["/placeholder.svg", "/placeholder.svg"],
      sizes: ["XS", "S", "M", "L"],
      stock: 25,
      category: "dresses",
    },
    {
      id: "prod-004",
      name: "Navy Blazer",
      description: "Professional navy blazer suitable for any occasion.",
      basePrice: 59.99,
      images: ["/placeholder.svg"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      stock: 20,
      category: "outerwear",
    },
    {
      id: "prod-005",
      name: "Leather Belt",
      description: "Quality leather belt with metal buckle.",
      basePrice: 19.99,
      images: ["/placeholder.svg"],
      sizes: ["S", "M", "L"],
      stock: 40,
      category: "accessories",
    },
    {
      id: "prod-006",
      name: "Striped Sweater",
      description: "Warm striped sweater made from soft yarn.",
      basePrice: 39.99,
      images: ["/placeholder.svg"],
      sizes: ["S", "M", "L", "XL"],
      stock: 15,
      category: "tops",
    },
    {
      id: "prod-007",
      name: "Athletic Shorts",
      description: "Breathable athletic shorts for an active lifestyle.",
      basePrice: 24.99,
      images: ["/placeholder.svg", "/placeholder.svg"],
      sizes: ["S", "M", "L", "XL"],
      stock: 35,
      category: "pants",
    },
    {
      id: "prod-008",
      name: "Silver Hoop Earrings",
      description: "Classic silver hoop earrings for everyday wear.",
      basePrice: 15.99,
      images: ["/placeholder.svg"],
      sizes: ["One Size"],
      stock: 50,
      category: "accessories",
    }
  ];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         product.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = filters.category === "all" || product.category === filters.category;
    const matchesSize = filters.size === "all" || product.sizes.includes(filters.size);
    
    return matchesSearch && matchesCategory && matchesSize;
  });
  
  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case "price-low":
        return a.basePrice - b.basePrice;
      case "price-high":
        return b.basePrice - a.basePrice;
      case "popular":
        // This would ideally be based on actual popularity data
        return 0;
      case "newest":
      default:
        // For mock purposes, we'll just use the order they're defined
        return 0;
    }
  });

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderDialogOpen(true);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Browse Products</h1>
      
      <ProductFilters onFilter={setFilters} />
      
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onOrderClick={handleOrderClick} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 border rounded-md">
          <p className="text-gray-500">No products found matching your criteria.</p>
        </div>
      )}
      
      <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Submit Order</DialogTitle>
          </DialogHeader>
          <OrderForm product={selectedProduct} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
