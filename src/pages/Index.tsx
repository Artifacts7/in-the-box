
import { useState } from "react";
import { newsletters, getCategories, getUnreadCounts } from "../data/newsletters";
import Header from "../components/Header";
import NewsletterList from "../components/NewsletterList";
import CategorySidebar from "../components/CategorySidebar";
import Footer from "../components/Footer";

const Index = () => {
  const [selectedNewsletterID, setSelectedNewsletterID] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = getCategories();
  const unreadCounts = getUnreadCounts();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      
      <main className="flex-1 flex">
        {/* Left Sidebar - Categories */}
        <CategorySidebar 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          unreadCounts={unreadCounts}
        />
        
        {/* Main Section - Newsletter List (now takes full width) */}
        <div className="w-full bg-white p-4 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light text-black uppercase tracking-wider">
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
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
