import { User, Event, Memory } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop',
  mood: '😊',
};

export const mockPartner: User = {
  id: '2',
  name: 'Sam',
  avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop',
  mood: '❤️',
};

export const mockEvents: Event[] = [
  {
    id: '1',
    title: "Valentine's Day",
    date: new Date(2024, 1, 14),
    type: 'anniversary',
    description: 'Special dinner planned',
  },
  {
    id: '2',
    title: 'Weekend Getaway',
    date: new Date(2024, 2, 1),
    type: 'date',
    description: 'Beach trip',
  },
];

export const mockMemories: Memory[] = [
  {
    id: '1',
    title: 'First Date',
    date: new Date(2023, 6, 15),
    description: 'Coffee shop meeting',
    imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=100&h=100&fit=crop',
    category: 'dates',
  },
  {
    id: '2',
    title: 'Beach Day',
    date: new Date(2023, 7, 20),
    description: 'Summer vacation',
    imageUrl: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=100&h=100&fit=crop',
    category: 'vacation',
  },
];