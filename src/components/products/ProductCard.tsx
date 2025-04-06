
import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/types";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  onOrderClick: (product: Product) => void;
}

const ProductCard = ({ product, onOrderClick }: ProductCardProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { toast } = useToast();

  const handleDownloadImage = () => {
    // In a real application, this would trigger a download of the image
    toast({
      title: "Image downloaded",
      description: "Product image has been downloaded for marketing."
    });
  };

  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.images[selectedImageIndex] || "/placeholder.svg"}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {product.images.length > 1 && (
        <div className="flex gap-1 p-2 justify-center">
          {product.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`w-2 h-2 rounded-full ${
                selectedImageIndex === index ? "bg-navy" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        <div className="flex items-center justify-between">
          <span className="font-medium text-lg">${product.basePrice.toFixed(2)}</span>
          <span className="text-sm text-gray-500">
            {product.sizes.join(", ")}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex flex-col gap-2">
        <Button 
          variant="outline" 
          size="sm"
          className="w-full flex items-center gap-2"
          onClick={handleDownloadImage}
        >
          <Download className="h-4 w-4" />
          <span>Download Image</span>
        </Button>
        
        <Button 
          className="w-full bg-navy hover:bg-navy/90 flex items-center gap-2"
          onClick={() => onOrderClick(product)}
        >
          <span>Submit Order</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
