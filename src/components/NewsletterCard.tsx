
import { ArrowRight, Tag } from "lucide-react";
import { Newsletter } from "../types/Newsletter";
import { useToast } from "../components/ui/use-toast";

interface NewsletterCardProps {
  newsletter: Newsletter;
  isSelected?: boolean;
  onClick?: () => void;
}

const NewsletterCard = ({ newsletter, isSelected = false, onClick }: NewsletterCardProps) => {
  const { toast } = useToast();

  const handleSubscribeButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Use the newsletter's linkUrl or a default URL
    const subscribeUrl = newsletter.linkUrl || "https://example.com/subscribe";
    
    // Open in a new tab
    window.open(subscribeUrl, "_blank", "noopener,noreferrer");
    
    toast({
      title: "Opening subscription page",
      description: `Redirecting to ${newsletter.title}'s subscription page.`,
      duration: 3000,
    });
  };

  return (
    <div 
      className={`newsletter-card cursor-pointer py-4 mb-2 ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4 mb-2">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-black">
              {newsletter.title}
            </h3>
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-1 gap-3">
            {newsletter.sender && <span className="normal-case">{newsletter.sender}</span>}
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
      
      <p className="newsletter-description text-sm text-gray-600 mb-3">{newsletter.description}</p>
      
      <div className="mt-3 pt-3 border-t border-gray-200">
        <button 
          onClick={handleSubscribeButtonClick} 
          className="subscribe-button flex items-center gap-1"
        >
          <span>Subscribe</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default NewsletterCard;
