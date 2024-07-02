import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import axios from 'axios';
import '../MainProfile/profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faUserFriends, faGlobe, faLocation, faBriefcase, faAlignLeft, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Posts from '../Posts/posts';
import Loading from '../Common/Loading';

const ApplicantMain = () => {
    const [user, loading] = useAuthState(auth);
    const [profile, setProfile] = useState(null);
    const [followersCount, setFollowersCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);

    useEffect(() => {
        const fetchProfile = async () => {
            if (user) {
                try {
                    const response = await axios.get(`http://localhost:8080/api/applicant/profile/${user.uid}`);
                    setProfile(response.data);
                    fetchFollowersCount(response.data.id);
                    fetchFollowingCount(response.data.id);
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

    const fetchFollowersCount = async (profileId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/applicant/followers/${profileId}`);
            setFollowersCount(response.data.count || 0);
        } catch (error) {
            console.error('Error fetching followers count:', error);
        }
    };

    
    const handleNewPost = () => {
        window.location.href = '/add-newPost/applicant';
    };

    const fetchFollowingCount = async (profileId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/applicant/following/${profileId}`);
            setFollowingCount(response.data.count || 0);
        } catch (error) {
            console.error('Error fetching following count:', error);
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <div>No user authenticated.</div>;
    }

    if (!profile) {
        return <div>No profile data available.</div>;
    }

    return (
        <div className={'profile-page'}>
            <div className="profile-details">
                <div className="detail-item">
                    <div>
                        <FontAwesomeIcon icon={faUserFriends} size='2x' />
                        <span className='first-span'>{followersCount}</span>
                    </div>
                    <span className='second-span'>Followers</span>
                </div>
                <div className="detail-item">
                    <div>
                        <FontAwesomeIcon icon={faUserFriends} size='2x' />
                        <span className='first-span'>{followingCount}</span>
                    </div>
                    <span className='second-span'>Following</span>
                </div>
                <div className="detail-item">
                    <div>
                        <FontAwesomeIcon icon={faGlobe} size='2x' />
                        <span className='first-span'>{profile.linkedInProfile}</span>
                    </div>
                    <span className='second-span'>LinkedIn</span>
                </div>
                <div className="detail-item">
                    <div>
                        <FontAwesomeIcon icon={faLocation} size='2x' />
                        <span className='first-span'>{profile.location}</span>
                    </div>
                    <span className='second-span'>Location</span>
                </div>
                <div className="detail-item">
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} size='2x' />
                        <span className='first-span'>{profile.desiredJobTitle}</span>
                    </div>
                    <span className='second-span'>Desired Job</span>
                </div>
                <div className="detail-item">
                    <div>
                        <FontAwesomeIcon icon={faGraduationCap} size='2x' />
                        <span className='first-span'>
                            {profile.education}
                        </span>
                    </div>
                    <span className='second-span'>Education</span>
                </div>
                <div className="detail-item about-field">
                    <div>
                        <FontAwesomeIcon icon={faAlignLeft} size='2x' />
                        <span className='first-span'>{profile.about}</span>
                    </div>
                    <span className='second-span'>About</span>
                </div>
            </div>
            <div className="profile-sections">
                <div className="profile-section posts-sec">
                    <div className='top-title'>
                        <h2>Posts</h2>
                        <div className='add-post' onClick={handleNewPost} >
                            <FontAwesomeIcon icon={faPlus} />
                            <span>Add Post</span>
                        </div>
                    </div>
                    <Posts profile={profile} />
                </div>
            </div>
        </div>
    );
};

export default ApplicantMain;