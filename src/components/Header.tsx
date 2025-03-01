
import { Inbox } from "lucide-react";

const Header = () => {
  return (
    <header className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-3xl font-light uppercase tracking-widest text-black">In The Box</h1>
            <p className="text-gray-600 font-light" style={{ fontFamily: "'VT323', monospace" }}>
              A curated collection of the best newsletters in the EU
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
