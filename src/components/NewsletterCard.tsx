
import { ArrowRight, Mail } from "lucide-react";
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
    <div className="newsletter-card animate-fade-up">
      <Link to={`/newsletter/${newsletter.id}`} className="block">
        <div className="flex items-center gap-4 mb-4">
          {newsletter.imageUrl && (
            <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden bg-newsletter-blue flex items-center justify-center">
              <Mail className="text-white" size={18} />
            </div>
          )}
          <h3 className="newsletter-title">{newsletter.title}</h3>
        </div>
        
        <p className="newsletter-description mb-6">{newsletter.description}</p>
      </Link>
      
      <div className="flex flex-col space-y-4">
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
            <span className="mr-1">→</span> Iscriviti alla newsletter
            <ArrowRight className="ml-1 w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsletterCard;
