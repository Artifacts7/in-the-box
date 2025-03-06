
import { Menu } from "lucide-react";
interface HeaderProps {
  onMenuClick?: () => void;
}
const Header = ({
  onMenuClick
}: HeaderProps) => {
  return <header className="py-4 md:py-5 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 border-2 border-purple-200 rounded-none shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" style={{
            background: "linear-gradient(to bottom, #f7f5ff 0%, #e5deff 100%)"
          }}>
              <img src="/lovable-uploads/76c43e19-dd4e-42a8-9315-f676898aa4af.png" alt="In The Box Logo" className="w-28 md:w-32 h-auto object-contain" />
            </div>
            <div className="text-left">
              <h1 style={{
              fontFamily: "'VT323', monospace",
              color: '#7E69AB',
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)"
            }} className="text-2xl md:text-3xl uppercase tracking-widest text-black mb-1 font-bold">IN THE BOX</h1>
              <p style={{
              fontFamily: "'VT323', monospace"
            }} className="text-xs md:text-sm text-gray-600 tracking-wide">
                Handpicked Newsletters Worth Your Inbox
              </p>
            </div>
          </div>
          
          
        </div>
      </div>
    </header>;
};
export default Header;
