import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { addtask } from "../utils/handleAPI";

const Addtask = ({fetchfromAPI}) => {
  const [task, settask] = useState("");
  const [hr, sethr] = useState('');
  const [response, setResponse] = useState({})
  const handleSubmit = async(e) => {
    e.preventDefault()
    if(task.trim()==='' || hr.trim()===''){
        return alert("please fill the value")
    }
    let taskToAdd ={
        task, hr, type:'entry'
    }
   const response= await addtask(taskToAdd )
  //  const a = await response.json()
    // console.log(a) 
    fetchfromAPI()
    settask('')
    sethr('')
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            className="task"
            placeholder="add you task here..."
            onChange={(e) => settask(e.target.value)}
            value={task}
          />
          <input
            type="number"
            className="hour"
            placeholder="hour taken.."
            onChange={(e) => sethr(e.target.value)}
            value={hr}
          />
          <input type="submit" value="Add New Task" className="btn" />
        </div>
      </form>
    </>
  );
};

export default Addtask;
