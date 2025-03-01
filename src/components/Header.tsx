
import { Inbox } from "lucide-react";

const Header = () => {
  return (
    <header className="py-8 bg-black border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-3xl font-light uppercase tracking-widest text-white">In The Box</h1>
            <p className="text-gray-400 font-light">A curated collection of the best newsletters</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
