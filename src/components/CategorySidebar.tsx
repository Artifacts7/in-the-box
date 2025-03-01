
import { Inbox, Star, Clock, Send, Calendar, FileText, Mail, Tag } from "lucide-react";
import { useState } from "react";

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
  
  // Define system categories that should appear at the top
  const systemCategories = [
    { id: null, name: "All", icon: <Inbox size={20} /> },
    { id: "unread", name: "Unread", icon: <Mail size={20} /> },
    { id: "starred", name: "Starred", icon: <Star size={20} /> },
    { id: "snoozed", name: "Snoozed", icon: <Clock size={20} /> },
    { id: "sent", name: "Sent", icon: <Send size={20} /> },
    { id: "scheduled", name: "Scheduled", icon: <Calendar size={20} /> },
    { id: "drafts", name: "Drafts", icon: <FileText size={20} /> },
  ];
  
  // Define content categories based on the data
  const contentCategories = categories.map(category => ({
    id: category,
    name: category,
    icon: <Tag size={20} />
  }));

  return (
    <div className="w-56 bg-gray-100 h-full overflow-y-auto pt-2 border-r border-gray-200">
      <div className="mb-8">
        {systemCategories.map((category) => (
          <button
            key={category.id?.toString() || "all"}
            onClick={() => onCategorySelect(category.id)}
            className={`w-full text-left px-6 py-3 flex items-center justify-between rounded-r-full transition-colors ${
              selectedCategory === category.id 
                ? "bg-blue-100 text-blue-700 font-medium" 
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={selectedCategory === category.id ? "text-blue-700" : "text-gray-500"}>
                {category.icon}
              </span>
              <span>{category.name}</span>
            </div>
            {unreadCounts[category.id as string] > 0 && (
              <span className="text-sm font-medium text-gray-700">
                {unreadCounts[category.id as string]}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 px-6 mb-2">
        <h2 className="text-sm font-medium text-gray-500 mb-2">CATEGORIES</h2>
      </div>
      
      <div>
        {contentCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`w-full text-left px-6 py-3 flex items-center justify-between rounded-r-full transition-colors ${
              selectedCategory === category.id 
                ? "bg-blue-100 text-blue-700 font-medium" 
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={selectedCategory === category.id ? "text-blue-700" : "text-gray-500"}>
                {category.icon}
              </span>
              <span>{category.name}</span>
            </div>
            {unreadCounts[category.id] > 0 && (
              <span className="text-sm font-medium text-gray-700">
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
