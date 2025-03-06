
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
  // For animations
  const [animating, setAnimating] = useState<string | null>(null);
  
  // Animation effect
  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [animating]);
  
  // Category-specific icon mapping
  const getCategoryIcon = (category: string | null, isSelected: boolean) => {
    const isAnimating = category === animating;
    const animationClass = isAnimating ? "animate-pulse" : "";
    
    if (category === null) {
      return <Mail size={18} className="text-purple-600" />;
    }
    
    switch(category.toLowerCase()) {
      case "technology":
        return <Cpu size={18} className={`text-purple-500 ${animationClass}`} />;
      case "politics":
        return <Vote size={18} className={`text-purple-500 ${animationClass}`} />;
      case "news":
        return <Newspaper size={18} className={`text-purple-500 ${animationClass}`} />;
      case "education":
        return <BookOpen size={18} className={`text-purple-500 ${animationClass}`} />;
      case "entertainment":
        return <Music size={18} className={`text-purple-500 ${animationClass}`} />;
      case "food":
        return <Utensils size={18} className={`text-purple-500 ${animationClass}`} />;
      case "social":
        return <Users size={18} className={`text-purple-500 ${animationClass}`} />;
      default:
        return <Mail size={18} className={`text-purple-500 ${animationClass}`} />;
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
      className="w-full md:w-72 bg-white h-auto md:h-full overflow-y-auto py-6 md:py-8 border-b md:border-b-0 md:border-r border-gray-200 transition-all duration-300 ease-in-out animate-fade-in" 
      style={{ fontFamily: "'VT323', monospace" }}
    >
      <div className="space-y-2 px-4">
        {allCategories.map(category => (
          <button 
            key={category.id?.toString() || "all"} 
            onClick={() => handleCategoryClick(category.id)} 
            className={`sidebar-category w-full flex items-center justify-between p-3 transition-all duration-200 ${
              selectedCategory === category.id ? "sidebar-category-selected" : "sidebar-category-normal"
            }`} 
            style={{ fontFamily: "'VT323', monospace" }}
          >
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-6 h-6">
                {category.icon}
              </span>
              <span className="text-sm uppercase tracking-wider">{category.name}</span>
            </div>
            <div className="flex items-center">
              {unreadCounts[category.id || 'total'] > 0 && (
                <span 
                  className="bg-purple-100 text-purple-700 py-0.5 px-2.5 text-xs"
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
