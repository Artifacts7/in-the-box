
export interface Newsletter {
  id: string;
  title: string;
  description: string;
  sender?: string;
  date?: string;
  isRead: boolean;
  isStarred?: boolean;
  category: string;
  imageUrl?: string;
  linkUrl?: string;
  content?: string;
}
