
import { useState, useEffect, useRef } from "react";
import { newsletters, getCategories, getUnreadCounts } from "../data/newsletters";
import Header from "../components/Header";
import NewsletterList from "../components/NewsletterList";
import CategorySidebar from "../components/CategorySidebar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const Index = () => {
  const [selectedNewsletterID, setSelectedNewsletterID] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  
  const categories = getCategories();
  const unreadCounts = getUnreadCounts();
  
  // Close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle clicks outside the sidebar to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarOpen]);

  // Add overlay click handler to close sidebar on mobile
  const handleOverlayClick = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  const toggleMobileCategories = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header onMenuClick={toggleMobileCategories} />
      
      <main className="flex-1 flex flex-col md:flex-row relative">
        {/* Mobile category dropdown button */}
        <div className="md:hidden flex justify-between items-center px-4 py-3 bg-purple-50 border-b border-purple-100">
          <button 
            onClick={toggleMobileCategories}
            className="flex items-center justify-between w-full bg-white py-2 px-4 border border-purple-200 shadow-sm"
            style={{ fontFamily: "'VT323', monospace" }}
          >
            <span className="font-medium uppercase tracking-wider text-purple-700">
              {selectedCategory === null ? "All Categories" : selectedCategory}
            </span>
            {sidebarOpen ? <ChevronUp size={20} className="text-purple-600" /> : <ChevronDown size={20} className="text-purple-600" />}
          </button>
        </div>
        
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden animate-fade-in"
            onClick={handleOverlayClick}
          />
        )}
        
        {/* Left Sidebar - Categories */}
        <div 
          ref={sidebarRef}
          className={`md:static fixed inset-y-0 left-0 z-20 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="md:hidden flex justify-between items-center p-4 bg-purple-100 border-b border-purple-200">
            <h3 className="text-purple-700 font-medium uppercase" style={{ fontFamily: "'VT323', monospace" }}>Categories</h3>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-full bg-white text-purple-700 hover:bg-purple-50"
            >
              <X size={20} />
            </button>
          </div>
          <CategorySidebar 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={(category) => {
              setSelectedCategory(category);
              // Close sidebar on mobile when category is selected
              setSidebarOpen(false);
            }}
            unreadCounts={unreadCounts}
          />
        </div>
        
        {/* Main Section - Newsletter List */}
        <div className="w-full bg-white p-4 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light text-black uppercase tracking-wider"
                  style={{ fontFamily: "'VT323', monospace", color: '#7E69AB' }}>
                {selectedCategory === null 
                  ? "All Newsletters" 
                  : selectedCategory}
              </h2>
            </div>
            
            <NewsletterList 
              newsletters={newsletters} 
              selectedNewsletterID={selectedNewsletterID}
              onNewsletterSelect={setSelectedNewsletterID}
              selectedCategory={selectedCategory}
              onCategorySelect={(category) => {
                setSelectedCategory(category);
                // Close sidebar on mobile when category is selected through tag
                setSidebarOpen(false);
              }}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
