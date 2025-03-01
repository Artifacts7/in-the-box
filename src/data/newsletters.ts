
import { Newsletter } from "../types/Newsletter";

export const newsletters: Newsletter[] = [
  {
    id: "1",
    title: "Artifacts Tech",
    description: "Bringing historical artifacts into the digital age. How technology is preserving our cultural heritage and making it accessible to everyone.",
    sender: "Artifacts Tech Newsletter",
    date: "May 15, 2023",
    isRead: false,
    isStarred: true,
    category: "Technology",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://artifactstech.substack.com/"
  },
  {
    id: "2",
    title: "Digital Transformation Insights",
    description: "Explore how leading companies are navigating digital transformation in 2023. This issue features exclusive interviews with CTOs from Fortune 500 companies, case studies of successful digital initiatives, and practical advice for overcoming common transformation challenges.",
    sender: "Business Insider",
    date: "May 12, 2023",
    isRead: true,
    isStarred: false,
    category: "Business",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://example.com/digital-transformation"
  },
  {
    id: "3",
    title: "Monthly Book Recommendations",
    description: "Our curated list of must-read books for this month spans fiction, non-fiction, and emerging authors. Each recommendation includes a brief summary, why we think it's worth your time, and links to purchase or find at your local library.",
    sender: "Literary Circle",
    date: "May 10, 2023",
    isRead: false,
    isStarred: false,
    category: "Culture",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://example.com/book-recommendations"
  },
  {
    id: "4",
    title: "Web Development Trends for 2023",
    description: "Stay ahead of the curve with our comprehensive analysis of web development trends shaping the industry this year. We cover everything from new frameworks and tooling to design patterns and performance optimization techniques.",
    sender: "Dev Insights",
    date: "May 8, 2023",
    isRead: true,
    isStarred: true,
    category: "Technology",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://example.com/web-dev-trends"
  },
  {
    id: "5",
    title: "Future of Work: Remote Teams",
    description: "This issue explores best practices for building and managing remote teams. Topics include communication strategies, productivity tools, fostering company culture virtually, and legal considerations for global workforces.",
    sender: "WorkPlace Innovation",
    date: "May 5, 2023",
    isRead: false,
    isStarred: false,
    category: "Business",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://example.com/future-work"
  },
  {
    id: "6",
    title: "Minimalist Tech: Essential Tools",
    description: "Our guide to the most essential technologies that actually improve your life without adding unnecessary complexity. We review simple, focused tools that help you work more efficiently and reduce digital clutter.",
    sender: "Mindful Tech",
    date: "May 1, 2023",
    isRead: true,
    isStarred: false,
    category: "Lifestyle",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://example.com/minimalist-tech"
  },
  {
    id: "7",
    title: "Sustainable Fashion Guide",
    description: "Discover emerging sustainable fashion brands and learn about eco-friendly materials revolutionizing the industry. This month's issue includes interviews with designers committed to ethical production practices.",
    sender: "Eco Style Magazine",
    date: "April 28, 2023",
    isRead: false,
    isStarred: true,
    category: "Lifestyle",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://example.com/sustainable-fashion"
  },
  {
    id: "8",
    title: "Political Analysis: Global Relations",
    description: "In-depth analysis of shifting geopolitical landscapes and their impacts on international trade, security, and diplomacy. Features perspectives from leading political scientists and foreign policy experts.",
    sender: "World Affairs Institute",
    date: "April 25, 2023",
    isRead: true,
    isStarred: false,
    category: "Politics",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://example.com/political-analysis"
  }
];

// Extract unique categories for sidebar
export const getCategories = (): string[] => {
  const categories = new Set(newsletters.map(newsletter => newsletter.category));
  return Array.from(categories);
};

// Get unread counts by category
export const getUnreadCounts = (): Record<string, number> => {
  const counts: Record<string, number> = {
    unread: 0
  };
  
  newsletters.forEach(newsletter => {
    // Count by category
    if (!counts[newsletter.category]) {
      counts[newsletter.category] = 0;
    }
    
    if (!newsletter.isRead) {
      counts[newsletter.category]++;
      counts.unread++;
    }
  });
  
  return counts;
};
