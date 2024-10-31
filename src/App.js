
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import AdvertisingTimeline from './apps/AdvertisingTimeline.js';
import CounterApp from './apps/CounterApp.js';
import PositioningStatementCreator from './apps/PositioningStatementCreator.js';
import PositioningStatementGlobal from './apps/PositioningStatementGlobal.js';
import ToggleSwitchApp from './apps/ToggleSwitchApp.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h1>Welcome to Interactive Learning Apps</h1>
              <p>Select an app to get started:</p>
              <nav style={{ marginTop: '1rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem' }}><Link to="/advertisingtimeline" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Advertising Timeline</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/counterapp" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Counter App</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/positioningstatementcreator" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Positioning Statement Creator</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/positioningstatementglobal" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Positioning Statement Global</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/toggleswitchapp" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Toggle Switch App</Link></li>
                </ul>
              </nav>
            </div>
          }
        />
        <Route path="/advertisingtimeline" element={<AdvertisingTimeline />} />
        <Route path="/counterapp" element={<CounterApp />} />
        <Route path="/positioningstatementcreator" element={<PositioningStatementCreator />} />
        <Route path="/positioningstatementglobal" element={<PositioningStatementGlobal />} />
        <Route path="/toggleswitchapp" element={<ToggleSwitchApp />} />
      </Routes>
    </Router>
  );
}

export default App;
