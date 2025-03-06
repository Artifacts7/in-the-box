
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({
  onMenuClick
}: HeaderProps) => {
  return (
    <header className="py-4 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-[272px_1fr] items-center w-full">
          {/* Logo section - aligned with category sidebar */}
          <div className="flex items-center">
            <div className="w-[68px] p-2 border-2 border-purple-200 rounded-none shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" style={{
              background: "linear-gradient(to bottom, #f7f5ff 0%, #e5deff 100%)"
            }}>
              <img src="/lovable-uploads/76c43e19-dd4e-42a8-9315-f676898aa4af.png" alt="In The Box Logo" className="w-full h-auto object-contain" />
            </div>
          </div>
          
          {/* Title section - aligned with newsletter list */}
          <div className="flex items-center justify-between">
            <div>
              <h1 style={{
                fontFamily: "'VT323', monospace",
                color: '#7E69AB',
                textShadow: "2px 2px 0px rgba(0,0,0,0.1)"
              }} className="text-2xl md:text-3xl uppercase tracking-widest text-black font-bold">IN THE BOX</h1>
              <p style={{
                fontFamily: "'VT323', monospace"
              }} className="text-sm text-gray-600 tracking-wide">
                Handpicked Newsletters Worth Your Inbox
              </p>
            </div>
            
            {/* Mobile menu button for responsiveness */}
            <div className="md:hidden">
              {onMenuClick && (
                <button 
                  onClick={onMenuClick}
                  className="p-2 text-purple-600 hover:bg-purple-50 rounded-sm"
                >
                  <Menu size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
