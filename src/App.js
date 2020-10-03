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
import PepaTeamPg from './pages/YourUnion/PepaTeamPg';
import ElectionsPg from './pages/YourUnion/ElectionsPg';
import RoomBookingPg from './pages/YourUnion/RoomBookingPg';
import AlumniPg from './pages/YourUnion/AlumniPg';
import FootballPg from './pages/Sports/FootballPg';
import BadmintonPg from './pages/Sports/BadmintonPg';
import CricketPg from './pages/Sports/CricketPg';
import VolleyballPg from './pages/Sports/VolleyballPg';
import OtherPg from './pages/Sports/OtherPg';
import HallofFamePg from './pages/Sports/HallofFamePg';
import BasketballPg from './pages/Sports/BasketballPg';




function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path = '/yourunion/pepa-team'>
            <PepaTeamPg />
          </Route>
          <Route path = '/yourunion/elections'>
            <ElectionsPg />
          </Route>
          <Route path = '/yourunion/room-booking'>
            <RoomBookingPg />
          </Route>
          <Route path = '/yourunion/alumni'>
            <AlumniPg />
          </Route>
          <Route path = '/yourunion'>
            <YourUnionPage />
          </Route>
          <Route path = '/sports/football'>
            <FootballPg />
          </Route>
          <Route path = '/sports/badminton'>
            <BadmintonPg />
          </Route>
          <Route path = '/sports/basketball'>
            <BasketballPg />
          </Route>
          <Route path = '/sports/cricket'>
            <CricketPg />
          </Route>
          <Route path = '/sports/volleyball'>
            <VolleyballPg />
          </Route>
          <Route path = '/sports/other'>
            <OtherPg />
          </Route>
          <Route path = '/sports/hall-of-fame'>
            <HallofFamePg />
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
