
import { ArrowDown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider font-light"
             style={{ fontFamily: "'VT323', monospace" }}>
            © {new Date().getFullYear()} In The Box
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
