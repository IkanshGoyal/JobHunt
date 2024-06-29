import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faIndustry, faMoneyBillWave, faLink, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import './jobs.css';

const JobCard = ({ job }) => {
    return (
        <div className='job-card'>
            <div className='job-header'>
                <h2 className='job-title'>{job.title}</h2>
                <h3 className='job-company'>{job.company.name}</h3>
            </div>
            <div className='job-details'>
                <span className='job-location'><FontAwesomeIcon icon={faLocation} /> {job.location}</span>
                <span className='job-industry'><FontAwesomeIcon icon={faIndustry} /> {job.industry}</span>
                <span className='job-compensation'><FontAwesomeIcon icon={faMoneyBillWave} /> {job.compensation}</span>
            </div>
            <div className='job-description'>{job.description}</div>
            <div className='job-qualifications'>{job.qualifications}</div>
            <a href={job.applyLink} className='job-apply-link'><FontAwesomeIcon icon={faLink} /> Apply Now</a>
            {job.shareOption && <button className='job-share'><FontAwesomeIcon icon={faShareSquare} /> Share</button>}
            <div className='job-applicants'>
                {job.applicants.length} applicants
            </div>
        </div>
    );
};

export default JobCard;
