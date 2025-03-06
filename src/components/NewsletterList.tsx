
import { useState } from "react";
import { Newsletter } from "../types/Newsletter";
import NewsletterCard from "./NewsletterCard";
import { Input } from "../components/ui/input";
import { Search, FileSearch, Cpu, Vote, Newspaper, BookOpen, Music, Utensils, Users, Mail } from "lucide-react";

interface NewsletterListProps {
  newsletters: Newsletter[];
  selectedNewsletterID: string | null;
  onNewsletterSelect: (id: string) => void;
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}

const NewsletterList = ({ 
  newsletters, 
  selectedNewsletterID,
  onNewsletterSelect,
  selectedCategory,
  onCategorySelect
}: NewsletterListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [animatingIcon, setAnimatingIcon] = useState(false);
  
  // Get the appropriate icon for the selected category
  const getCategoryIcon = () => {
    if (selectedCategory === null) {
      return <Mail size={30} className={`text-purple-600 ${animatingIcon ? 'animate-bounce' : ''}`} />;
    }
    
    switch(selectedCategory.toLowerCase()) {
      case "technology":
        return <Cpu size={30} className={`text-purple-600 ${animatingIcon ? 'animate-pulse' : ''}`} />;
      case "politics":
        return <Vote size={30} className={`text-purple-600 ${animatingIcon ? 'animate-spin' : ''}`} />;
      case "news":
        return <Newspaper size={30} className={`text-purple-600 ${animatingIcon ? 'animate-bounce' : ''}`} />;
      case "education":
        return <BookOpen size={30} className={`text-purple-600 ${animatingIcon ? 'animate-pulse' : ''}`} />;
      case "entertainment":
        return <Music size={30} className={`text-purple-600 ${animatingIcon ? 'animate-bounce' : ''}`} />;
      case "food":
        return <Utensils size={30} className={`text-purple-600 ${animatingIcon ? 'animate-spin' : ''}`} />;
      case "social":
        return <Users size={30} className={`text-purple-600 ${animatingIcon ? 'animate-pulse' : ''}`} />;
      default:
        return <Mail size={30} className={`text-purple-600 ${animatingIcon ? 'animate-bounce' : ''}`} />;
    }
  };
  
  // Handle category icon click to toggle animation
  const handleIconClick = () => {
    setAnimatingIcon(true);
    setTimeout(() => setAnimatingIcon(false), 1000);
  };
  
  // First filter the newsletters
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

  // Then sort the filtered newsletters alphabetically by title
  const sortedNewsletters = [...filteredNewsletters].sort((a, b) => 
    a.title.localeCompare(b.title)
  );

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <button onClick={handleIconClick} className="cursor-pointer">
            {getCategoryIcon()}
          </button>
          <h2 
            className="text-2xl font-bold uppercase tracking-widest"
            style={{ 
              fontFamily: "'VT323', monospace", 
              color: '#7E69AB' 
            }}
          >
            {selectedCategory === null ? "All Newsletters" : selectedCategory}
          </h2>
        </div>
        
        <div className="relative max-w-[400px] mx-auto">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-600">
            <Search size={18} />
          </div>
          <Input
            type="text"
            placeholder="Search newsletters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-11 bg-gray-50 border-gray-200 text-black placeholder-gray-500 focus-visible:ring-purple-300 focus-visible:border-purple-300 w-full"
            style={{ 
              borderRadius: '0', 
              fontFamily: "'VT323', monospace",
              fontSize: '1.1rem',
              letterSpacing: '0.5px',
              boxShadow: '2px 2px 0px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </div>

      {sortedNewsletters.length === 0 ? (
        <div 
          className="text-center py-12 md:py-16 bg-gray-50 border border-gray-200" 
          style={{ 
            boxShadow: '4px 4px 0px rgba(0,0,0,0.1)',
            fontFamily: "'VT323', monospace"
          }}
        >
          <FileSearch size={48} className="mx-auto mb-4 text-purple-400" />
          <h3 
            className="text-xl font-medium text-black mb-2" 
            style={{ fontFamily: "'VT323', monospace" }}
          >
            No results found
          </h3>
          <p 
            className="text-gray-600" 
            style={{ fontFamily: "'VT323', monospace" }}
          >
            Try adjusting your search terms or filters
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedNewsletters.map((newsletter) => (
            <NewsletterCard 
              key={newsletter.id} 
              newsletter={newsletter} 
              isSelected={newsletter.id === selectedNewsletterID}
              onClick={() => onNewsletterSelect(newsletter.id)}
              onTagClick={onCategorySelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsletterList;
