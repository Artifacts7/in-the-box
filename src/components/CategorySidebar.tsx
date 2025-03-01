import { Folder, FolderOpen, Mail } from "lucide-react";
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
  // Define all categories including "All" in a unified list
  const allCategories = [{
    id: null,
    name: "All",
    icon: <Mail size={18} className="text-purple-600" />
  }, ...categories.map(category => ({
    id: category,
    name: category,
    icon: selectedCategory === category ? <FolderOpen size={18} className="text-purple-500" /> : <Folder size={18} className="text-purple-400" />
  }))];
  return <div className="w-full md:w-64 bg-white h-auto md:h-full overflow-y-auto py-4 md:py-6 border-b md:border-b-0 md:border-r border-gray-200" style={{
    fontFamily: "'VT323', monospace"
  }}>
      <div className="px-3 mb-1">
        <h2 className="text-md uppercase tracking-wider px-3 mb-3" style={{
        color: '#7E69AB',
        fontFamily: "'VT323', monospace"
      }}></h2>
      </div>
      
      <div className="space-y-2 px-3">
        {allCategories.map(category => <button key={category.id?.toString() || "all"} onClick={() => onCategorySelect(category.id)} className={`sidebar-category ${selectedCategory === category.id ? "sidebar-category-selected" : "sidebar-category-normal"}`} style={{
        fontFamily: "'VT323', monospace"
      }}>
            <div className="flex items-center gap-3">
              <span>
                {category.icon}
              </span>
              <span className="text-sm uppercase tracking-wider">{category.name}</span>
            </div>
            {unreadCounts[category.id as string] > 0 && <span className="bg-purple-100 text-purple-700 py-0.5 rounded-none px-[8px] text-xs mx-[5px]" style={{
          fontFamily: "'VT323', monospace"
        }}>
                {unreadCounts[category.id as string]}
              </span>}
          </button>)}
      </div>
    </div>;
};
export default CategorySidebar;