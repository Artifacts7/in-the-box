
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
    <div className="w-64 bg-black h-full overflow-y-auto pt-10 border-r border-neutral-800">
      <div className="mb-8 space-y-1 px-4">
        {systemCategories.map((category) => (
          <button
            key={category.id?.toString() || "all"}
            onClick={() => onCategorySelect(category.id)}
            className={`sidebar-category ${
              selectedCategory === category.id 
                ? "sidebar-category-selected" 
                : "sidebar-category-normal"
            }`}
          >
            <div className="flex items-center gap-3">
              <span>
                {category.icon}
              </span>
              <span className="text-sm uppercase tracking-wider font-light">{category.name}</span>
            </div>
            {unreadCounts[category.id as string] > 0 && (
              <span className="text-xs font-light bg-neutral-800 text-white px-2 py-0.5">
                {unreadCounts[category.id as string]}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="px-4 mb-3">
        <h2 className="text-xs font-light text-gray-500 uppercase tracking-widest mb-3">Categories</h2>
      </div>
      
      <div className="space-y-1 px-4">
        {contentCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`sidebar-category ${
              selectedCategory === category.id 
                ? "sidebar-category-selected" 
                : "sidebar-category-normal"
            }`}
          >
            <div className="flex items-center gap-3">
              <span>
                {category.icon}
              </span>
              <span className="text-sm uppercase tracking-wider font-light">{category.name}</span>
            </div>
            {unreadCounts[category.id] > 0 && (
              <span className="text-xs font-light bg-neutral-800 text-white px-2 py-0.5">
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
