import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import axios from 'axios';
import './Dashboard.css';
import Posts from '../Posts/posts';
import DashboardMain from './CDMain';
import CompanyAnalytics from '../MainProfile/CompanyAnalytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faFileAlt, faChartLine, faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Common/Loading';

const Dashboard = ({ toggleTheme, theme }) => {
    const [activeComponent, setActiveComponent] = useState('Dashboard');
    const [user, loading] = useAuthState(auth);
    const [profile, setProfile] = useState(null);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

    useEffect(() => {
        const fetchProfile = async () => {
            if (user) {
                try {
                    const response = await axios.get(`http://localhost:8080/api/company/profile/${user.uid}`);
                    setProfile(response.data);
                } catch (error) {
                    console.error('Error fetching profile:', error);
                    setProfile({});
                }
            }
        };

        if (!loading) {
            fetchProfile();
        }
    }, [user, loading]);

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <div>No user authenticated.</div>;
    }

    if (!profile) {
        return <div>No profile data available.</div>;
    }

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Dashboard':
                return <DashboardMain />
            case 'Posts':
                return <Posts />;
            case 'Analytics':
                return <CompanyAnalytics views={0} clicks={0} />;
            default:
                return <div>Welcome to the Dashboard</div>;
        }
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="logo">
                    <img src={profile.logo} alt="Logo" />
                    <h1>{profile.name}</h1>
                </div>
                <nav className="nav-menu">
                    <ul>
                        {[
                            { name: 'Dashboard', icon: faTachometerAlt },
                            { name: 'Posts', icon: faFileAlt },
                            { name: 'Analytics', icon: faChartLine },
                            { name: 'Search', icon: faSearch },
                            { name: 'Settings', icon: faCog }
                        ].map(item => (
                            <li
                                key={item.name}
                                className={`nav-item ${activeComponent === item.name ? 'active' : ''}`}
                                onClick={() => setActiveComponent(item.name)}
                            >
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <main className="main-content-d">
                {renderComponent()}
            </main>
        </div>
    );
};

export default Dashboard;