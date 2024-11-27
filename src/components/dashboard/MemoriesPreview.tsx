import React from 'react';
import { useStore } from '../../store/useStore';
import { Camera } from 'lucide-react';

export function MemoriesPreview() {
  const { memories } = useStore();
  const recentMemories = memories.slice(0, 3);

  const defaultImages = [
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1516589091380-5d8e21be2dce?w=100&h=100&fit=crop',
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Recent Memories</h2>
      <div className="grid grid-cols-3 gap-2">
        {recentMemories.length > 0 ? (
          recentMemories.map((memory) => (
            <div key={memory.id} className="relative group">
              <img
                src={memory.imageUrl}
                alt={memory.title}
                className="w-full h-24 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity rounded-lg flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity">
                  {memory.title}
                </p>
              </div>
            </div>
          ))
        ) : (
          defaultImages.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt="Memory placeholder"
                className="w-full h-24 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity rounded-lg flex items-center justify-center">
                <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}