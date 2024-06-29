import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import axios from 'axios';
import './profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faGlobe, faLocation, faIndustry, faUsers, faAlignLeft, faUserFriends, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import Posts from '../Posts/posts';
import Jobs from '../Jobs/jobs';
import Ads from '../Ads/AdCards';
import CompanyAnalytics from './CompanyAnalytics';

const CP = () => {
    const [user, loading] = useAuthState(auth);
    const [profile, setProfile] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            if (user) {
                try {
                    const response = await axios.get(`http://localhost:8080/api/company/profile/${user.uid}`);
                    setProfile(response.data);
                } catch (error) {
                    console.error('Error fetching profile:', error);
                }
            }
        };

        if (!loading) {
            fetchProfile();
        }
    }, [user, loading]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <div>No user authenticated.</div>;
    }

    if (!profile) {
        return <div>No profile data available.</div>;
    }

    return (
        <div className={`profile-page ${darkMode ? 'dark-mode' : ''}`}>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <div className="profile-header">
                <img src={profile.logo || "https://static.vecteezy.com/system/resources/previews/002/767/731/original/jh-logo-letter-initial-logo-designs-template-free-vector.jpg"} alt="logo" />
                <h2>{profile.name}</h2>
                <button className="follow-button">Follow</button>
                <button className="share-button"><FontAwesomeIcon icon={faShareAlt} /> Share</button>
            </div>
            <div className="profile-details">
                <div className="detail-item">
                    <FontAwesomeIcon icon={faBuilding} />
                    <span>{profile.name}</span>
                </div>
                <div className="detail-item">
                    <FontAwesomeIcon icon={faGlobe} />
                    <span>{profile.website}</span>
                </div>
                <div className="detail-item">
                    <FontAwesomeIcon icon={faLocation} />
                    <span>{profile.location}</span>
                </div>
                <div className="detail-item">
                    <FontAwesomeIcon icon={faIndustry} />
                    <span>{profile.industry}</span>
                </div>
                <div className="detail-item">
                    <FontAwesomeIcon icon={faUsers} />
                    <span>{profile.size} employees</span>
                </div>
                <div className="detail-item">
                    <FontAwesomeIcon icon={faUserFriends} />
                    <span>{profile.followers} followers</span>
                </div>
                <div className="detail-item">
                    <FontAwesomeIcon icon={faAlignLeft} />
                    <span>{profile.description}</span>
                </div>
            </div>
            <div className="profile-sections">
                <div className="profile-section">
                    <h3>Posts</h3>
                    <Posts />
                </div>
                <div className="profile-section">
                    <h3>Jobs</h3>
                    <Jobs />
                </div>
                <div className="profile-section">
                    <h3>Ads</h3>
                    <Ads />
                </div>
                <div className="profile-section">
                    <h3>Analytics</h3>
                    <CompanyAnalytics views={profile.analytics.views} clicks={profile.analytics.clicks} />
                </div>
            </div>
        </div>
    );
};

export default CP;
