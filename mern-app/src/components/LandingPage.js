import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Job Search App</h1>
      <div>
        <Link to="/company/login">Company Login</Link> | <Link to="/company/register">Company Register</Link>
      </div>
      <div>
        <Link to="/recruiter/login">Recruiter Login</Link> | <Link to="/recruiter/register">Recruiter Register</Link>
      </div>
      <div>
        <Link to="/applicant/login">Applicant Login</Link> | <Link to="/applicant/register">Applicant Register</Link>
      </div>
    </div>
  );
};

export default LandingPage;
