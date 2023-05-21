import React, { useEffect, useState } from 'react';
import axios from 'axios';

import "./AllJobs.css"
const AllJobs = () => {
  
    const [jobs, setJobs] = useState([]);
    
  
    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await axios.get('http://localhost:3001/Students/jobs/all'); 
       
          setJobs(response.data);
        
        } catch (error) {
          console.error('Error fetching jobs:', error);
        }
      };
  
      fetchJobs();
    }, []);
  
   
  
  
    return (
      <div>
        <h1>Jobs List</h1>
  
        
  
        <ul>
          {jobs.map((job) => (
            <li key={job.jobId}>
              <h2>{job.title}</h2>
              <p>Location: {job.location}</p>
              <p>Salary(in LPA): {job.salary}</p>
              <p>JobId: {job.jobId}</p>
              <p>Company Name: {job.companyName}</p>
              <p>Aplly Link: {job.applyLink}</p>
              <p>Last Date: {job.LastDate}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  
 
}

export default AllJobs
