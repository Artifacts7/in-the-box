
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({
  onMenuClick
}: HeaderProps) => {
  return <header className="py-6 md:py-10 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-8">
          {/* Logo and title in one row */}
          <div className="flex items-center gap-6 md:gap-8">
            <div className="w-[100px] md:w-[140px] p-3 md:p-4 border-2 border-purple-300 rounded-sm shadow-[6px_6px_0px_rgba(0,0,0,0.15)]" style={{
              background: "linear-gradient(to bottom, #f7f5ff 0%, #e5deff 100%)"
            }}>
              <img 
                src="/lovable-uploads/76c43e19-dd4e-42a8-9315-f676898aa4af.png" 
                alt="In The Box Logo" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h1 
                style={{
                  fontFamily: "'VT323', monospace",
                  color: '#7E69AB'
                }} 
                className="text-3xl md:text-6xl uppercase tracking-widest text-black font-bold"
              >
                IN THE BOX
              </h1>
              <p 
                style={{
                  fontFamily: "'VT323', monospace"
                }} 
                className="text-sm md:text-xl text-gray-600 tracking-wide mt-1"
              >
                Handpicked Newsletters Worth Your Inbox
              </p>
            </div>
          </div>
          
          {/* Mobile menu button aligned better */}
          <div className="md:hidden absolute top-6 right-4">
            {onMenuClick && <button 
              onClick={onMenuClick} 
              className="p-2 bg-purple-50 text-purple-600 hover:bg-purple-100 rounded-sm transition-colors"
            >
              <Menu size={24} />
            </button>}
          </div>
        </div>
      </div>
    </header>;
};

export default Header;
