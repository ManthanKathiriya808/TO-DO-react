import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [task,setTask] = useState("")
  const [list,setTaskList] = useState([])

  function handleTask(){
   
    let obj={
      task,
      status:false,
      id:uuidv4()
    }


    setTaskList([...list, obj])
  }
  
  function updateTask(id){
    const update = list.map((ele) => ele.id === id ? {...ele,status: !ele.status} : ele)
    setTaskList(update)
  }

  function delTask(id){
    const deleData = list.filter((ele) => ele.id != id)
    // console.log(deleData)
    setTaskList(deleData)
  }

  return (
    <>
      <div>
        <div className="container p-5 mt-5 text-center border">
          <h1>To-DO List</h1>
          <div className="box mt-5">
          <input className='bg-white text-dark me-5' type="text" onChange={(e)=> setTask(e.target.value)}/>
          <button onClick={handleTask} className='btn btn-danger'>Add Task</button>
          </div>

          <div className="box mt-5">
        {  
             list?.map((ele) => (
             <div className="container fs-4 ">
               <div className={ele.status ? "row bg-success-subtle" : "row bg-danger-subtle"} style={{display:"flex", justifyContent:"space-between"}} key={ele.id}>
                <div className="col-2">{ele.task}</div>
                <div className="col-2"><button className="btn btn-primary" onClick={() => updateTask(ele.id)}>{ele.status ? "completed" : "not completed"}</button></div>
                <div className="col-2"><button className='btn btn-secondary' onClick={() => delTask(ele.id)}>Delete</button></div>
              </div>
             </div>
            ))
    }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
