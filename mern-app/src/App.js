import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CompanyLogin from './components/Login/CompanyLogin';
import RecruiterLogin from './components/Login/RecruiterLogin';
import ApplicantLogin from './components/Login/ApplicantLogin';
import CompanyRegister from './components/Register/CompanyRegister';
import RecruiterRegister from './components/Register/RecruiterRegister';
import ApplicantRegister from './components/Register/ApplicantRegister';
import CompanyProfile from './components/Profile/CompanyProfile';
import RecruitProfile from './components/Profile/RecruiterProfile';
import ApplicantProfile from './components/Profile/ApplicantProfile';
import ResetPassword from './components/ResetPassword';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/company/login" element={<CompanyLogin />} />
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/company/completeprofile" element={<CompanyProfile />} />
          <Route path="/recruiter/login" element={<RecruiterLogin />} />
          <Route path="/recruiter/register" element={<RecruiterRegister />} />
          <Route path="/recruiter/completeprofile" element={<RecruitProfile />} />
          <Route path="/applicant/login" element={<ApplicantLogin />} />
          <Route path="/applicant/register" element={<ApplicantRegister />} />
          <Route path="/applicant/completeprofile" element={<ApplicantProfile />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
