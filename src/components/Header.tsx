
import { Inbox } from "lucide-react";

const Header = () => {
  return (
    <header className="py-8 mb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-newsletter-blue rounded-full flex items-center justify-center">
            <Inbox className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold">IN THE BOX</h1>
            <p className="text-newsletter-mediumGray">A curated collection of the best newsletters, all in one place.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
