const baseUrl = import.meta.env.MONGODB_URL + "/api/v1/tasks";


//get the data
export const getAlltodo = async () => {
try {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
  
  
} catch (error) {
  console.log(error)
  
}
 
  
};


//add the data
export const addtask = async (data) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response
    // getAlltodo(setEntryList)
    // console.log(await response.json())
  } catch (error) {}
};

//update the task
export const moveTask =async(data)=>{
    
    try {
        const response = await fetch(baseUrl,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })
        return response
    } catch (error) {
        
    }

}

//delete the task
export const deleteTask=async(idtoDelete)=>{
    const response = await fetch(baseUrl,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(idtoDelete)
        
    })
    return response
}