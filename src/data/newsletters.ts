
import { Newsletter } from "../types/Newsletter";

export const newsletters: Newsletter[] = [
  {
    id: "1",
    title: "Artifacts Tech",
    description: "Artifacts is an experiment, a playground, a challenge about stories and ideas on how technology has changed and reshaped us, our society, and our politics. But it's also about how politics and policies are grappling with technology.",
    sender: "Lorenzo Ancona",
    date: "May 15, 2023",
    isRead: false,
    isStarred: true,
    category: "Technology",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://artifactstech.substack.com/"
  },
  {
    id: "2",
    title: "What's up EU",
    description: "What's up EU puts together a concise, well-documented, and informative weekly wrap-up of the news that matters at a continental scale — from a European perspective.",
    sender: "Business Insider",
    date: "May 12, 2023",
    isRead: true,
    isStarred: false,
    category: "Politics",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://whatsupeuenglish.substack.com/"
  },
];

// Extract unique categories for sidebar
export const getCategories = (): string[] => {
  const categories = new Set(newsletters.map(newsletter => newsletter.category));
  return Array.from(categories);
};

// Get counts by category
export const getUnreadCounts = (): Record<string, number> => {
  const counts: Record<string, number> = {
    total: newsletters.length
  };
  
  // Count total newsletters by category
  newsletters.forEach(newsletter => {
    if (!counts[newsletter.category]) {
      counts[newsletter.category] = 0;
    }
    
    // Count each newsletter in its category
    counts[newsletter.category]++;
  });
  
  return counts;
};
