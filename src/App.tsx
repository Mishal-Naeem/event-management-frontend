import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import EditEvent from './components/EditEvent';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<EventList />} />
        <Route path="/events/new" element={<CreateEvent />} />
        <Route path="/events/:id/edit" element={<EditEvent />} />
      </Routes>
    </Router>
  );
};

export default App;
