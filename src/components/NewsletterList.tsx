
import { useState } from "react";
import { Newsletter } from "../types/Newsletter";
import NewsletterCard from "./NewsletterCard";
import { Input } from "../components/ui/input";
import { Search, Inbox, Mail, MailOpen, Tag } from "lucide-react";

interface NewsletterListProps {
  newsletters: Newsletter[];
}

const NewsletterList = ({ newsletters }: NewsletterListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  
  const filteredNewsletters = newsletters.filter(newsletter => {
    // Search filter
    const matchesSearch = 
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      newsletter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (newsletter.sender && newsletter.sender.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Read/unread filter
    const matchesReadStatus = 
      filter === "all" || 
      (filter === "unread" && !newsletter.isRead) || 
      (filter === "read" && newsletter.isRead);
    
    return matchesSearch && matchesReadStatus;
  });

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative mb-5">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-newsletter-mediumGray">
          <Search size={18} />
        </div>
        <Input
          type="text"
          placeholder="Search newsletters by title, sender, or content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-newsletter-mediumGray/20 focus-visible:ring-newsletter-blue/20"
        />
      </div>

      <div className="flex gap-2 mb-6 border-b border-gray-200">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            filter === "all" 
              ? "text-newsletter-blue" 
              : "text-newsletter-mediumGray hover:text-newsletter-darkGray"
          }`}
        >
          <div className="flex items-center gap-2">
            <Inbox size={16} />
            <span>All</span>
          </div>
          {filter === "all" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-newsletter-blue" />
          )}
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            filter === "unread" 
              ? "text-newsletter-blue" 
              : "text-newsletter-mediumGray hover:text-newsletter-darkGray"
          }`}
        >
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>Unread</span>
          </div>
          {filter === "unread" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-newsletter-blue" />
          )}
        </button>
        <button
          onClick={() => setFilter("read")}
          className={`px-4 py-2 text-sm font-medium transition-colors relative ${
            filter === "read" 
              ? "text-newsletter-blue" 
              : "text-newsletter-mediumGray hover:text-newsletter-darkGray"
          }`}
        >
          <div className="flex items-center gap-2">
            <MailOpen size={16} />
            <span>Read</span>
          </div>
          {filter === "read" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-newsletter-blue" />
          )}
        </button>
      </div>

      {filteredNewsletters.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <h3 className="text-xl font-medium text-newsletter-darkGray mb-2">No newsletters found</h3>
          <p className="text-newsletter-mediumGray">Try adjusting your search terms or filters</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredNewsletters.map((newsletter) => (
            <NewsletterCard key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsletterList;
