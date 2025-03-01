
import { useState, useEffect } from "react";
import { Newsletter } from "../types/Newsletter";
import { ExternalLink, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

interface NewsletterPreviewProps {
  newsletter: Newsletter;
}

const NewsletterPreview = ({ newsletter }: NewsletterPreviewProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  
  // Set the iframe URL based on the newsletter ID
  let iframeUrl = newsletter.linkUrl || "about:blank";
  if (newsletter.id === "1") {
    // Using a proxy service to bypass X-Frame-Options restrictions
    // This is a workaround as many sites like Substack block iframe embedding
    iframeUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent("https://artifactstech.substack.com/")}`;
  }

  // Mark the newsletter as read when viewed
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // In a real app, you would update the read status in your database
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [newsletter.id]);

  const handleIframeError = () => {
    console.log("Failed to load iframe content");
    setLoadError(true);
    setIsLoading(false);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Email header */}
      <div className="bg-black border-b border-neutral-800 p-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-light uppercase tracking-wider text-white">{newsletter.title}</h2>
          <div className="text-sm text-gray-400 mt-1 uppercase tracking-wider">
            {newsletter.sender} • {newsletter.date}
          </div>
        </div>
        <a 
          href={newsletter.linkUrl || "about:blank"} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white flex items-center gap-1 text-sm"
        >
          <span className="uppercase tracking-wider text-xs">Open</span> <ExternalLink size={14} />
        </a>
      </div>
      
      {/* Virtual machine frame for the newsletter content */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-gray-400 uppercase tracking-wider text-sm">Loading newsletter</p>
            </div>
          </div>
        )}
        
        {loadError ? (
          <div className="absolute inset-0 bg-black flex flex-col items-center justify-center">
            <div className="text-center max-w-md px-4">
              <h3 className="text-xl font-light mb-2 text-white uppercase tracking-wider">Content Not Available</h3>
              <p className="text-gray-400 mb-6">
                This newsletter doesn't allow embedding in other websites due to security policies.
              </p>
              <Button 
                variant="outline"
                onClick={() => window.open(newsletter.linkUrl, "_blank")}
                className="border-white text-white hover:bg-white hover:text-black uppercase tracking-wider font-light"
              >
                Visit Website <ExternalLink size={14} className="ml-2" />
              </Button>
            </div>
          </div>
        ) : (
          <iframe 
            src={iframeUrl}
            className="w-full h-full border-0 bg-white" 
            title={`${newsletter.title} content`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onLoad={() => setIsLoading(false)}
            onError={handleIframeError}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterPreview;
