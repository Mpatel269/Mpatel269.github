import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
        <Route path = '/yourunion/pepa-team'>
            <YourUnionPage />
          </Route>
          <Route path = '/yourunion/elections'>
            <YourUnionPage />
          </Route>
          <Route path = '/yourunion/room-booking'>
            <YourUnionPage />
          </Route>
          <Route path = '/yourunion/alumni'>
            <YourUnionPage />
          </Route>
          <Route path = '/yourunion'>
            <YourUnionPage />
          </Route>
          <Route path = '/sports/football'>
            <SportsPage />
          </Route>
          <Route path = '/sports/badminton'>
            <SportsPage />
          </Route>
          <Route path = '/sports/basketball'>
            <SportsPage />
          </Route>
          <Route path = '/sports/cricket'>
            <SportsPage />
          </Route>
          <Route path = '/sports/volleyball'>
            <SportsPage />
          </Route>
          <Route path = '/sports/other'>
            <SportsPage />
          </Route>
          <Route path = '/sports/hall-of-fame'>
            <SportsPage />
          </Route>
          <Route path = '/sports'>
            <SportsPage />
          </Route>
          <Route path = '/societies/academic'>
            <SocietiesPage />
          </Route>
          <Route path = '/societies/non-academic'>
            <SocietiesPage />
          </Route>
          <Route path = '/societies/new-society'>
            <SocietiesPage />
          </Route>
          <Route path = '/societies'>
            <SocietiesPage />
          </Route>
          <Route path = '/education/resources'>
            <EducationPage />
          </Route>
          <Route path = '/education/research'>
            <EducationPage />
          </Route>
          <Route path = '/education/online-training'>
            <EducationPage />
          </Route>
          <Route path = '/education/year-breakdown'>
            <EducationPage />
          </Route>
          <Route path = '/education'>
            <EducationPage />
          </Route>
          <Route path = '/events/whats-on'>
            <EventsPage />
          </Route>
          <Route path = '/events/suggest-idea'>
            <EventsPage />
          </Route>
          <Route path = '/events'>
            <EventsPage />
          </Route>
          <Route path = '/guidetoolomouc/food'>
            <GuidePage />
          </Route>
          <Route path = '/guidetoolomouc/health'>
            <GuidePage />
          </Route>
          <Route path = '/guidetoolomouc/travel'>
            <GuidePage />
          </Route>
          <Route path = '/guidetoolomouc/useful-apps'>
            <GuidePage />
          </Route>
          <Route path = '/guidetoolomouc/things-to-do'>
            <GuidePage />
          </Route>
          <Route path = '/guidetoolomouc'>
            <GuidePage />
          </Route>
          <Route path = '/support/advice'>
            <SupportPage />
          </Route>
          <Route path = '/support/peer-mentor'>
            <SupportPage />
          </Route>
          <Route path = '/support/how-to-adult'>
            <SupportPage />
          </Route>
          <Route path = '/support/how-to-student'>
            <SupportPage />
          </Route>
          <Route path = '/support/out-of-hours'>
            <SupportPage />
          </Route>
          <Route path = '/support'>
            <SupportPage />
          </Route>
          <Route path = '/contactus/details'>
            <ContactUsPage />
          </Route>
          <Route path = '/contactus/feedback'>
            <ContactUsPage />
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
