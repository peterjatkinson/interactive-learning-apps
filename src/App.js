import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PositioningStatementCreator from './apps/PositioningStatementCreator';
import AdvertisingTimeline from './apps/AdvertisingTimeline';
import CounterApp from './apps/CounterApp';
import PositioningStatementGlobal from './apps/PositioningStatementGlobal'; // New import

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
                  <li style={{ marginBottom: '1rem' }}>
                    <Link to="/positioning-statement" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}>
                      Positioning Statement Creator
                    </Link>
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <Link to="/advertising-timeline" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}>
                      Advertising Timeline
                    </Link>
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <Link to="/counter" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}>
                      Simple Counter
                    </Link>
                  </li>
                  <li>
                    <Link to="/positioning-statement-global" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}>
                      Positioning Statement Creator (Global CSS)
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          }
        />
        <Route path="/positioning-statement" element={<PositioningStatementCreator />} />
        <Route path="/advertising-timeline" element={<AdvertisingTimeline />} />
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/positioning-statement-global" element={<PositioningStatementGlobal />} /> {/* New Route */}
      </Routes>
    </Router>
  );
}

export default App;
