import { Menu } from "lucide-react";
interface HeaderProps {
  onMenuClick?: () => void;
}
const Header = ({
  onMenuClick
}: HeaderProps) => {
  return <header className="py-6 md:py-8 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div className="flex items-center gap-5">
            <div className="p-3 border-2 border-purple-200 rounded-none shadow-[4px_4px_0px_rgba(0,0,0,0.2)]" style={{
            background: "linear-gradient(to bottom, #f7f5ff 0%, #e5deff 100%)"
          }}>
              <img src="/lovable-uploads/76c43e19-dd4e-42a8-9315-f676898aa4af.png" alt="In The Box Logo" className="w-36 md:w-40 h-auto object-contain" />
            </div>
            <div className="text-left">
              <h1 style={{
              fontFamily: "'VT323', monospace",
              color: '#7E69AB',
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)"
            }} className="text-3xl md:text-4xl uppercase tracking-widest text-black mb-1 font-bold px-[50px]">IN THE BOX</h1>
              <p style={{
              fontFamily: "'VT323', monospace"
            }} className="text-sm md:text-base text-gray-600 tracking-wide px-[50px]">
                Handpicked Newsletters Worth Your Inbox
              </p>
            </div>
          </div>
          
          
        </div>
      </div>
    </header>;
};
export default Header;