
import { useState } from "react";
import { Newsletter } from "../types/Newsletter";
import NewsletterCard from "./NewsletterCard";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

interface NewsletterListProps {
  newsletters: Newsletter[];
}

const NewsletterList = ({ newsletters }: NewsletterListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredNewsletters = newsletters.filter(newsletter => 
    newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    newsletter.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (newsletter.publisher && newsletter.publisher.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative mb-8">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-newsletter-mediumGray">
          <Search size={18} />
        </div>
        <Input
          type="text"
          placeholder="Search newsletters by title, description, or publisher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-newsletter-mediumGray/20 focus-visible:ring-newsletter-blue/20"
        />
      </div>

      {filteredNewsletters.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-newsletter-darkGray mb-2">No newsletters found</h3>
          <p className="text-newsletter-mediumGray">Try adjusting your search terms</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNewsletters.map((newsletter) => (
            <NewsletterCard key={newsletter.id} newsletter={newsletter} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsletterList;
