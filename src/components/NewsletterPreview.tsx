
import { useState, useEffect } from "react";
import { Newsletter } from "../types/Newsletter";
import { ExternalLink } from "lucide-react";

interface NewsletterPreviewProps {
  newsletter: Newsletter;
}

const NewsletterPreview = ({ newsletter }: NewsletterPreviewProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Set the iframe URL based on the newsletter ID
  let iframeUrl = newsletter.linkUrl || "about:blank";
  if (newsletter.id === "1") {
    iframeUrl = "https://artifactstech.substack.com/";
  }

  // Mark the newsletter as read when viewed
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would update the read status in your database
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [newsletter.id]);

  return (
    <div className="h-full flex flex-col">
      {/* Email header */}
      <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">{newsletter.title}</h2>
          <div className="text-sm text-newsletter-mediumGray mt-1">
            From {newsletter.sender} • {newsletter.date}
          </div>
        </div>
        <a 
          href={iframeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-newsletter-blue hover:text-newsletter-blue/80 flex items-center gap-1 text-sm"
        >
          Open in browser <ExternalLink size={14} />
        </a>
      </div>
      
      {/* Virtual machine frame for the newsletter content */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-newsletter-blue mx-auto mb-4"></div>
              <p className="text-newsletter-mediumGray">Loading newsletter content...</p>
            </div>
          </div>
        )}
        
        <iframe 
          src={iframeUrl}
          className="w-full h-full border-0" 
          title={`${newsletter.title} content`}
          sandbox="allow-scripts allow-same-origin allow-forms"
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default NewsletterPreview;
