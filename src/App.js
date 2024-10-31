import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PositioningStatementCreator from './apps/PositioningStatementCreator';
import AdvertisingTimeline from './apps/AdvertisingTimeline';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to Interactive Learning Apps</h1>} />
        <Route path="/positioning-statement" element={<PositioningStatementCreator />} />
        <Route path="/advertising-timeline" element={<AdvertisingTimeline />} />
      </Routes>
    </Router>
  );
}

export default App;
