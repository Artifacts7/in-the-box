
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
  {
    id: "3",
    title: "EU AI Act Newsletter",
    description: "Subscribe to receive the biweekly EU AI Act Newsletter to your inbox. Never miss an update.",
    sender: "Risto Uuk",
    date: "May 12, 2023",
    isRead: true,
    isStarred: false,
    category: "Technology",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://artificialintelligenceact.substack.com/"
  },
  {
    id: "4",
    title: "Digital Politics",
    description: "This newsletter unpacks the messy, fascinating world of digital policy and politics—the rules, battles, and debates shaping our online lives.",
    sender: "Mark Scott",
    date: "May 12, 2023",
    isRead: true,
    isStarred: false,
    category: "Technology",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://www.digitalpolitics.co/"
  },
  {
    id: "5",
    title: "Digital Conflicts",
    description: "A bi-weekly briefing on the intersections of digital culture, AI, cybersecurity, digital rights, data privacy, and tech policy.",
    sender: "Carola Frediani",
    date: "May 12, 2023",
    isRead: true,
    isStarred: false,
    category: "Technology",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://conflicts.digital/"
  },
  {
    id: "6",
    title: "Silicon Continent",
    description: "Silicon Continent is a weekly blog by Luis Garicano and Pieter Garicano that will try to understand why the EU is falling behind Asia and the US in AI, innovation and growth more generally.",
    sender: "Luis & Pieter Garicano",
    date: "May 12, 2023",
    isRead: true,
    isStarred: false,
    category: "Technology",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://www.siliconcontinent.com/"
  },
  {
    id: "7",
    title: "Everything in Moderation",
    description: "Need-to-know news and analysis about platform policy, content moderation and internet regulation. Twice a week.",
    sender: "Ben Whitelaw",
    date: "May 12, 2023",
    isRead: true,
    isStarred: false,
    category: "Technology",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://www.everythinginmoderation.co/"
  },
  {
    id: "8",
    title: "The Leopard",
    description: "The Leopard is a European-focused newsletter that offers a far-sighted and distinctly European perspective on a changing world. Written by a British journalist based in Brussels",
    sender: "Sam Wilkin",
    date: "May 12, 2023",
    isRead: true,
    isStarred: false,
    category: "Politics",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://www.theleopard.eu/"
  },
  {
    id: "9",
    title: "Gulf Stream Blues",
    description: "Gulf Stream Blues is written by the American-European journalist Dave Keating, based in Brussels. It focuses on European politics, and wide questions of Europe's place in the world.",
    sender: "Dave Keating",
    date: "May 12, 2023",
    isRead: true,
    isStarred: false,
    category: "Politics",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://davekeating.substack.com/"
  },
  {
    id: "10",
    title: "Euro Beats",
    description: "A constructively contrarian take on the history, politics and economics of the European Union and more. Europhile in origin, skeptic by nature, but always honest by design.",
    sender: "Dr. Eoin Drea",
    date: "May 12, 2023",
    isRead: true,
    isStarred: false,
    category: "Politics",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://eurobeats.substack.com/"
  },
  {
    id: "11",
    title: "Educational Tech Weekly",
    description: "A weekly newsletter on the latest trends in educational technology, online learning platforms, and digital classroom innovations.",
    sender: "Emily Johnson",
    date: "May 14, 2023",
    isRead: false,
    isStarred: false,
    category: "Education",
    imageUrl: "/lovable-uploads/40a5cd41-be28-4f9b-bf35-c798b1073e8e.png",
    linkUrl: "https://edtechweekly.com/"
  }
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
