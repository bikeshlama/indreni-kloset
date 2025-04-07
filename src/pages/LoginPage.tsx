
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/auth/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600/10 to-purple-600/10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="mt-3 text-gray-600">
              Log in to access your reseller dashboard
            </p>
          </div>
          
          <div className="relative animate-zoom-in">
            {/* Animated decorative elements */}
            <div className="absolute -top-6 -left-8 w-24 h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <LoginForm />
          </div>
          
          <div className="text-center mt-8 animate-slide-up animation-delay-200">
            <p className="mt-2 text-sm text-gray-600">
              New to Indreni Kloset?{" "}
              <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors">
                Register as a reseller
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
