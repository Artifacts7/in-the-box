
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({
  onMenuClick
}: HeaderProps) => {
  return (
    <header className="py-4 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="p-2 border-2 border-purple-200 rounded-none shadow-[3px_3px_0px_rgba(0,0,0,0.15)]" style={{
              background: "linear-gradient(to bottom, #f7f5ff 0%, #e5deff 100%)"
            }}>
              <img src="/lovable-uploads/76c43e19-dd4e-42a8-9315-f676898aa4af.png" alt="In The Box Logo" className="w-32 md:w-36 h-auto object-contain" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl md:text-3xl font-medium uppercase tracking-widest text-black mb-0" style={{
                fontFamily: "'VT323', monospace",
                color: '#7E69AB',
                textShadow: "2px 2px 0px rgba(0,0,0,0.1)"
              }}>
                In The Box
              </h1>
              <p className="text-sm text-gray-600 tracking-wide" style={{
                fontFamily: "'VT323', monospace"
              }}>
                A curated repository of newsletters
              </p>
            </div>
          </div>
          
          <button 
            onClick={onMenuClick}
            className="md:hidden p-2 border border-purple-200 rounded-none self-end"
            style={{
              background: "linear-gradient(to bottom, #f7f5ff 0%, #e5deff 100%)",
              boxShadow: "2px 2px 0px rgba(0,0,0,0.2)"
            }}
          >
            <Menu size={22} className="text-purple-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
