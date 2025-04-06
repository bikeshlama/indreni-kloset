
import { useState } from "react";
import OrdersList from "@/components/orders/OrdersList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Order } from "@/types";

const OrdersPage = () => {
  // This would be replaced with actual API data
  const mockOrders: Order[] = [
    {
      id: "order-001",
      resellerId: "user-123",
      customerName: "John Smith",
      customerAddress: "123 Main St, Anytown, AN 12345",
      product: {
        id: "prod-001",
        name: "Classic White Tee",
        description: "A timeless classic white t-shirt made from premium cotton.",
        basePrice: 12.99,
        images: ["/placeholder.svg"],
        sizes: ["S", "M", "L", "XL"],
        stock: 50,
        category: "tops",
      },
      size: "M",
      quantity: 2,
      notes: "Please gift wrap",
      isPaid: true,
      status: "delivered",
      createdAt: "2024-03-15T10:30:00Z",
    },
    {
      id: "order-002",
      resellerId: "user-123",
      customerName: "Jane Doe",
      customerAddress: "456 Oak Ave, Othertown, OT 67890",
      product: {
        id: "prod-003",
        name: "Summer Floral Dress",
        description: "Lightweight floral dress perfect for summer days.",
        basePrice: 29.99,
        images: ["/placeholder.svg"],
        sizes: ["XS", "S", "M", "L"],
        stock: 25,
        category: "dresses",
      },
      size: "S",
      quantity: 1,
      isPaid: false,
      status: "shipped",
      createdAt: "2024-03-20T14:45:00Z",
    },
    {
      id: "order-003",
      resellerId: "user-123",
      customerName: "Robert Johnson",
      customerAddress: "789 Pine St, Somewhere, SW 13579",
      product: {
        id: "prod-004",
        name: "Navy Blazer",
        description: "Professional navy blazer suitable for any occasion.",
        basePrice: 59.99,
        images: ["/placeholder.svg"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 20,
        category: "outerwear",
      },
      size: "L",
      quantity: 1,
      isPaid: true,
      status: "processing",
      createdAt: "2024-04-02T09:15:00Z",
    },
    {
      id: "order-004",
      resellerId: "user-123",
      customerName: "Emily Wilson",
      customerAddress: "321 Elm St, Elsewhere, EL 97531",
      product: {
        id: "prod-005",
        name: "Leather Belt",
        description: "Quality leather belt with metal buckle.",
        basePrice: 19.99,
        images: ["/placeholder.svg"],
        sizes: ["S", "M", "L"],
        stock: 40,
        category: "accessories",
      },
      size: "M",
      quantity: 1,
      isPaid: true,
      status: "accepted",
      createdAt: "2024-04-05T16:20:00Z",
    },
    {
      id: "order-005",
      resellerId: "user-123",
      customerName: "Michael Brown",
      customerAddress: "654 Maple Dr, Nowhere, NW 86420",
      product: {
        id: "prod-002",
        name: "Black Denim Jeans",
        description: "Stylish black denim jeans with a modern fit.",
        basePrice: 34.99,
        images: ["/placeholder.svg"],
        sizes: ["28", "30", "32", "34", "36"],
        stock: 30,
        category: "pants",
      },
      size: "32",
      quantity: 1,
      notes: "Leave at the door",
      isPaid: false,
      status: "pending",
      createdAt: "2024-04-06T11:10:00Z",
    }
  ];

  const activeOrders = mockOrders.filter(
    (order) => ["pending", "accepted", "processing", "shipped"].includes(order.status)
  );
  
  const completedOrders = mockOrders.filter(
    (order) => order.status === "delivered"
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      
      <Tabs defaultValue="active" className="mb-6">
        <TabsList>
          <TabsTrigger value="active">
            Active Orders ({activeOrders.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed Orders ({completedOrders.length})
          </TabsTrigger>
          <TabsTrigger value="all">
            All Orders ({mockOrders.length})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="mt-6">
          <OrdersList orders={activeOrders} />
        </TabsContent>
        
        <TabsContent value="completed" className="mt-6">
          <OrdersList orders={completedOrders} />
        </TabsContent>
        
        <TabsContent value="all" className="mt-6">
          <OrdersList orders={mockOrders} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersPage;
