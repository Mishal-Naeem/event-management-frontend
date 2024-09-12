import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventForm from './EventForm';

const EditEvent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/events');
  };

  // Ensure id is defined before parsing
  const eventId = id ? parseInt(id, 10) : undefined;

  return (
    <div>
      <h2>Edit Event</h2>
      {eventId !== undefined ? (
        <EventForm eventId={eventId} onSuccess={handleSuccess} />
      ) : (
        <p>Invalid event ID</p>
      )}
    </div>
  );
};

export default EditEvent;
