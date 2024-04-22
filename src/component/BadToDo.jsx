import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { deleteTask, moveTask } from "../utils/handleAPI";

const BadToDo = ({id,task,hr,index,setEntryList,fetchfromAPI}) => {
    const handleMove=async()=>{
        const data ={
            id,
            type:"entry"
        }
       await moveTask(data)
       fetchfromAPI()
    }
    const handleDelete=async()=>{
        const idToDelete={_id:id}
        await deleteTask(idToDelete)
        fetchfromAPI()
    }
  return (
    <div className="eachEntrylist">
      <div className="first">
      <input type="checkbox" className="custom-checkbox" />
        <div className="number">
          <p className="para">{index+1}. {task}</p>
        </div>
      </div>
      <div className="eachHour">{hr}</div>
      <div className="edit">
        <div className="move-left" onClick={handleMove}>
          <ArrowBackIcon />
        </div>
        <div className="delet" onClick={handleDelete}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default BadToDo;
