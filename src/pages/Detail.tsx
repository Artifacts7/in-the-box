
import { useParams, Link } from "react-router-dom";
import { newsletters } from "../data/newsletters";
import { ArrowLeft, Mail, Calendar, User, Tag, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import { useState } from "react";
import Footer from "../components/Footer";

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const newsletter = newsletters.find(n => n.id === id);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscription successful!",
      description: `You've subscribed to ${newsletter?.title}. Check your email to confirm.`,
      duration: 5000,
    });
    setEmail("");
  };

  if (!newsletter) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Newsletter not found</h1>
        <Link to="/" className="text-newsletter-blue hover:underline">
          <ArrowLeft className="inline mr-2" size={16} />
          Back to inbox
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-4 md:px-0 py-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center text-newsletter-mediumGray hover:text-newsletter-blue mb-8 transition-colors">
            <ArrowLeft className="mr-2" size={16} />
            Back to inbox
          </Link>
          
          <div className="bg-white rounded-lg shadow-subtle border border-gray-100 mb-10 animate-fade-up">
            <div className="border-b border-gray-100 p-6">
              <h1 className="text-2xl font-bold mb-4">{newsletter.title}</h1>
              
              <div className="flex flex-wrap items-center gap-y-3">
                <div className="flex items-center mr-4">
                  <div className="w-10 h-10 bg-newsletter-blue rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                    <Mail className="text-white" size={18} />
                  </div>
                  {newsletter.sender && (
                    <div className="text-sm">
                      <div className="font-medium">{newsletter.sender}</div>
                      <div className="text-newsletter-mediumGray">sender@example.com</div>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center ml-auto space-x-4 text-sm text-newsletter-mediumGray">
                  {newsletter.date && (
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{newsletter.date}</span>
                    </div>
                  )}
                  {newsletter.category && (
                    <div className="flex items-center">
                      <Tag size={14} className="mr-1" />
                      <span>{newsletter.category}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="prose max-w-none">
                <p className="text-newsletter-darkGray leading-relaxed text-lg mb-6">{newsletter.description}</p>
                
                {newsletter.linkUrl && (
                  <div className="mb-6">
                    <a 
                      href={newsletter.linkUrl} 
                      className="inline-flex items-center text-newsletter-blue hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit website <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                )}
              </div>
              
              <div className="bg-newsletter-lightGray p-6 rounded-lg mt-8">
                <h3 className="text-lg font-medium mb-4">Subscribe to {newsletter.title}</h3>
                <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-newsletter-blue/30 transition-all"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-newsletter-blue hover:bg-newsletter-blue/90 transition-all w-full"
                  >
                    Subscribe Now
                  </Button>
                  <p className="text-xs text-newsletter-mediumGray text-center">
                    By subscribing, you agree to receive emails from this newsletter provider.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Detail;
