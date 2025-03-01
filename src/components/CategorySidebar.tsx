
import { Inbox, Star, Tag } from "lucide-react";

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
  
  // Define minimal system categories
  const systemCategories = [
    { id: null, name: "All", icon: <Inbox size={18} /> },
    { id: "starred", name: "Favorites", icon: <Star size={18} /> },
  ];
  
  // Define content categories based on the data
  const contentCategories = categories.map(category => ({
    id: category,
    name: category,
    icon: <Tag size={18} />
  }));

  return (
    <div className="w-52 bg-white h-full overflow-y-auto pt-6 border-r border-gray-100 shadow-sm">
      <div className="px-4 mb-4">
        <h2 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-2">Browse</h2>
      </div>
      
      <div className="mb-6 space-y-1">
        {systemCategories.map((category) => (
          <button
            key={category.id?.toString() || "all"}
            onClick={() => onCategorySelect(category.id)}
            className={`w-full text-left px-4 py-2 flex items-center justify-between rounded-r-full transition-colors ${
              selectedCategory === category.id 
                ? "bg-[#D3E4FD] text-[#2643B9] font-medium" 
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={selectedCategory === category.id ? "text-[#2643B9]" : "text-gray-500"}>
                {category.icon}
              </span>
              <span className="text-sm">{category.name}</span>
            </div>
            {unreadCounts[category.id as string] > 0 && (
              <span className="text-xs font-medium bg-[#F2FCE2] text-gray-700 px-2 py-0.5 rounded-full">
                {unreadCounts[category.id as string]}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="px-4 mb-2">
        <h2 className="text-xs font-medium text-gray-400 tracking-wider uppercase mb-2">Categories</h2>
      </div>
      
      <div className="space-y-1">
        {contentCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`w-full text-left px-4 py-2 flex items-center justify-between rounded-r-full transition-colors ${
              selectedCategory === category.id 
                ? "bg-[#D3E4FD] text-[#2643B9] font-medium" 
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className={selectedCategory === category.id ? "text-[#2643B9]" : "text-gray-500"}>
                {category.icon}
              </span>
              <span className="text-sm">{category.name}</span>
            </div>
            {unreadCounts[category.id] > 0 && (
              <span className="text-xs font-medium bg-[#F2FCE2] text-gray-700 px-2 py-0.5 rounded-full">
                {unreadCounts[category.id]}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
