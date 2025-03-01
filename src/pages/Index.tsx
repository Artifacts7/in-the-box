
import { useState, useEffect } from "react";
import { newsletters, getCategories, getUnreadCounts } from "../data/newsletters";
import Header from "../components/Header";
import NewsletterList from "../components/NewsletterList";
import CategorySidebar from "../components/CategorySidebar";
import Footer from "../components/Footer";

const Index = () => {
  const [selectedNewsletterID, setSelectedNewsletterID] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  
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

  // Add overlay click handler to close sidebar on mobile
  const handleOverlayClick = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      
      <main className="flex-1 flex flex-col md:flex-row relative">
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
            onClick={handleOverlayClick}
          />
        )}
        
        {/* Left Sidebar - Categories */}
        <div className={`md:static fixed inset-y-0 left-0 z-20 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
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
