import React from 'react';
import { CalendarPreview } from './CalendarPreview';
import { MemoriesPreview } from './MemoriesPreview';
import { MoodMessages } from './MoodMessages';

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CalendarPreview />
      <MemoriesPreview />
      <MoodMessages />
    </div>
  );
}