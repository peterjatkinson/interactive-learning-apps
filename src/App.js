
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ResizeWrapper from './ResizeWrapper';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AdvertisingTimeline from './apps/AdvertisingTimeline.js';
import BreakEven from './apps/BreakEven.js';
import CounterApp from './apps/CounterApp.js';
import DoubleNumber from './apps/DoubleNumber.js';
import PositioningStatementCreator from './apps/PositioningStatementCreator.js';
import PositioningStatementGlobal from './apps/PositioningStatementGlobal.js';
import ToggleSwitchApp from './apps/ToggleSwitchApp.js';


function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/advertisingtimeline': 'Advertising Timeline',
  '/breakeven': 'Break Even',
  '/counterapp': 'Counter App',
  '/doublenumber': 'Double Number',
  '/positioningstatementcreator': 'Positioning Statement Creator',
  '/positioningstatementglobal': 'Positioning Statement Global',
  '/toggleswitchapp': 'Toggle Switch App'
    };
    document.title = titles[location.pathname] || 'Interactive Learning Apps';
  }, [location]);

  return null;
}


function App() {
  return (
    <Router>
      <DynamicTitle />
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
                <li style={{ marginBottom: '1rem' }}><Link to="/breakeven" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Break Even</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/counterapp" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Counter App</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/doublenumber" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Double Number</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/positioningstatementcreator" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Positioning Statement Creator</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/positioningstatementglobal" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Positioning Statement Global</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/toggleswitchapp" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Toggle Switch App</Link></li>
                </ul>
              </nav>
            </div>
          }
        />
        <Route path="/advertisingtimeline" element={<ResizeWrapper><AdvertisingTimeline /></ResizeWrapper>} />
        <Route path="/breakeven" element={<ResizeWrapper><BreakEven /></ResizeWrapper>} />
        <Route path="/counterapp" element={<ResizeWrapper><CounterApp /></ResizeWrapper>} />
        <Route path="/doublenumber" element={<ResizeWrapper><DoubleNumber /></ResizeWrapper>} />
        <Route path="/positioningstatementcreator" element={<ResizeWrapper><PositioningStatementCreator /></ResizeWrapper>} />
        <Route path="/positioningstatementglobal" element={<ResizeWrapper><PositioningStatementGlobal /></ResizeWrapper>} />
        <Route path="/toggleswitchapp" element={<ResizeWrapper><ToggleSwitchApp /></ResizeWrapper>} />
      </Routes>
    </Router>
  );
}

export default App;
