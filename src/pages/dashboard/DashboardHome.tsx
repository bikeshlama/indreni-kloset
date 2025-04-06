
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, TrendingUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  // This would be replaced with actual data from an API
  const stats = [
    {
      title: "Active Orders",
      value: 12,
      icon: <Clock className="h-6 w-6 text-navy" />,
      link: "/dashboard/orders",
      linkText: "View Orders",
      change: "+2 from last month",
    },
    {
      title: "Available Products",
      value: 128,
      icon: <Package className="h-6 w-6 text-navy" />,
      link: "/dashboard/products",
      linkText: "Browse Products",
      change: "+15 new additions",
    },
    {
      title: "Total Orders",
      value: 56,
      icon: <ShoppingCart className="h-6 w-6 text-navy" />,
      link: "/dashboard/orders",
      linkText: "Order History",
      change: "+8 from last month",
    },
    {
      title: "Earnings",
      value: "$3,240",
      icon: <TrendingUp className="h-6 w-6 text-navy" />,
      link: "/dashboard/analytics",
      linkText: "View Analytics",
      change: "+12% from last month",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Welcome to Your Reseller Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Manage your reselling business, browse products, and submit orders
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              <Button
                variant="link"
                className="mt-2 h-auto p-0 text-navy"
                asChild
              >
                <Link to={stat.link}>{stat.linkText}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-navy hover:bg-navy/90" asChild>
              <Link to="/dashboard/products">Browse Products</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/dashboard/orders">View Orders</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/dashboard/account">Update Profile</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Latest Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-navy pl-4 py-2">
              <h4 className="font-semibold">New products added</h4>
              <p className="text-sm text-gray-500">15 new products were added to the catalog</p>
              <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <h4 className="font-semibold">Order status update</h4>
              <p className="text-sm text-gray-500">Order #12345 has been shipped</p>
              <p className="text-xs text-gray-400 mt-1">Yesterday</p>
            </div>
            <div className="border-l-4 border-navy pl-4 py-2">
              <h4 className="font-semibold">Special promotion</h4>
              <p className="text-sm text-gray-500">Seasonal discount on all outerwear items</p>
              <p className="text-xs text-gray-400 mt-1">3 days ago</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
