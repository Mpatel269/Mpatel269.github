import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import ContactUsPage from './pages/ContactUs/ContactUsPage';
import EducationPage from './pages/Education/EducationPage';
import EventsPage from './pages/Events/EventsPage';
import GuidePage from './pages/GuideToOlomouc/GuidePage';
import Homepage from './pages/Homepage';
import SocietiesPage from './pages/Societies/SocietiesPage';
import SportsPage from './pages/Sports/SportsPage';
import SupportPage from './pages/Support/SupportPage';
import YourUnionPage from './pages/YourUnion/YourUnionPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = '/yourunion'>
            <YourUnionPage />
          </Route>
          <Route path = '/sports'>
            <SportsPage />
          </Route>
          <Route path = '/societies'>
            <SocietiesPage />
          </Route>
          <Route path = '/education'>
            <EducationPage />
          </Route>
          <Route path = '/events'>
            <EventsPage />
          </Route>
          <Route path = '/guidetoolomouc'>
            <GuidePage />
          </Route>
          <Route path = '/support'>
            <SupportPage />
          </Route>
          <Route path = '/contactus'>
            <ContactUsPage />
          </Route>
          <Route path = '/'>
            <Homepage />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
