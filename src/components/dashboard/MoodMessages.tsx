import React, { useState } from 'react';
import { useStore } from '../../store/useStore';

const moods = [
  { emoji: '😊', bg: 'bg-yellow-100', hover: 'hover:bg-yellow-200', text: 'text-yellow-500' },
  { emoji: '😴', bg: 'bg-blue-100', hover: 'hover:bg-blue-200', text: 'text-blue-500' },
  { emoji: '❤️', bg: 'bg-red-100', hover: 'hover:bg-red-200', text: 'text-red-500' },
];

export function MoodMessages() {
  const { currentUser, addMessage } = useStore();
  const [message, setMessage] = useState('');
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  const handleSendMessage = () => {
    if (message.trim() && currentUser) {
      addMessage({
        id: Date.now().toString(),
        senderId: currentUser.id,
        content: message,
        timestamp: new Date(),
        type: 'text',
      });
      setMessage('');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Today's Mood</h2>
      <div className="flex items-center space-x-4 mb-6">
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => setSelectedMood(index)}
            className={`w-10 h-10 ${mood.bg} rounded-full flex items-center justify-center ${
              mood.text
            } ${mood.hover} ${selectedMood === index ? 'ring-2 ring-offset-2 ring-rose-500' : ''}`}
          >
            {mood.emoji}
          </button>
        ))}
      </div>
      <div className="border-t pt-4">
        <h3 className="text-sm font-medium mb-2">Quick Message</h3>
        <div className="space-y-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border rounded-lg resize-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="Send a sweet note..."
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}