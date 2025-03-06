
import { useState, useEffect } from "react";
import { newsletters, getCategories, getUnreadCounts } from "../data/newsletters";
import Header from "../components/Header";
import NewsletterList from "../components/NewsletterList";
import CategorySidebar from "../components/CategorySidebar";
import Footer from "../components/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

const Index = () => {
  const [selectedNewsletterID, setSelectedNewsletterID] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const categories = getCategories();
  const unreadCounts = getUnreadCounts();

  // Close dropdown on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const toggleMobileCategories = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return <div className="min-h-screen flex flex-col bg-white text-black">
      <Header onMenuClick={toggleMobileCategories} />
      
      <main className="flex-1 grid md:grid-cols-[272px_1fr] relative">
        {/* Mobile category dropdown button */}
        <div className="md:hidden py-2 px-4 bg-slate-50 relative">
          <button 
            onClick={toggleMobileCategories} 
            className="flex items-center justify-between w-full bg-white py-2 px-4 border border-purple-200 shadow-sm"
            style={{
              fontFamily: "'VT323', monospace",
              background: "linear-gradient(to bottom, #f7f5ff 0%, #e5deff 100%)",
              boxShadow: "2px 2px 0px rgba(0,0,0,0.1)"
            }}
          >
            <span className="font-medium uppercase tracking-wider text-purple-700">
              {selectedCategory === null ? "All Categories" : selectedCategory}
            </span>
            {sidebarOpen ? (
              <ChevronUp size={20} className="text-purple-600" />
            ) : (
              <ChevronDown size={20} className="text-purple-600" />
            )}
          </button>
          
          {/* Dropdown menu for mobile - positioned directly below the button */}
          {sidebarOpen && (
            <div 
              className="absolute top-full left-0 right-0 z-20 bg-white border border-purple-100 shadow-lg md:hidden"
              style={{ boxShadow: "4px 4px 0px rgba(0,0,0,0.2)" }}
            >
              <div className="max-h-[60vh] overflow-y-auto">
                <CategorySidebar 
                  categories={categories} 
                  selectedCategory={selectedCategory} 
                  onCategorySelect={category => {
                    setSelectedCategory(category);
                    setSidebarOpen(false);
                  }} 
                  unreadCounts={unreadCounts} 
                />
              </div>
            </div>
          )}
        </div>
        
        {/* Desktop Sidebar - Categories */}
        <div className="hidden md:block border-r border-gray-200">
          <CategorySidebar 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onCategorySelect={setSelectedCategory} 
            unreadCounts={unreadCounts} 
          />
        </div>
        
        {/* Main Section - Newsletter List */}
        <div className="w-full bg-white pt-2 px-4 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <NewsletterList 
              newsletters={newsletters} 
              selectedNewsletterID={selectedNewsletterID} 
              onNewsletterSelect={setSelectedNewsletterID} 
              selectedCategory={selectedCategory} 
              onCategorySelect={category => {
                setSelectedCategory(category);
                setSidebarOpen(false);
              }} 
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Index;
