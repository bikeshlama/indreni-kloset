
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";

interface OrderFormProps {
  product: Product | null;
}

const OrderForm = ({ product }: OrderFormProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: "",
    customerAddress: "",
    size: "",
    quantity: 1,
    notes: "",
    isPaid: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSizeChange = (value: string) => {
    setFormData({ ...formData, size: value });
  };

  const handleIsPaidChange = (checked: boolean) => {
    setFormData({ ...formData, isPaid: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    // This would be replaced with actual order submission logic
    console.log("Submitting order:", { product, ...formData });

    toast({
      title: "Order submitted successfully!",
      description: "Your order has been sent for processing.",
    });

    navigate("/dashboard/orders");
  };

  if (!product) {
    return (
      <div className="text-center py-8">
        <p>Please select a product to order.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Submit Order: {product.name}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="customerName">Customer Name</Label>
            <Input
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="customerAddress">Delivery Address</Label>
            <Textarea
              id="customerAddress"
              name="customerAddress"
              value={formData.customerAddress}
              onChange={handleChange}
              required
              className="min-h-24"
            />
          </div>
          
          <div>
            <Label htmlFor="notes">Order Notes (Optional)</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="min-h-20"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="size">Size</Label>
            <Select
              value={formData.size}
              onValueChange={handleSizeChange}
              required
            >
              <SelectTrigger id="size">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              max={product.stock}
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="pt-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="isPaid">Mark as Paid</Label>
              <Switch
                id="isPaid"
                checked={formData.isPaid}
                onCheckedChange={handleIsPaidChange}
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              If unchecked, the order will be marked as Cash on Delivery
            </p>
          </div>
          
          <div className="pt-4">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>Product:</span>
                <span className="font-medium">{product.name}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Base Price:</span>
                <span className="font-medium">${product.basePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Quantity:</span>
                <span className="font-medium">{formData.quantity}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Total Base Cost:</span>
                <span>${(product.basePrice * formData.quantity).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end pt-4">
        <Button type="submit" className="bg-navy hover:bg-navy/90 px-8">
          Submit Order
        </Button>
      </div>
    </form>
  );
};

export default OrderForm;
