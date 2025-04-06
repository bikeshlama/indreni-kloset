
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductUpload from "@/components/admin/ProductUpload";
import ProductList from "@/components/admin/ProductList";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const AdminPanel = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          toast({
            title: "Authentication required",
            description: "You need to be logged in to access the admin panel",
            variant: "destructive",
          });
          return;
        }

        // Using string-based table name to avoid TypeScript errors
        const { data: roles, error } = await supabase
          .from('user_roles')
          .select('*')
          .eq('user_id', session.user.id)
          .eq('role', 'admin');

        if (error) {
          console.error("Error checking admin status:", error);
          toast({
            title: "Error",
            description: "Could not verify admin privileges",
            variant: "destructive",
          });
          return;
        }
        
        if (roles && roles.length > 0) {
          setIsAdmin(true);
        } else {
          toast({
            title: "Access denied",
            description: "You don't have admin privileges",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
        toast({
          title: "Error",
          description: "Could not verify admin privileges",
          variant: "destructive",
        });
      }
    };

    checkAdminStatus();
  }, [toast]);

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-full">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Access Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p>You need admin privileges to access this panel.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <p className="text-muted-foreground">Manage products and images for your store</p>
      </div>
      
      <Tabs defaultValue="products" className="w-full">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="upload">Upload Images</TabsTrigger>
        </TabsList>
        <TabsContent value="products" className="mt-4">
          <ProductList />
        </TabsContent>
        <TabsContent value="upload" className="mt-4">
          <ProductUpload />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;
