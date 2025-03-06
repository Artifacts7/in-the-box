
import { Mail, ChevronRight, Cpu, Vote, Newspaper, BookOpen, Music, Utensils, Users } from "lucide-react";
import { useState, useEffect } from "react";

interface CategorySidebarProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  unreadCounts: Record<string, number>;
}

const CategorySidebar = ({
  categories,
  selectedCategory,
  onCategorySelect,
  unreadCounts
}: CategorySidebarProps) => {
  const [animating, setAnimating] = useState<string | null>(null);
  
  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [animating]);
  
  const getCategoryIcon = (category: string | null, isSelected: boolean) => {
    const isAnimating = category === animating;
    
    if (category === null) {
      return <Mail size={20} className={`text-purple-600 ${isAnimating ? 'translate-x-1' : ''} transition-transform`} />;
    }
    
    switch(category.toLowerCase()) {
      case "technology":
        return <Cpu size={20} className={`text-purple-500 ${isAnimating ? 'translate-y-1' : ''} transition-transform`} />;
      case "politics":
        return <Vote size={20} className={`text-purple-500 ${isAnimating ? 'rotate-12' : ''} transition-transform`} />;
      case "news":
        return <Newspaper size={20} className={`text-purple-500 ${isAnimating ? 'scale-110' : ''} transition-transform`} />;
      case "education":
        return <BookOpen size={20} className={`text-purple-500 ${isAnimating ? 'translate-y-1' : ''} transition-transform`} />;
      case "entertainment":
        return <Music size={20} className={`text-purple-500 ${isAnimating ? 'scale-110' : ''} transition-transform`} />;
      case "food":
        return <Utensils size={20} className={`text-purple-500 ${isAnimating ? 'rotate-12' : ''} transition-transform`} />;
      case "social":
        return <Users size={20} className={`text-purple-500 ${isAnimating ? 'translate-x-1' : ''} transition-transform`} />;
      default:
        return <Mail size={20} className={`text-purple-500 ${isAnimating ? 'translate-y-1' : ''} transition-transform`} />;
    }
  };
  
  const handleCategoryClick = (categoryId: string | null) => {
    onCategorySelect(categoryId);
    setAnimating(categoryId);
  };

  const allCategories = [{
    id: null,
    name: "All",
    icon: getCategoryIcon(null, selectedCategory === null)
  }, ...categories.map(category => ({
    id: category,
    name: category,
    icon: getCategoryIcon(category, selectedCategory === category)
  }))];
  
  return (
    <div 
      className="w-full md:w-72 bg-white h-auto md:h-full overflow-y-auto py-6 border-b md:border-b-0 border-gray-200 transition-all duration-300 ease-in-out animate-fade-in" 
      style={{ fontFamily: "'VT323', monospace" }}
    >
      <div className="space-y-2 px-4">
        <h2 className="text-xl font-bold uppercase tracking-wider text-purple-700 mb-4" style={{ 
          fontFamily: "'VT323', monospace",
          textShadow: "1px 1px 0 rgba(0,0,0,0.1)"
        }}>Categories</h2>
        
        {allCategories.map(category => (
          <button 
            key={category.id?.toString() || "all"} 
            onClick={() => handleCategoryClick(category.id)} 
            className={`sidebar-category w-full flex items-center justify-between p-3 transition-all duration-200 ${
              selectedCategory === category.id ? "sidebar-category-selected" : "sidebar-category-normal"
            }`} 
            style={{ fontFamily: "'VT323', monospace" }}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-6 h-6">
                {category.icon}
              </span>
              <span className="text-sm uppercase tracking-wider">{category.name}</span>
            </div>
            <div className="flex items-center justify-end w-12 flex-shrink-0">
              {unreadCounts[category.id || 'total'] > 0 && (
                <span 
                  className="bg-purple-100 text-purple-700 py-0.5 px-2.5 text-xs min-w-[1.5rem] text-center rounded-sm"
                  style={{ fontFamily: "'VT323', monospace" }}
                >
                  {unreadCounts[category.id || 'total']}
                </span>
              )}
              {selectedCategory !== category.id && (
                <ChevronRight size={16} className="text-purple-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
