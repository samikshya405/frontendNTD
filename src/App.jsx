import React, { useEffect, useState } from "react";
import Addtask from "./component/Addtask";
import Todos from "./component/Todos";
import { getAlltodo } from "./utils/handleAPI";

const App = () => {
  const [entryList, setEntryList] = useState([]);
  const fetchfromAPI = async () => {
    const data = await getAlltodo();

    if (data.length > 0) {
      setEntryList(data);
    } else {
      setEntryList([]);
    }
  };
  useEffect(() => {
    fetchfromAPI();
  }, []);
  return (
    <div className="container">
      <h1>not to do list</h1>
      <Addtask fetchfromAPI={fetchfromAPI} />
      <Todos entryList={entryList} fetchfromAPI={fetchfromAPI} />
    </div>
  );
};

export default App;
