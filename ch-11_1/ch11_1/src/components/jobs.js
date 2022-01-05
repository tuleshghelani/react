/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Suspense, useContext, useState } from "react";
import PropTypes from "prop-types";
import { JobContext } from "../store/JobContent";
import Job_list from "./jobs/job_list";
import { Route, useHistory } from "react-router";
import Post_job from "./jobs/post_job";
import Job_detail from "./jobs/job_detail";
// import Edit_job from "./jobs/Edit_job";
const Edit_job=React.lazy(() => import('./jobs/Edit_job'));

function Jobs(props) {
  const [jobs, setjobs] = useContext(JobContext);
  const [showJobs, setShowJobs] = useState(true);
  const history = useHistory();

  const showJobList = () => {
    setShowJobs(!showJobs);
  };

  const postJob = () => {
    history.push("jobs/newpost")
  };

  const showJob= (e)=>{
    // console.log(e);
    history.push(`/jobs/${e}`);
    
  }
  const deleteData= (e)=>{
    setjobs(jobs.filter((job)=>
      job.id!==e
    ))
    history.push(`/jobs`);
    console.log(jobs)
  }
  const editJob= (e)=>{
    // console.log(e);
    history.push(`/jobs/${e}/edit`);
  }
  const nextPath=(path)=> {
    history.push(path);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <button className="btn btn-primary" onClick={showJobList}>
            job-list
          </button>
          <button className="btn btn-primary" onClick={() => nextPath('/jobs/new/post') }>
            job-post
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-xs-6 col-sm-6 float-left"
            style={{ marginTop: "50px" }}
          >
            {showJobs && (
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>company</th>
                    <th>place</th>
                    <th>time</th>
                    <th>Action</th>
                    {/* <th>delte</th> */}
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    // eslint-disable-next-line react/jsx-pascal-case
                    <Job_list key={job.id} job={job} showJob={showJob} editJob={editJob} deleteData={deleteData}></Job_list>
                  ))}
                  {/* {content} */}
                </tbody>
              </table>
              // <Job_list />
            )}
          </div>
          <div className="col-xs-6 col-sm-6 float-right" style={{ marginTop: "50px" }}>
            <div className="">
              <Route path="/jobs/new/post" exact>                
                <Post_job />
              </Route>
              <Route path="/jobs/:jobId" exact>                
                <Job_detail/>
              </Route>
              <Route path="/jobs/:jobId/edit" exact>   
              <Suspense fallback={<div>Loading...</div>}>
                <Edit_job />
                </Suspense>             
              </Route>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Jobs.propTypes = {};

export default Jobs;
