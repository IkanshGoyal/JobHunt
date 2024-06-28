import React from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css';
import heroDarkImg from '../images/hero-img.png';

const Hero = ({ theme }) => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/UserCards');
  };

  const handleDiscoverMoreClick = () => {
    navigate('/about');
  };

  return (
    <section className='hero_section'>
      <div className={`container ${theme === 'light-theme' ? 'light-theme' : ''}`}>
        <div className={`hero__glassmorphic ${theme === 'light-theme' ? '' : 'dark-mode'}`}>
         
          <div className="hero_wrapper">
            <div className="hero__content">
              <div>
                <h1>Find Your Dream Job</h1>
                <h1>Connect with Top Recruiters</h1>
                <h1 className="highlight">And Leading Companies</h1>
              </div>
              <p className="description">
                Join our platform to explore opportunities, whether you're an applicant, recruiter, or a company looking for talent. 
                Log in to access tailored services and resources that meet your specific needs.
              </p>

              <div className="hero__btns">
                <button className="primary__btn" onClick={handleGetStartedClick}>Get Started Now!</button>
                <button className="secondary__btn" onClick={handleDiscoverMoreClick}>Discover More</button>
              </div>
            </div>
            <div className="hero__img">
              <img src={heroDarkImg} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
