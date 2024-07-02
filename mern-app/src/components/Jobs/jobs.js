import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './job';
import './jobs.css';

const Jobs = ({profile}) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/jobs');
                const filteredJobs = response.data.filter(post => response.author.profilePicture === profile.logo);
                setJobs(filteredJobs);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='jobs-container' >
            {jobs.map((job) => (
                <JobCard key={job._id} job={job} />
            ))}
        </div>
    );
};

export default Jobs;
