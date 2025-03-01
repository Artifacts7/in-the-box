
import { ArrowDown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 uppercase tracking-wider font-light">
            © {new Date().getFullYear()} In The Box
          </p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <a href="#" className="uppercase tracking-wider hover:text-black transition-colors text-xs">About</a>
            <a href="#" className="uppercase tracking-wider hover:text-black transition-colors text-xs">Contact</a>
            <a href="#" className="uppercase tracking-wider hover:text-black transition-colors text-xs">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
