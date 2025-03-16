
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({
  onMenuClick
}: HeaderProps) => {
  return <header className="py-2 md:py-4 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center w-full gap-2 md:gap-4">
          {/* Logo and title in one row */}
          <div className="flex items-center gap-3 md:gap-4 w-full">
            <div style={{
            background: "linear-gradient(to bottom, #f7f5ff 0%, #e5deff 100%)"
          }} className="w-[80px] md:w-[110px] p-2 border-2 border-purple-300 shadow-[4px_4px_0px_rgba(0,0,0,0.15)] px-[10px] rounded-sm">
              <img src="/lovable-uploads/76c43e19-dd4e-42a8-9315-f676898aa4af.png" alt="In The Box Logo" className="w-full h-auto object-contain" />
            </div>
            
            <div className="text-left">
              <h1 style={{
              fontFamily: "'VT323', monospace",
              color: '#7E69AB'
            }} className="text-xl md:text-4xl uppercase tracking-widest text-black font-bold px-[8px]">
                IN THE BOX
              </h1>
              <p style={{
              fontFamily: "'VT323', monospace"
            }} className="text-xs md:text-base text-gray-600 tracking-wide mt-0 px-[8px]">
                Handpicked Newsletters Worth Your Inbox
              </p>
            </div>
          </div>
          
          {/* Mobile menu button aligned better */}
          <div className="md:hidden absolute top-4 right-4">
            {onMenuClick && (
              <button onClick={onMenuClick} aria-label="Toggle Menu">
                <Menu size={24} />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>;
};

export default Header;
