import React from "react";

import EachTodo from "./EachTodo";
import BadToDo from "./BadToDo";

const Todos = ({ entryList, setEntryList, fetchfromAPI }) => {
  const eachtodo = entryList?.filter((item) => item.type === "entry") || [];
  const badtodo = entryList?.filter((item) => item.type === "bad") || [];
  const totalhr = entryList?.reduce((prev, curr) => {
    return prev + (curr.hr || 0);
  }, 0);
  const savedhr = badtodo?.reduce((prev, curr) => {
    return prev + (curr.hr || 0);
  }, 0);
  return (
    <>
      <div className="bottomContainer">
        <div className="entrylist-title">
          <p className="title">Entry list</p>
          <div className="check">
            <input type="checkbox" className="custom-checkbox" name="" id="" />
          </div>
          <div className="entrylist">
            {eachtodo.map((list, index) => {
              return (
                <EachTodo
                  key={list._id}
                  id={list._id}
                  task={list.task}
                  hr={list.hr}
                  index={index}
                  setEntryList={setEntryList}
                  fetchfromAPI={fetchfromAPI}
                />
              );
            })}
          </div>
        </div>
        <div className="badlist-title">
          <p className="title">Bad list</p>
          <div className="check">
            <input type="checkbox" className="custom-checkbox" name="" id="" />
          </div>
          <div className="badlist">
            {badtodo.map((list, index) => {
              return (
                <BadToDo
                  key={list._id}
                  task={list.task}
                  hr={list.hr}
                  index={index}
                  id={list._id}
                  fetchfromAPI={fetchfromAPI}
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
