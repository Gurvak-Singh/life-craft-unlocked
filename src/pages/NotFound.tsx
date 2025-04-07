
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container max-w-md text-center">
          <div className="text-lifecraft-500 text-8xl font-bold mb-6">404</div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Oops! It seems the page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-lifecraft-500 hover:bg-lifecraft-600">
              Back to Homepage
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
