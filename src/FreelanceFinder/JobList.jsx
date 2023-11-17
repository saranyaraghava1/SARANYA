// JobList.js
import React from "react";
const JobList = ({ jobs }) => {
  return (
    <div>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
