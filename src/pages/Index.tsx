import { useState, useEffect, useRef } from "react";
import { newsletters, getCategories, getUnreadCounts } from "../data/newsletters";
import Header from "../components/Header";
import NewsletterList from "../components/NewsletterList";
import CategorySidebar from "../components/CategorySidebar";
import Footer from "../components/Footer";
import { ChevronDown, X } from "lucide-react";
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
  return <div className="min-h-screen flex flex-col bg-white text-black">
      <Header onMenuClick={toggleMobileCategories} />
      
      <main className="flex-1 flex flex-col md:flex-row relative">
        {/* Mobile category dropdown button */}
        <div className="md:hidden py-3 px-4 bg-slate-50">
          <button onClick={toggleMobileCategories} className="flex items-center justify-between w-full bg-white py-2 px-4 border border-purple-200 shadow-sm" style={{
          fontFamily: "'VT323', monospace",
          background: "linear-gradient(to bottom, #f7f5ff 0%, #e5deff 100%)",
          boxShadow: "2px 2px 0px rgba(0,0,0,0.1)"
        }}>
            <span className="font-medium uppercase tracking-wider text-purple-700">
              {selectedCategory === null ? "All Categories" : selectedCategory}
            </span>
            <ChevronDown size={20} className="text-purple-600" />
          </button>
        </div>
        
        {/* Mobile overlay */}
        {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden animate-fade-in" onClick={handleOverlayClick} />}
        
        {/* Dropdown menu for mobile */}
        {sidebarOpen && <div ref={sidebarRef} className="absolute top-full left-0 right-0 z-20 bg-white border-b border-purple-100 shadow-lg md:hidden animate-fade-in">
            <div className="flex justify-between items-center p-3 bg-purple-100 border-b border-purple-200">
              <h3 className="text-purple-700 font-medium uppercase" style={{
            fontFamily: "'VT323', monospace"
          }}>
                Categories
              </h3>
              <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-full bg-white text-purple-700 hover:bg-purple-50">
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              <CategorySidebar categories={categories} selectedCategory={selectedCategory} onCategorySelect={category => {
            setSelectedCategory(category);
            setSidebarOpen(false);
          }} unreadCounts={unreadCounts} />
            </div>
          </div>}
        
        {/* Desktop Sidebar - Categories */}
        <div className="hidden md:block">
          <CategorySidebar categories={categories} selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory} unreadCounts={unreadCounts} />
        </div>
        
        {/* Main Section - Newsletter List */}
        <div className="w-full bg-white p-4 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <NewsletterList newsletters={newsletters} selectedNewsletterID={selectedNewsletterID} onNewsletterSelect={setSelectedNewsletterID} selectedCategory={selectedCategory} onCategorySelect={category => {
            setSelectedCategory(category);
            setSidebarOpen(false);
          }} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Index;