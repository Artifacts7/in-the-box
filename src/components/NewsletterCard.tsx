
import { ArrowRight, Tag } from "lucide-react";
import { Newsletter } from "../types/Newsletter";
import { useToast } from "../components/ui/use-toast";

interface NewsletterCardProps {
  newsletter: Newsletter;
  isSelected?: boolean;
  onClick?: () => void;
  onTagClick?: (category: string) => void;
}

const NewsletterCard = ({ 
  newsletter, 
  isSelected = false, 
  onClick,
  onTagClick 
}: NewsletterCardProps) => {
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

  const handleTagClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onTagClick && newsletter.category) {
      onTagClick(newsletter.category);
    }
  };

  return (
    <div 
      className={`newsletter-card cursor-pointer p-6 relative transition-all duration-200 hover:bg-purple-50 ${isSelected ? "selected" : ""}`}
      onClick={onClick}
      style={{ 
        imageRendering: 'pixelated', 
        border: '2px solid', 
        borderColor: isSelected ? '#8B5CF6' : '#e2e8f0',
        transition: 'all 0.2s ease',
        fontFamily: "'VT323', monospace"
      }}
    >
      <div className="flex flex-col text-left">
        <div className="flex items-start justify-between mb-2">
          <h3 
            className="text-lg font-medium text-black"
            style={{ fontFamily: "'VT323', monospace" }}
          >
            {newsletter.title}
          </h3>
          
          {/* Subscribe button in top-right for larger screens, hidden on mobile */}
          <button 
            onClick={handleSubscribeButtonClick}
            className="hidden md:inline-flex items-center gap-1 px-4 py-1.5 bg-purple-50 hover:bg-purple-100 transition-colors"
            style={{ 
              imageRendering: 'pixelated', 
              boxShadow: '2px 2px 0px rgba(0,0,0,0.1)',
              borderRadius: '0',
              fontFamily: "'VT323', monospace",
              fontSize: '1rem'
            }}
          >
            <span className="text-purple-600">Subscribe</span>
            <ArrowRight className="w-4 h-4 text-purple-600" />
          </button>
        </div>
        
        <div 
          className="flex items-center text-xs text-gray-500 gap-4 mb-3"
          style={{ fontFamily: "'VT323', monospace" }}
        >
          {newsletter.sender && (
            <span className="normal-case">{newsletter.sender}</span>
          )}
          {newsletter.category && (
            <button 
              className="flex items-center gap-1.5 uppercase tracking-wider hover:text-purple-700 transition-colors"
              onClick={handleTagClick}
              style={{ fontFamily: "'VT323', monospace" }}
            >
              <Tag size={12} className="text-purple-500" /> 
              {newsletter.category}
            </button>
          )}
        </div>
        
        <p 
          className="newsletter-description text-sm text-gray-600 mb-3"
          style={{ fontFamily: "'VT323', monospace" }}
        >
          {newsletter.description}
        </p>
        
        {/* Subscribe button at the bottom for mobile screens */}
        <button 
          onClick={handleSubscribeButtonClick}
          className="md:hidden self-start mt-2 inline-flex items-center gap-1 px-4 py-1.5 bg-purple-50 hover:bg-purple-100 transition-colors"
          style={{ 
            imageRendering: 'pixelated', 
            boxShadow: '2px 2px 0px rgba(0,0,0,0.1)',
            borderRadius: '0',
            fontFamily: "'VT323', monospace",
            fontSize: '1rem'
          }}
        >
          <span className="text-purple-600">Subscribe</span>
          <ArrowRight className="w-4 h-4 text-purple-600" />
        </button>
      </div>
    </div>
  );
};

export default NewsletterCard;
