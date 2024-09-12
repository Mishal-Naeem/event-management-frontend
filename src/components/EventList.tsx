import React, { useEffect, useState } from 'react';
import { getEvents, deleteEvent } from '../services/EventService';
import { Link, useNavigate } from 'react-router-dom';

const EventList: React.FC = () => {
  const [events, setEvents] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = () => {
    getEvents().then((response) => setEvents(response.data));
  };

  const handleDelete = (id: number) => {
    deleteEvent(id).then(() => loadEvents());
  };

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date}
            <Link to={`/events/${event.id}/edit`}>Edit</Link>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/events/new')}>Create New Event</button>
    </div>
  );
};

export default EventList;
