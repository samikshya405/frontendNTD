import React, { useState } from "react";

import EachTodo from "./EachTodo";
import BadToDo from "./BadToDo";
import DeleteIcon from "@mui/icons-material/Delete";

const Todos = ({ entryList, fetchfromAPI }) => {
  const [checkedToDo, setCheckedToDo] = useState([]);
  const [checkBadTodo, setCheckBadTodo] = useState([]);
  const eachtodo = entryList?.filter((item) => item.type === "entry") || [];
  const badtodo = entryList?.filter((item) => item.type === "bad") || [];
  const totalhr = entryList?.reduce((prev, curr) => {
    return prev + (curr.hr || 0);
  }, 0);
  const savedhr = badtodo?.reduce((prev, curr) => {
    return prev + (curr.hr || 0);
  }, 0);
  const handleEntryCheckBox = (e) => {
    const { checked } = e.target;

    if (!checked) {
      setCheckedToDo([]);
    } else {
      setCheckedToDo(eachtodo.map((task) => task._id));
    }
  };
  const handleBadCheckBox=(e)=>{
    const {checked} = e.target
    if (!checked) {
      setCheckBadTodo([]);
    } else {
      setCheckBadTodo(badtodo.map((task) => task._id));
    }
  }
  const deleteSelecetion=()=>{

  }
  return (
    <>
      <div className="bottomContainer">
        <div className="entrylist-title">
          <p className="title">Entry list</p>
          <div className="check">
            {eachtodo.length > 0 && (
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={eachtodo.length === checkedToDo.length}
                name={checkBadTodo}
                id=""
                onChange={handleEntryCheckBox}
              />
            )}

            {checkedToDo.length > 0 && (
              <div onClick={deleteSelecetion} className="delete">
                
                <DeleteIcon />
              </div>
            )}
          </div>
          <div className="entrylist">
            {eachtodo.map((list, index) => {
              return (
                <EachTodo
                  key={list._id}
                  {...list}
                  index={index}
                  fetchfromAPI={fetchfromAPI}
                  checkedToDo={checkedToDo}
                  setCheckedToDo={setCheckedToDo}
                />
              );
            })}
          </div>
        </div>
        <div className="badlist-title">
          <p className="title">Bad list</p>
          <div className="check">
            {badtodo.length > 0 && (
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={badtodo.length === checkBadTodo.length}
                name=""
                id=""
                onChange={handleBadCheckBox}
              />
            )}

            {checkBadTodo.length > 0 && (
              <div className="delete" onClick={deleteSelecetion}>
                <DeleteIcon />
              </div>
            )}
          </div>
          <div className="badlist">
            {badtodo.map((list, index) => {
              return (
                <BadToDo
                  key={list._id}
                  {...list}
                  index={index}
                  id={list._id}
                  fetchfromAPI={fetchfromAPI}
                  checkBadTodo={checkBadTodo}
                  setCheckBadTodo={setCheckBadTodo}
                />
              );
            })}
          </div>
          <div className="message">
            You could have saved <span className="saved-hour">{savedhr}</span>{" "}
            hour last week
          </div>
        </div>
      </div>
      <div className="total-hour-message">
        The total hours allocated ={" "}
        <span className="total-hour">{totalhr}</span> hr
      </div>
    </>
  );
};

export default Todos;
