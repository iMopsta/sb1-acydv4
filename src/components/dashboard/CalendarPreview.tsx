import React from 'react';
import { format } from 'date-fns';
import { useStore } from '../../store/useStore';

export function CalendarPreview() {
  const { events } = useStore();
  const upcomingEvents = events.slice(0, 3);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
      <div className="space-y-3">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => (
            <div key={event.id} className="flex items-center space-x-3 text-sm">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                <span className="font-medium text-rose-600">
                  {format(event.date, 'd')}
                </span>
              </div>
              <div>
                <p className="font-medium">{event.title}</p>
                <p className="text-gray-500">{event.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center space-x-3 text-sm">
            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
              <span className="font-medium text-rose-600">14</span>
            </div>
            <div>
              <p className="font-medium">No upcoming events</p>
              <p className="text-gray-500">Add your first event</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}