
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 mt-20 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-newsletter-mediumGray text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Newsletterati. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-newsletter-mediumGray">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse-subtle" />
            <span>for newsletter lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
