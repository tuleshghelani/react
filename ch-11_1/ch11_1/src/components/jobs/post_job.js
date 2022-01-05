import React, { useContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { JobContext } from "../../store/JobContent";
import { useInput } from "@mui/material";

function Post_job(props) {
  const [jobs, setjobs] = useContext(JobContext);
  const [titleName, setTitle] = useState("");
  const [company, setCompany] = useState();
  const [place, setPlace] = useState();

  //   const { value, bind, reset } = useInput('');

  const onNewSubmitPost = (e) => {
    e.preventDefault();
    if (e.target[0].value === "" ||e.target[1].value==="" ) {
      alert(`Please fill all data`);
      return;
    }
    const latestId = jobs.length + 1;
    setTitle("");

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    setjobs((prevJobs) => [
      ...prevJobs,
      {
        id: latestId,
        title: e.target[0].value,
        company: e.target[1].value,
        place: e.target[2].value,
        time:date
      },
    ]);
  };
  const onHandleChange = (e) => {
    setTitle(...titleName, { titleName: e.target.value });
  };
  return (
    <>
      <form onSubmit={onNewSubmitPost}>
        <div className="form-group">
          <label htmlFor="titleName">Title</label>
          <input
            type="text"
            id="titleName"
            className="form-control"
            value={titleName.value}
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            className="form-control"
            onChange={(e) =>
              setCompany({ ...company, titleName: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place</label>
          <input
            type="text"
            id="place"
            className="form-control"
            onChange={(e) => setPlace({ ...place, titleName: e.target.value })}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success">Post New Job</button>
        </div>
      </form>
    </>
  );
}

Post_job.propTypes = {};

export default Post_job;
