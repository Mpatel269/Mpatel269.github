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
import CompetitionsPg from './pages/Sports/CompetitionsPg';
import BasketballPg from './pages/Sports/BasketballPg';
import NewSocietyPg from './pages/Societies/NewSocietyPg';
import AcademicSocietiesPg from './pages/Societies/AcademicSocietiesPg';
import NonAcademicSocietiesPg from './pages/Societies/NonAcademicSocietiesPg';
import ResourcesPg from './pages/Education/ResourcesPg';
import ResearchPg from './pages/Education/ResearchPg';
import YearBreakdownPg from './pages/Education/YearBreakdownPg';
import OnlineTrainingPg from './pages/Education/OnlineTrainingPg';
import FoodPg from './pages/GuideToOlomouc/FoodPg';
import HealthPg from './pages/GuideToOlomouc/HealthPg';
import ThingsToDoPg from './pages/GuideToOlomouc/ThingsToDoPg';
import TravelPg from './pages/GuideToOlomouc/TravelPg';
import UsefulAppsPg from './pages/GuideToOlomouc/UsefulAppsPg';
import AdviceServicePg from './pages/Support/AdviceServicePg';
import HowtoAdultPg from './pages/Support/HowtoAdultPg';
import HowtoStudentPg from './pages/Support/HowtoStudentPg';
import OutHoursPg from './pages/Support/OutHoursPg';
import PeerMentorPg from './pages/Support/PeerMentorPg';
import WhatsOnPg from './pages/Events/WhatsOnPg';
import SuggestIdeaPg from './pages/Events/SuggestIdeaPg';
import ContactDetailsPg from './pages/ContactUs/ContactDetailsPg';
import FeedbackComplaintsPg from './pages/ContactUs/FeedbackComplaintsPg';

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
          <Route path = '/sports/competitions'>
            <CompetitionsPg />
          </Route>
          <Route path = '/sports'>
            <SportsPage />
          </Route>
          <Route path = '/societies/academic'>
            <AcademicSocietiesPg />
          </Route>
          <Route path = '/societies/non-academic'>
            <NonAcademicSocietiesPg />
          </Route>
          <Route path = '/societies/new-society'>
            <NewSocietyPg />
          </Route>
          <Route path = '/societies'>
            <SocietiesPage />
          </Route>
          <Route path = '/education/resources'>
            <ResourcesPg />
          </Route>
          <Route path = '/education/research'>
            <ResearchPg />
          </Route>
          <Route path = '/education/online-training'>
            <OnlineTrainingPg />
          </Route>
          <Route path = '/education/year-breakdown'>
            <YearBreakdownPg />
          </Route>
          <Route path = '/education'>
            <EducationPage />
          </Route>
          <Route path = '/events/whats-on'>
            <WhatsOnPg />
          </Route>
          <Route path = '/events/suggest-idea'>
            <SuggestIdeaPg />
          </Route>
          <Route path = '/events'>
            <EventsPage />
          </Route>
          <Route path = '/guidetoolomouc/food'>
            <FoodPg />
          </Route>
          <Route path = '/guidetoolomouc/health'>
            <HealthPg />
          </Route>
          <Route path = '/guidetoolomouc/travel'>
            <TravelPg />
          </Route>
          <Route path = '/guidetoolomouc/useful-apps'>
            <UsefulAppsPg />
          </Route>
          <Route path = '/guidetoolomouc/things-to-do'>
            <ThingsToDoPg />
          </Route>
          <Route path = '/guidetoolomouc'>
            <GuidePage />
          </Route>
          <Route path = '/support/advice'>
            <AdviceServicePg />
          </Route>
          <Route path = '/support/peer-mentor'>
            <PeerMentorPg />
          </Route>
          <Route path = '/support/how-to-adult'>
            <HowtoAdultPg />
          </Route>
          <Route path = '/support/how-to-student'>
            <HowtoStudentPg />
          </Route>
          <Route path = '/support/out-of-hours'>
            <OutHoursPg />
          </Route>
          <Route path = '/support'>
            <SupportPage />
          </Route>
          <Route path = '/contactus/details'>
            <ContactDetailsPg />
          </Route>
          <Route path = '/contactus/feedback'>
            <FeedbackComplaintsPg />
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
