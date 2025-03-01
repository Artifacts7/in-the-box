
import { ArrowRight, Mail, Clock, Tag } from "lucide-react";
import { Newsletter } from "../types/Newsletter";
import { useState } from "react";
import { useToast } from "../components/ui/use-toast";
import { Link } from "react-router-dom";

interface NewsletterCardProps {
  newsletter: Newsletter;
}

const NewsletterCard = ({ newsletter }: NewsletterCardProps) => {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(false);
    
    toast({
      title: "Subscription successful!",
      description: `You've subscribed to ${newsletter.title}. Check your email to confirm.`,
      duration: 5000,
    });
    
    setEmail("");
  };

  return (
    <div className={`newsletter-card border-l-4 ${newsletter.isRead ? "border-l-transparent" : "border-l-newsletter-blue"} hover:shadow-md transition-all duration-200`}>
      <Link to={`/newsletter/${newsletter.id}`} className="block">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden bg-newsletter-blue flex items-center justify-center">
            <Mail className="text-white" size={18} />
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-semibold ${newsletter.isRead ? "text-newsletter-mediumGray" : "text-newsletter-darkGray"}`}>
              {newsletter.title}
            </h3>
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
      </Link>
      
      <div className="flex flex-col space-y-4 mt-4 pt-4 border-t border-gray-100">
        {isSubscribing ? (
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-newsletter-blue/30 transition-all"
              required
            />
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-newsletter-blue text-white px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-newsletter-blue/90"
              >
                Subscribe
              </button>
              <button
                type="button"
                onClick={() => setIsSubscribing(false)}
                className="text-newsletter-mediumGray px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button 
            onClick={() => setIsSubscribing(true)} 
            className="subscribe-button group"
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
