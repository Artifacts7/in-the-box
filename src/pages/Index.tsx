
import { useState } from "react";
import { newsletters, getCategories, getUnreadCounts } from "../data/newsletters";
import Header from "../components/Header";
import NewsletterList from "../components/NewsletterList";
import CategorySidebar from "../components/CategorySidebar";
import NewsletterPreview from "../components/NewsletterPreview";
import Footer from "../components/Footer";
import SubmitNewsletterDialog from "../components/SubmitNewsletterDialog";

const Index = () => {
  const [selectedNewsletterID, setSelectedNewsletterID] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = getCategories();
  const unreadCounts = getUnreadCounts();
  
  const selectedNewsletter = selectedNewsletterID 
    ? newsletters.find(n => n.id === selectedNewsletterID) 
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Header />
      
      <main className="flex-1 flex">
        {/* Left Sidebar - Categories */}
        <CategorySidebar 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          unreadCounts={unreadCounts}
        />
        
        {/* Middle Section - Newsletter List */}
        <div className="w-full lg:w-2/5 border-r border-neutral-800 bg-black p-4 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light text-white uppercase tracking-wider">
                {selectedCategory === null 
                  ? "All Newsletters" 
                  : selectedCategory === "starred" 
                    ? "Favorites" 
                    : selectedCategory}
              </h2>
              <SubmitNewsletterDialog />
            </div>
            
            <NewsletterList 
              newsletters={newsletters} 
              selectedNewsletterID={selectedNewsletterID}
              onNewsletterSelect={setSelectedNewsletterID}
              selectedCategory={selectedCategory}
            />
          </div>
        </div>
        
        {/* Right Section - Newsletter Preview */}
        <div className="hidden lg:block lg:w-2/5 bg-black border-l border-neutral-800">
          {selectedNewsletter ? (
            <NewsletterPreview newsletter={selectedNewsletter} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              <div className="text-center max-w-md p-6">
                <h3 className="text-xl font-light mb-3 uppercase tracking-wider">Select a newsletter</h3>
                <p className="text-gray-400">Browse through the collection and click on any newsletter to preview its content here</p>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
