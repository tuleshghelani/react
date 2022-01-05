/* eslint-disable react/jsx-pascal-case */
import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import Jobs from "../components/jobs";
import Post_job from "../components/jobs/post_job";
import Job_list from "../components/jobs/job_list";

export const JobContext = createContext();

export const JobProvider = (props) => {
  const [jobs, setjobs] = useState([
    {
      id: 1,
      title: "Adviser",
      company: "TATA",
      place: "Chennai",
      time: "5/10/2022",
    },
    {
      id: 2,
      title: "Accountant",
      company: "Spacex",
      place: "Florida",
      time: "15/1/2020",
    },
    {
      id: 3,
      title: "Webdeveloper",
      company: "TCS",
      place: "Mumbai",
      time: "5/1/2022",
    },
  ]);


  const [jobLength,setJobLength]=useState(jobs.length);

  // console.log(jobs);

  return (
    <div>
      <JobContext.Provider value={[jobs, setjobs]}>
        {props.children}
        {/* <Jobs /> */}
        {/* <Post_job />
        <Job_list />
        <Jobs /> */}
      </JobContext.Provider>
    </div>
  );
};
