import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocation, faGraduationCap, faBriefcase, faTools, faLink, faBullseye } from '@fortawesome/free-solid-svg-icons';

const ApplicantProfile = () => {
    const [user, loading] = useAuthState(auth);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { fullName, profilePicture, about, location, resume, education, experience, skills, linkedInProfile, desiredJobTitle } = event.target.elements;
        const email = user?.email;
        const userId = user?.uid;

        const newApplicant = {
            userId,
            fullName: fullName.value,
            email,
            profilePicture: profilePicture.files[0], 
            about: about.value,
            location: location.value,
            resume: resume.files[0], 
            education: education.value,
            experience: experience.value,
            skills: skills.value.split(','),
            linkedInProfile: linkedInProfile.value,
            desiredJobTitle: desiredJobTitle.value
        };

        try {
            await axios.post('http://localhost:8080/api/applicant', newApplicant);
            alert("Profile Created!");
            window.location.href = '/applicant/home';
        } catch (error) {
            alert("Error submitting the form: " + error.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="content">
            <h2 className="text">Complete Applicant Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <span className="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input name="fullName" placeholder="Full Name" required />
                </div>
                <div className="field">
                    <input type="file" name="profilePicture" placeholder="Profile Picture" />
                </div>
                <div className="field">
                    <span className="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <textarea name="about" placeholder="About" required />
                </div>
                <div className="field">
                    <span className="icon">
                        <FontAwesomeIcon icon={faLocation} />
                    </span>
                    <input name="location" placeholder="Location" required />
                </div>
                <div className="field">
                    <input type="file" name="resume" placeholder="Resume" />
                </div>
                <div className="field">
                    <span className="icon">
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </span>
                    <input name="education" placeholder="Education" required />
                </div>
                <div className="field">
                    <span className="icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                    </span>
                    <input name="experience" placeholder="Experience" required />
                </div>
                <div className="field">
                    <span className="icon">
                        <FontAwesomeIcon icon={faTools} />
                    </span>
                    <input name="skills" placeholder="Skills (comma separated)" required />
                </div>
                <div className="field">
                    <span className="icon">
                        <FontAwesomeIcon icon={faLink} />
                    </span>
                    <input name="linkedInProfile" placeholder="LinkedIn Profile" required />
                </div>
                <div className="field">
                    <span className="icon">
                        <FontAwesomeIcon icon={faBullseye} />
                    </span>
                    <input name="desiredJobTitle" placeholder="Desired Job Title" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ApplicantProfile;
