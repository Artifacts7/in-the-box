
export interface Newsletter {
  id: string;
  title: string;
  description: string;
  sender?: string;
  date?: string;
  isRead?: boolean;
  imageUrl?: string;
  linkUrl?: string;
  category?: string;
}
