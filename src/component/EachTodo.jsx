import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { deleteTask, moveTask } from "../utils/handleAPI";

const EachTodo = ({
  _id,
  task,
  hr,
  index,
  fetchfromAPI,
  checkedToDo,
  setCheckedToDo,
}) => {
  const handleMove = async () => {
    const data = {
      id: _id,
      type: "bad",
    };
    await moveTask(data);
    fetchfromAPI();
  };
  const handleDelete = async () => {
    const idToDelete = [{ _id }];
    await deleteTask(idToDelete);
    fetchfromAPI();
  };
  const handleCheckedBox = (e) => {
    const {name,checked}=e.target
    if(checked){
      setCheckedToDo([...checkedToDo,name])
    }else{
      setCheckedToDo(checkedToDo.filter((id)=>id!=_id))
    }
  };
  return (
    <div className="eachEntrylist">
      <div className="first">
        <input
          type="checkbox"
          checked={checkedToDo.includes(_id)}
          name={_id}
          onChange={handleCheckedBox}
          className="custom-checkbox"
        />
        <div className="number">
          <p className="para">
            {index + 1}. {task}
          </p>
        </div>
      </div>
      <div className="eachHour">{hr}</div>
      <div className="edit">
        {/* <div className="delet" onClick={handleDelete}>
          <DeleteIcon />
        </div> */}
        <div className="move-right" onClick={handleMove}>
          <ArrowRightAltIcon />
        </div>
      </div>
    </div>
  );
};

export default EachTodo;
