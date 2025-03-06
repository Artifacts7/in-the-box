
import { ArrowDown, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider font-light"
             style={{ fontFamily: "'VT323', monospace" }}>
            © {new Date().getFullYear()} In The Box
          </p>
          
          <p className="text-purple-600 text-sm tracking-wider font-light mt-2 md:mt-0"
             style={{ fontFamily: "'VT323', monospace" }}>
            You want to add your newsletter? Reach out to{" "}
            <a 
              href="mailto:lorenzo@artifactstech.com" 
              className="text-purple-700 hover:text-purple-900 transition-colors relative group"
              style={{ fontFamily: "'VT323', monospace" }}
            >
              <span className="inline-flex items-center gap-1">
                lorenzo@artifactstech.com
                <Mail size={14} className="group-hover:scale-110 transition-transform" />
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
