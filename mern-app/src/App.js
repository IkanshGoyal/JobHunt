import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyLogin from './components/Login/CompanyLogin';
import RecruiterLogin from './components/Login/RecruiterLogin';
import ApplicantLogin from './components/Login/ApplicantLogin';
import CompanyRegister from './components/Register/CompanyRegister';
import RecruiterRegister from './components/Register/RecruiterRegister';
import ApplicantRegister from './components/Register/ApplicantRegister';
import CompanyProfile from './components/Profile/CompanyProfile';
import RecruitProfile from './components/Profile/RecruiterProfile';
import ApplicantProfile from './components/Profile/ApplicantProfile';
import CH from './components/Home/CompanyHome';
import RH from './components/Home/RecruiterHome';
import AH from './components/Home/ApplicantHome';
import CP from './components/MainProfile/CP';
import RP from './components/MainProfile/RP';
import AP from './components/MainProfile/AP';
import JobSearch from './components/Jobs/jobSearch';
import ResetPassword from './components/ResetPassword';
import Header from './components/Header/Header';
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import UserCards from './components/UI/UserCards';
import WhyloveUs from './components/UI/WhyLoveUs';
import Footer from "./components/Footer/Footer";


const App = () => {
  const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === '' ? 'light-theme' : ''));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const Home = () => (
    <>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <UserCards />
      <WhyloveUs />
      <Counter />
      <Footer />
    </>
  );

  const About = () => (
    <div className="about">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <h1>About Us</h1>
      <p>This is the About page.</p>
      <Footer />
    </div>
  );

  const ContactUs = () => (
    <div className="contact">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <h1>Contact Us</h1>
      <p>This is the Contact Us page.</p>
      <Footer />
    </div>
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/company/login" element={<CompanyLogin />} />
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/company/completeprofile" element={<CompanyProfile />} />
          <Route path="/company/profile" element={<CP />} />
          <Route path="/company/home" element={<CH />} />
          <Route path="/applicant/profile" element={<AP />} />
          <Route path="/applicant/home" element={<AH />} />
          <Route path="/recruiter/profile" element={<RP />} />
          <Route path="/recruiter/home" element={<RH />} />
          <Route path="/recruiter/login" element={<RecruiterLogin />} />
          <Route path="/recruiter/register" element={<RecruiterRegister />} />
          <Route path="/recruiter/completeprofile" element={<RecruitProfile />} />
          <Route path="/applicant/login" element={<ApplicantLogin />} />
          <Route path="/applicant/register" element={<ApplicantRegister />} />
          <Route path="/applicant/completeprofile" element={<ApplicantProfile />} />
          <Route path="/applicant/jobs" element={<JobSearch />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/UserCards" element={<UserCards />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
