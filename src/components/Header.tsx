
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({
  onMenuClick
}: HeaderProps) => {
  return (
    <header className="py-8 md:py-10 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img 
              src="/lovable-uploads/76c43e19-dd4e-42a8-9315-f676898aa4af.png" 
              alt="In The Box Logo" 
              className="w-16 md:w-20 h-auto object-contain" 
            />
            <div className="text-left">
              <h1 
                className="text-2xl md:text-3xl font-light uppercase tracking-widest text-black mb-1"
                style={{ fontFamily: "'VT323', monospace", color: '#7E69AB' }}
              >
                In The Box
              </h1>
              <p 
                className="text-sm md:text-base text-gray-600 tracking-wide"
                style={{ fontFamily: "'VT323', monospace" }}
              >
                Handpicked Newsletters Worth Your Inbox
              </p>
            </div>
          </div>
          
          <button 
            onClick={onMenuClick} 
            className="md:hidden p-2 text-purple-600 hover:text-purple-800 focus:outline-none" 
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
