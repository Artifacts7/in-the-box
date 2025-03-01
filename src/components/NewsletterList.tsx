
import { useState } from "react";
import { Newsletter } from "../types/Newsletter";
import NewsletterCard from "./NewsletterCard";
import { Input } from "../components/ui/input";
import { Search, FileSearch } from "lucide-react";

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
  
  const filteredNewsletters = newsletters.filter(newsletter => {
    // Search filter
    const matchesSearch = 
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      newsletter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (newsletter.sender && newsletter.sender.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Category filter
    const matchesCategory = 
      selectedCategory === null || 
      newsletter.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full">
      <div className="relative mb-6">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600">
          <Search size={18} />
        </div>
        <Input
          type="text"
          placeholder="Search newsletters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-gray-50 border-gray-200 text-black placeholder-gray-500 focus-visible:ring-purple-300 focus-visible:border-purple-300"
        />
      </div>

      {filteredNewsletters.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-md border border-gray-200">
          <FileSearch size={48} className="mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-medium text-black mb-2">No results found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      ) : (
        <div className="space-y-0">
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
