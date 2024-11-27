import { create } from 'zustand';
import type { User, Event, Memory, Message, BucketListItem } from '../types';
import { mockUser, mockPartner, mockEvents, mockMemories } from '../utils/mockData';

interface AppState {
  currentUser: User | null;
  partner: User | null;
  events: Event[];
  memories: Memory[];
  messages: Message[];
  bucketList: BucketListItem[];
  setCurrentUser: (user: User) => void;
  setPartner: (user: User) => void;
  addEvent: (event: Event) => void;
  addMemory: (memory: Memory) => void;
  addMessage: (message: Message) => void;
  addBucketListItem: (item: BucketListItem) => void;
  toggleBucketListItem: (id: string) => void;
}

export const useStore = create<AppState>((set) => ({
  currentUser: mockUser,
  partner: mockPartner,
  events: mockEvents,
  memories: mockMemories,
  messages: [],
  bucketList: [],
  setCurrentUser: (user) => set({ currentUser: user }),
  setPartner: (user) => set({ partner: user }),
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  addMemory: (memory) => set((state) => ({ memories: [...state.memories, memory] })),
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  addBucketListItem: (item) => set((state) => ({ bucketList: [...state.bucketList, item] })),
  toggleBucketListItem: (id) => set((state) => ({
    bucketList: state.bucketList.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
  })),
}));