import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { JobContext } from "../../store/JobContent";
import { useHistory, useParams } from "react-router";

function Edit_job(props) {
  let [jobs, setjobs] = useContext(JobContext);
  const [titleName, setTitle] = useState("");
  const [company, setCompany] = useState();
  const [place, setPlace] = useState();

  const titleRef = useRef(); 
  const companyRef = useRef(); 
  const placeRef = useRef(); 

  const params = useParams();
  const p1 = params.jobId;
  // console.log(p1);
  var rows = [];

  jobs.map((job) => (job.id == p1 ? rows.push(job) : ""));
  const history = useHistory();

  useEffect(() => {
    setTitle(rows[0].title);
    setCompany(rows[0].company);
    setPlace(rows[0].place);
    titleRef.current.value=titleName;
    companyRef.current.value=company;
    placeRef.current.value=place;
  });

  const update=(job)=>{
    // setjobs()
    console.log(job)
    setjobs(jobs[1].title="wow")
  }

  const onEditJobForm = (e) => {
    // jobs.map((job) => job.id == p1 ? setjobs(job.title="aa"):     "");
    e.preventDefault();
    // jobs.map((job) => job.id == p1 ? update(job) :     "");
    // setjobs(jobs.filter((job)=>
    //   job.id!=p1
    // ))
    setjobs(jobs.filter((job)=>
      job.id!==p1
    ))
    // setjobs((prevJobs) => [
    //     ...prevJobs, {
    //         id: p1,
    //         title: e.target[0].value,
    //         company: e.target[1].value,
    //         place: e.target[2].value,
    //         date:rows.date
    //       },])

    // var temparray=[];
    // temparray=[...jobs]

    // setjobs((prevJobs) => [        
    //     {
    //       id: p1,
    //       title: e.target[0].value,
    //       company: e.target[1].value,
    //       place: e.target[2].value,
    //       time:rows.date
    //     },...prevJobs,
    //   ])

    jobs[p1-1].title=e.target[0].value;
    jobs[p1-1].company=e.target[1].value;
    jobs[p1-1].place=e.target[2].value;
    // console.log(temparray)
    // setjobs((prevJobs) => [
    //     ...prevJobs,
    //     {
    //       id: p1,
    //       title: e.target[0].value,
    //       company: e.target[1].value,
    //       place: e.target[2].value,
    //       time:rows.date
    //     },
    //   ]);
    history.push(`/jobs`);
    // console.log(jobs[1].title)
    
  };

  //   setTitle(rows[0].title);
  const onHandleChange = (e) => {
    setTitle(...titleName, { titleName: e.target.value });

  };

  return (
    <>
      <form onSubmit={onEditJobForm}>
        <h1>Edit Form</h1>
        <div className="form-group">
          <label htmlFor="titleName">Title</label>
          <input
            type="text"
            id="titleName"
            className="form-control"
            ref={titleRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            className="form-control"
            ref={companyRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place</label>
          <input
            type="text"
            id="place"
            className="form-control"
            ref={placeRef}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success">Edit Job</button>
        </div>
      </form>
    </>
  );
}

Edit_job.propTypes = {};

export default Edit_job;
