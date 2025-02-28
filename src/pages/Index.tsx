
import { newsletters } from "../data/newsletters";
import Header from "../components/Header";
import NewsletterList from "../components/NewsletterList";
import Footer from "../components/Footer";
import SubmitNewsletterDialog from "../components/SubmitNewsletterDialog";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 md:px-0">
        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-semibold">Discover Newsletters</h2>
            <SubmitNewsletterDialog />
          </div>
          
          <NewsletterList newsletters={newsletters} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
