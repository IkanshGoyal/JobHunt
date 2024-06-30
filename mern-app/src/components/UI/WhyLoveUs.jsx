import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WhyLoveUs.css';

const WhyLoveUs = () => {
  const navigate = useNavigate();

  const handleApplicantLoginClick = () => {
    navigate('/applicant/login');
  };

  const handleRecruiterLoginClick = () => {
    navigate('/recruiter/login');
  };

  const handleCompanyLoginClick = () => {
    navigate('/company/login');
  };

  return (
    <section className="why-love-us">
      <div className="cont">
        <div className="column">
          <h2>Got talent?</h2>
          <h1>Why job seekers love us</h1>
          <ul className="benefits">
            <li>
              <div className="icon">
                <i class="ri-line-chart-line"></i>
              </div>
              <div className="details">
                <h3>Connect directly with founders at top startups - no third party recruiters allowed.</h3>
              </div>
            </li>
            <li>
              <div className="icon">
                <i class="ri-info-i"></i>
              </div>
              <div className="details">
                <h3>Everything you need to know, all upfront. View salary, stock options, and more before applying.</h3>
              </div>
            </li>
            <li>
              <div className="icon">
                <i class="ri-hand-heart-line"></i>
              </div>
              <div className="details">
                <h3>Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.</h3>
              </div>
            </li>
            <li>
              <div className="icon">
                <i class="ri-global-line"></i>
              </div>
              <div className="details">
                <h3>Unique jobs at startups and tech companies you can’t find anywhere else.</h3>
              </div>
            </li>
          </ul>
          <div className="actions">
            <button className="btn primary" onClick={handleApplicantLoginClick}>Applicant Log In</button>
          </div>
        </div>
        <div className="column">
          <h2>Need talent?</h2>
          <h1>Why recruiters love us</h1>
          <ul className="benefits">
            <li>
              <div className="icon">
                <i class="ri-bar-chart-grouped-line"></i>
              </div>
              <div className="details">
                <h3>Tap into a community of 10M+ engaged, startup-ready candidates.</h3>
              </div>
            </li>
            <li>
              <div className="icon">
                <i class="ri-tools-line"></i>
              </div>
              <div className="details">
                <h3>Everything you need to kickstart your recruiting — set up job posts, company branding, and HR tools within 10 minutes, all for free.</h3>
              </div>
            </li>
            <li>
              <div className="icon">
                <i class="ri-line-chart-line"></i>
              </div>
              <div className="details">
                <h3>A free applicant tracking system, or free integration with any ATS you may already use.</h3>
              </div>
            </li>
            <li>
              <div className="icon">
                <i class="ri-robot-line"></i>
              </div>
              <div className="details">
                <h3>Let us handle the heavy-lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates, filters it down based on your unique calibration, and schedules your favorites on your calendar in a matter of days.</h3>
              </div>
            </li>
          </ul>
          <div className="actions">
            <button className="btn secondary" onClick={handleRecruiterLoginClick}>Recruiter Log In</button>
            <button className="btn primary" onClick={handleCompanyLoginClick}>Company Log In</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLoveUs;