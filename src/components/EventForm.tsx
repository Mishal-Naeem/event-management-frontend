import React, { useState, useEffect } from 'react';
import { createEvent, getEventById, updateEvent } from '../services/EventService';

interface EventFormProps {
  eventId?: number;
  onSuccess: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ eventId, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (eventId) {
      getEventById(eventId).then((response) => {
        const event = response.data;
        setTitle(event.title);
        setDescription(event.description);
        setLocation(event.location);
        setDate(event.date);
      });
    }
  }, [eventId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const event = { title, description, location, date };
    
    if (eventId) {
      updateEvent(eventId, event).then(onSuccess);
    } else {
      createEvent(event).then(onSuccess);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <button type="submit">{eventId ? 'Update' : 'Create'} Event</button>
    </form>
  );
};

export default EventForm;
