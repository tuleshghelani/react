import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { JobContext } from "../../store/JobContent";

function Job_detail(props) {
  const [jobs, setjobs] = useContext(JobContext);
  const params = useParams();
  const p1 = params.jobId;

  var rows = [];

  useEffect(() => {    
    jobs.map((job) => job.id === p1 ? rows.push(job):
    "");
  });
  
  {jobs.map((job) => job.id == p1 ? 
    rows.push(job)
    : '')}

  return (
    < >
      
      <div className="float-left" >
      <b>Job id </b>: {rows[0].id}<br></br>
      <b>Job title </b>: {rows[0].title}<br></br>
      <b>Job Company </b>: {rows[0].company}<br></br>
      <b>Job Place </b>: {rows[0].place}<br></br>
      </div>
    </>
  );
}

Job_detail.propTypes = {};

export default Job_detail;
