
import { ArrowRight, Mail, ArrowDown, Tag, Star } from "lucide-react";
import { Newsletter } from "../types/Newsletter";
import { useState } from "react";
import { useToast } from "../components/ui/use-toast";

interface NewsletterCardProps {
  newsletter: Newsletter;
  isSelected?: boolean;
  onClick?: () => void;
}

const NewsletterCard = ({ newsletter, isSelected = false, onClick }: NewsletterCardProps) => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubscribing(false);
    
    toast({
      title: "Subscription successful!",
      description: `You've subscribed to ${newsletter.title}. Check your email to confirm.`,
      duration: 5000,
    });
    
    setEmail("");
  };

  const handleSubscribeButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSubscribing(true);
  };

  const handleCancelButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSubscribing(false);
  };

  return (
    <div 
      className={`newsletter-card cursor-pointer ${
        newsletter.isRead ? "border-transparent" : "border-white"
      } ${
        isSelected ? "bg-neutral-800" : ""
      } transition-all duration-200`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4 mb-3">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className={`text-lg uppercase tracking-wider font-light ${newsletter.isRead ? "text-gray-400" : "text-white"}`}>
              {newsletter.title}
            </h3>
            {newsletter.isStarred && (
              <Star className="text-white" size={18} />
            )}
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-1 gap-3">
            {newsletter.sender && <span className="uppercase tracking-wider">{newsletter.sender}</span>}
            {newsletter.date && (
              <span className="uppercase tracking-wider">{newsletter.date}</span>
            )}
            {newsletter.category && (
              <span className="flex items-center gap-1 uppercase tracking-wider">
                <Tag size={12} /> {newsletter.category}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <p className="newsletter-description text-sm text-gray-400 line-clamp-2">{newsletter.description}</p>
      
      <div className="flex flex-col space-y-4 mt-4 pt-4 border-t border-neutral-800">
        {isSubscribing ? (
          <form onSubmit={handleSubscribe} onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="border border-neutral-700 bg-neutral-900 rounded-none px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white transition-all text-white"
                required
                onClick={(e) => e.stopPropagation()}
              />
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 text-sm font-light uppercase tracking-wider transition-all hover:bg-gray-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  Subscribe
                </button>
                <button
                  type="button"
                  onClick={handleCancelButtonClick}
                  className="text-gray-400 px-4 py-2 text-sm font-light uppercase tracking-wider transition-all hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        ) : (
          <button 
            onClick={handleSubscribeButtonClick} 
            className="subscribe-button group text-left"
          >
            <ArrowDown className="mr-2 w-3.5 h-3.5" />
            <span className="uppercase tracking-wider text-xs">Subscribe</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsletterCard;
