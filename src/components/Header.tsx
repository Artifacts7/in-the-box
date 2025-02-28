
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="py-8 mb-8">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-newsletter-blue rounded-full flex items-center justify-center">
            <Mail className="text-white" size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold">NEWSLETTERATI</h1>
            <p className="text-newsletter-mediumGray">Un network di newsletter belle da leggere (e da condividere).</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
