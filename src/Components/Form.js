import React, { useState } from 'react'
import { useNavigate  } from "react-router-dom";
import axios from 'axios';


function Form() {
    let navigate  = useNavigate ();
    const [task,setTask] = useState({
         id: "",
    taskname: "",
    createdate: "",
    duedate: "",
    assignee: "",
    category: "",
    status: "",
    jiraid: "",
    mockup: "",
    notes: "",
  });  
    const {taskname,createdate,duedate,assignee,category,status,jiraid,mockup,notes} = task;
    const onInputChange = e =>{
        setTask({...task,[e.target.name]:e.target.value});
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3005/tasks");
        navigate.push('./Components/Tables/Table1');
      };
  return (
    <div>
        <form onSubmit={e => onSubmit(e)}
        style={{display:'flex',
                            flexDirection:'column',
                            margin:'100px',
                            padding:'100px'}}>
            <div style={{display:'flex',
                            flexDirection:'row'}}>
            <div className="mb-3 col-3" style={{width:'40%'}}>
                {/* <label for="exampleInput" className="form-label">Task Name</label> */}
                <input name='taskname' value={taskname} onChange={e => onInputChange(e)} type="text" className="form-control" id="exampleInput" placeholder='Task Name' />
            </div>
            <div className="input-group mx-3 mb-3" >
                <button name='category' value={category}  className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>Select Category</button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">NAP Bug Task</a></li>
                        <li><a className="dropdown-item" href="#">NAP dev</a></li>
                        <li><a className="dropdown-item" href="#">New Project</a></li>
                    </ul>
            </div>
            <div className="mb-3 col-3" style={{width:'15%'}}>
                {/* <label for="InputJira" className="form-label">Jira ID</label> */}
                <input name='jiraid' value={jiraid} onChange={e => onInputChange(e)} type="text" className="form-control" id="exampleInputPassword1" placeholder='Jira Id' />
            </div>
            </div>
            <div style={{display:'flex',
                            flexDirection:'row'}}>
            <div className="input-group mb-3 ">
                <button name='assignee' value={assignee} className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>Select Assignee</button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Bibhu</a></li>
                    <li><a className="dropdown-item" href="#">Tanzil</a></li>
                </ul>
           </div>
            <div className="input-group mb-3 mx-3 ">
                <button name='status' value={status} className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:'100%'}}>Select Status</button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">In QC</a></li>
                    <li><a className="dropdown-item" href="#">In Deployment</a></li>
                    <li><a className="dropdown-item" href="#">On Hold</a></li>
                </ul>
           </div>
           <div  className='mb-3 mx-3'>
                <label for="date">Created Date</label>
                <input name='createdate' value={createdate}  type="date" id="date" />

           </div>
           <div className=' mb-3 '>
                <label for="date">Due Date</label>
                <input name='duedate' value={duedate} type="date" id="date" />

            </div>
           </div>
           <div className="mb-3 col-2.5 ">
                {/* <label for="InputMock" className="form-label">Mock-Up</label> */}
                <input name='mockup' value={mockup} onChange={e => onInputChange(e)} type="text" className="form-control" id="InputMock" placeholder='Mock-Up' />
            </div>
            <div className="mb-3">
                {/* <label for="InputComments" className="form-label">Other Comments</label> */}
                <input name='notes' value={notes} onChange={e => onInputChange(e)} type="text" className="form-control" id="InputComments" placeholder='Other Comments' style={{width:'100%',height:'200px'}} />
            </div>
            
            <button type="submit" className="btn btn-danger">Submit</button>
        </form>
    </div>
  )
}

export default Form


