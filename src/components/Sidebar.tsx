import React from 'react';
import { Calendar, Camera, Heart, List, MessageCircle, Gift, Map, Target } from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { icon: <Calendar className="w-5 h-5" />, label: 'Calendar', path: '/calendar' },
  { icon: <Camera className="w-5 h-5" />, label: 'Memories', path: '/memories' },
  { icon: <Heart className="w-5 h-5" />, label: 'Love Notes', path: '/notes' },
  { icon: <List className="w-5 h-5" />, label: 'Bucket List', path: '/bucket-list' },
  { icon: <MessageCircle className="w-5 h-5" />, label: 'Chat', path: '/chat' },
  { icon: <Gift className="w-5 h-5" />, label: 'Wishlist', path: '/wishlist' },
  { icon: <Map className="w-5 h-5" />, label: 'Location', path: '/location' },
  { icon: <Target className="w-5 h-5" />, label: 'Goals', path: '/goals' },
];

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-rose-600">Couples App</h1>
      </div>
      <nav className="mt-8">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}