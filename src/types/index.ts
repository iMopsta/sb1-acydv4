export interface User {
  id: string;
  name: string;
  avatar: string;
  mood?: string;
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  type: 'anniversary' | 'date' | 'milestone' | 'other';
  description?: string;
}

export interface Memory {
  id: string;
  title: string;
  date: Date;
  description: string;
  imageUrl?: string;
  category: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'video';
}

export interface BucketListItem {
  id: string;
  title: string;
  completed: boolean;
  date?: Date;
}