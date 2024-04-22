import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { deleteTask, moveTask } from "../utils/handleAPI";

const EachTodo = ({id, task, hr ,index,fetchfromAPI}) => {
    const handleMove=async()=>{
        console.log(id)
        const data ={
            id,
            type:"bad"
        }
        await moveTask(data)
        fetchfromAPI()
    }
    const handleDelete=async()=>{
        const idToDelete={_id:id}
       await  deleteTask(idToDelete)
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
        <div className="delet" onClick={handleDelete}>
         
          <DeleteIcon />
        </div>
        <div className="move-right" onClick={handleMove}>
       
          <ArrowRightAltIcon />
        </div>
      </div>
    </div>
  );
};

export default EachTodo;
