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

  // Get the display title with consistent wording
  const getDisplayTitle = () => {
    if (selectedCategory === null) {
      return "The full box";
    }
    return selectedCategory;
  };
  return <div className="min-h-screen flex flex-col bg-white text-black">
      <Header onMenuClick={toggleMobileCategories} />
      
      <main className="flex-1 grid md:grid-cols-[272px_1fr] gap-x-6 relative max-w-6xl mx-auto px-4 md:px-8 pt-3 md:pt-4">
        {/* Mobile category title that acts as dropdown trigger */}
        <div className="md:hidden mb-3 relative">
          
          
          {/* Dropdown menu for mobile */}
          {sidebarOpen && <div className="absolute top-full left-0 right-0 z-20 bg-white border border-purple-100 shadow-lg md:hidden" style={{
          boxShadow: "4px 4px 0px rgba(0,0,0,0.2)"
        }}>
              <div className="max-h-[60vh] overflow-y-auto">
                <CategorySidebar categories={categories} selectedCategory={selectedCategory} onCategorySelect={category => {
              setSelectedCategory(category);
              setSidebarOpen(false);
            }} unreadCounts={unreadCounts} />
              </div>
            </div>}
        </div>
        
        {/* Desktop Sidebar - Categories */}
        <div className="hidden md:block">
          <CategorySidebar categories={categories} selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory} unreadCounts={unreadCounts} />
        </div>
        
        {/* Main Section - Newsletter List */}
        <div className="w-full bg-white pt-2 px-3 md:px-4">
          <div className="max-w-4xl">
            <NewsletterList newsletters={newsletters} selectedNewsletterID={selectedNewsletterID} onNewsletterSelect={setSelectedNewsletterID} selectedCategory={selectedCategory} onCategorySelect={category => {
            setSelectedCategory(category);
            setSidebarOpen(false);
          }} isMobile={true} toggleMobileCategories={toggleMobileCategories} sidebarOpen={sidebarOpen} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Index;