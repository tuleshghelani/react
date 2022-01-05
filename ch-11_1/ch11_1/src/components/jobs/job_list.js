import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { JobContext } from "../../store/JobContent";

function Job_list(props) {
  const [job, setstate] = useState(props.job)
    const editData= (id)=>{
        props.editJob(id);
    }
    const showData= (id)=>{
        props.showJob(id);
    }
    const deleteData= (id)=>{
        props.deleteData(id);
    }
  return (
    <>
      <tr key={props.job.id}>
        <td onClick={()=>showData(job.id)}>{job.id}</td>
        <td onClick={()=>showData(props.job.id)}>{job.title}</td>
        <td onClick={()=>showData(props.job.id)}>{props.job.company}</td>
        <td onClick={()=>showData(props.job.id)}>{props.job.place}</td>
        <td onClick={()=>showData(props.job.id)}>{props.job.time}</td>
        <td ><button onClick={()=>editData(props.job.id)}>Edit</button></td>
        {/* <td ><button onClick={()=>deleteData(props.job.id)}>Remove</button></td> */}

        
      </tr>

     
      {/* {content} */}

    </>
  );
}

Job_list.propTypes = {};

export default Job_list;