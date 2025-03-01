
import { useState } from "react";
import { Newsletter } from "../types/Newsletter";
import NewsletterCard from "./NewsletterCard";
import { Input } from "../components/ui/input";
import { ArrowDown, Search, Inbox, Mail, MailOpen, Tag } from "lucide-react";

interface NewsletterListProps {
  newsletters: Newsletter[];
  selectedNewsletterID: string | null;
  onNewsletterSelect: (id: string) => void;
  selectedCategory: string | null;
}

const NewsletterList = ({ 
  newsletters, 
  selectedNewsletterID,
  onNewsletterSelect,
  selectedCategory
}: NewsletterListProps) => {
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
    
    // Category filter
    const matchesCategory = 
      selectedCategory === null || 
      selectedCategory === "unread" ? !newsletter.isRead : 
      selectedCategory === "starred" ? newsletter.isStarred : 
      newsletter.category === selectedCategory;
    
    return matchesSearch && matchesReadStatus && matchesCategory;
  });

  return (
    <div className="w-full">
      <div className="relative mb-6">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Search size={18} />
        </div>
        <Input
          type="text"
          placeholder="Search newsletters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-neutral-900 border-neutral-800 text-white placeholder-gray-500 focus-visible:ring-gray-700 focus-visible:border-gray-700"
        />
      </div>

      <div className="flex gap-6 mb-6 border-b border-neutral-800">
        <button
          onClick={() => setFilter("all")}
          className={`px-0 py-3 text-sm font-light uppercase tracking-wider transition-colors relative ${
            filter === "all" 
              ? "text-white" 
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <span>All</span>
          </div>
          {filter === "all" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
          )}
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`px-0 py-3 text-sm font-light uppercase tracking-wider transition-colors relative ${
            filter === "unread" 
              ? "text-white" 
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <span>Unread</span>
          </div>
          {filter === "unread" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
          )}
        </button>
        <button
          onClick={() => setFilter("read")}
          className={`px-0 py-3 text-sm font-light uppercase tracking-wider transition-colors relative ${
            filter === "read" 
              ? "text-white" 
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          <div className="flex items-center gap-2">
            <span>Read</span>
          </div>
          {filter === "read" && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
          )}
        </button>
      </div>

      {filteredNewsletters.length === 0 ? (
        <div className="text-center py-16 bg-neutral-900 rounded-none">
          <h3 className="text-xl font-light text-white mb-2 uppercase tracking-wider">No results found</h3>
          <p className="text-gray-400">Try adjusting your search terms or filters</p>
        </div>
      ) : (
        <div className="space-y-0 divide-y divide-neutral-800">
          {filteredNewsletters.map((newsletter) => (
            <NewsletterCard 
              key={newsletter.id} 
              newsletter={newsletter} 
              isSelected={newsletter.id === selectedNewsletterID}
              onClick={() => onNewsletterSelect(newsletter.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsletterList;
