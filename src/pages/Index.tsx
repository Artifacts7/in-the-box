
import { useState } from "react";
import { newsletters } from "../data/newsletters";
import Header from "../components/Header";
import NewsletterList from "../components/NewsletterList";
import NewsletterPreview from "../components/NewsletterPreview";
import Footer from "../components/Footer";
import SubmitNewsletterDialog from "../components/SubmitNewsletterDialog";

const Index = () => {
  const [selectedNewsletterID, setSelectedNewsletterID] = useState<string | null>(null);
  
  const selectedNewsletter = selectedNewsletterID 
    ? newsletters.find(n => n.id === selectedNewsletterID) 
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex">
        <div className="w-full lg:w-2/5 border-r border-gray-200 bg-white p-4 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Inbox</h2>
              <SubmitNewsletterDialog />
            </div>
            
            <NewsletterList 
              newsletters={newsletters} 
              selectedNewsletterID={selectedNewsletterID}
              onNewsletterSelect={setSelectedNewsletterID}
            />
          </div>
        </div>
        
        <div className="hidden lg:block lg:w-3/5 bg-gray-50">
          {selectedNewsletter ? (
            <NewsletterPreview newsletter={selectedNewsletter} />
          ) : (
            <div className="h-full flex items-center justify-center text-newsletter-mediumGray">
              <div className="text-center">
                <h3 className="text-xl font-medium mb-2">Select a newsletter to preview</h3>
                <p>Click on any newsletter in your inbox to view its content here</p>
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
