
import { ArrowRight, Mail, Clock, Tag, Star } from "lucide-react";
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
      className={`newsletter-card border-l-4 cursor-pointer ${
        newsletter.isRead ? "border-l-transparent" : "border-l-newsletter-blue"
      } ${
        isSelected ? "bg-newsletter-lightGray border-newsletter-blue/50" : "hover:shadow-md"
      } transition-all duration-200`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden bg-newsletter-blue flex items-center justify-center">
          <Mail className="text-white" size={18} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className={`text-lg font-semibold ${newsletter.isRead ? "text-newsletter-mediumGray" : "text-newsletter-darkGray"}`}>
              {newsletter.title}
            </h3>
            {newsletter.isStarred && (
              <Star className="text-yellow-400 fill-yellow-400" size={18} />
            )}
          </div>
          <div className="flex items-center text-xs text-newsletter-mediumGray mt-1 gap-3">
            {newsletter.sender && <span>{newsletter.sender}</span>}
            {newsletter.date && (
              <span className="flex items-center gap-1">
                <Clock size={12} /> {newsletter.date}
              </span>
            )}
            {newsletter.category && (
              <span className="flex items-center gap-1">
                <Tag size={12} /> {newsletter.category}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <p className="newsletter-description text-sm text-gray-600 line-clamp-2">{newsletter.description}</p>
      
      <div className="flex flex-col space-y-4 mt-4 pt-4 border-t border-gray-100">
        {isSubscribing ? (
          <form onSubmit={handleSubscribe} onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-newsletter-blue/30 transition-all"
                required
                onClick={(e) => e.stopPropagation()}
              />
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-newsletter-blue text-white px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-newsletter-blue/90"
                  onClick={(e) => e.stopPropagation()}
                >
                  Subscribe
                </button>
                <button
                  type="button"
                  onClick={handleCancelButtonClick}
                  className="text-newsletter-mediumGray px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-100"
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
            <span className="mr-1">→</span> Subscribe to this newsletter
            <ArrowRight className="ml-1 w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsletterCard;
