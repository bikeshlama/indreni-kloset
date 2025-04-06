
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'reseller' | 'admin';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  images: string[];
  sizes: string[];
  stock: number;
  category: string;
}

export interface Order {
  id: string;
  resellerId: string;
  customerName: string;
  customerAddress: string;
  product: Product;
  size: string;
  quantity: number;
  notes?: string;
  isPaid: boolean;
  status: 'pending' | 'accepted' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}
