import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { deleteTask, moveTask } from "../utils/handleAPI";

const BadToDo = ({
  _id,
  task,
  hr,
  index,
  fetchfromAPI,
  checkBadTodo,
  setCheckBadTodo,
}) => {
  const handleMove = async () => {
    const data = {
      id: _id,
      type: "entry",
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
    const { name, checked } = e.target;
    if (checked) {
      setCheckBadTodo([...checkBadTodo, name]);
    } else {
      setCheckBadTodo(checkBadTodo.filter((id) => id != _id));
    }
  };
  return (
    <div className="eachEntrylist">
      <div className="first">
        <input
          type="checkbox"
          checked={checkBadTodo.includes(_id)}
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
        <div className="move-left" onClick={handleMove}>
          <ArrowBackIcon />
        </div>
        {/* <div className="delet" onClick={handleDelete}>
          <DeleteIcon />
        </div> */}
      </div>
    </div>
  );
};

export default BadToDo;
