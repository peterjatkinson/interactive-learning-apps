
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ResizeWrapper from './ResizeWrapper';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AITimeline from './apps/AITimeline.js';
import AdvertisingTimeline from './apps/AdvertisingTimeline.js';
import AverageCalculator from './apps/AverageCalculator.js';
import BreakEven from './apps/BreakEven.js';
import CampaignIdeas from './apps/CampaignIdeas.js';
import CounterApp from './apps/CounterApp.js';
import DoubleNumber from './apps/DoubleNumber.js';
import DragDropTimeline from './apps/DragDropTimeline.js';
import FluidAI from './apps/FluidAI.js';
import MarketingDashboard from './apps/MarketingDashboard.js';
import PositioningStatementCreator from './apps/PositioningStatementCreator.js';
import PositioningStatementGlobal from './apps/PositioningStatementGlobal.js';
import TestApp from './apps/TestApp.js';
import TimModuleMap from './apps/TimModuleMap.js';
import ToggleSwitchApp from './apps/ToggleSwitchApp.js';


function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/aitimeline': 'A I Timeline',
  '/advertisingtimeline': 'Advertising Timeline',
  '/averagecalculator': 'Average Calculator',
  '/breakeven': 'Break Even',
  '/campaignideas': 'Campaign Ideas',
  '/counterapp': 'Counter App',
  '/doublenumber': 'Double Number',
  '/dragdroptimeline': 'Drag Drop Timeline',
  '/fluidai': 'Fluid A I',
  '/marketingdashboard': 'Marketing Dashboard',
  '/positioningstatementcreator': 'Positioning Statement Creator',
  '/positioningstatementglobal': 'Positioning Statement Global',
  '/testapp': 'Test App',
  '/timmodulemap': 'Tim Module Map',
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
                  <li style={{ marginBottom: '1rem' }}><Link to="/aitimeline" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> A I Timeline</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/advertisingtimeline" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Advertising Timeline</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/averagecalculator" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Average Calculator</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/breakeven" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Break Even</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/campaignideas" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Campaign Ideas</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/counterapp" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Counter App</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/doublenumber" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Double Number</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/dragdroptimeline" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Drag Drop Timeline</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/fluidai" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Fluid A I</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/marketingdashboard" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Marketing Dashboard</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/positioningstatementcreator" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Positioning Statement Creator</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/positioningstatementglobal" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Positioning Statement Global</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/testapp" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Test App</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/timmodulemap" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Tim Module Map</Link></li>
                <li style={{ marginBottom: '1rem' }}><Link to="/toggleswitchapp" style={{ fontSize: '1.2rem', textDecoration: 'underline' }}> Toggle Switch App</Link></li>
                </ul>
              </nav>
            </div>
          }
        />
        <Route path="/aitimeline" element={<ResizeWrapper><AITimeline /></ResizeWrapper>} />
        <Route path="/advertisingtimeline" element={<ResizeWrapper><AdvertisingTimeline /></ResizeWrapper>} />
        <Route path="/averagecalculator" element={<ResizeWrapper><AverageCalculator /></ResizeWrapper>} />
        <Route path="/breakeven" element={<ResizeWrapper><BreakEven /></ResizeWrapper>} />
        <Route path="/campaignideas" element={<ResizeWrapper><CampaignIdeas /></ResizeWrapper>} />
        <Route path="/counterapp" element={<ResizeWrapper><CounterApp /></ResizeWrapper>} />
        <Route path="/doublenumber" element={<ResizeWrapper><DoubleNumber /></ResizeWrapper>} />
        <Route path="/dragdroptimeline" element={<ResizeWrapper><DragDropTimeline /></ResizeWrapper>} />
        <Route path="/fluidai" element={<ResizeWrapper><FluidAI /></ResizeWrapper>} />
        <Route path="/marketingdashboard" element={<ResizeWrapper><MarketingDashboard /></ResizeWrapper>} />
        <Route path="/positioningstatementcreator" element={<ResizeWrapper><PositioningStatementCreator /></ResizeWrapper>} />
        <Route path="/positioningstatementglobal" element={<ResizeWrapper><PositioningStatementGlobal /></ResizeWrapper>} />
        <Route path="/testapp" element={<ResizeWrapper><TestApp /></ResizeWrapper>} />
        <Route path="/timmodulemap" element={<ResizeWrapper><TimModuleMap /></ResizeWrapper>} />
        <Route path="/toggleswitchapp" element={<ResizeWrapper><ToggleSwitchApp /></ResizeWrapper>} />
      </Routes>
    </Router>
  );
}

export default App;
