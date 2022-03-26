
   
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function Table1() {

  const [tasks, setTask] = useState([])
  const [loading, setLoading] = useState(false);
 

 useEffect(()=>{
   
    setLoading(true);

    const result = axios.get("http://localhost:3005/tasks")
    .then(function(response){
      console.log(response.tasks);
    });
    setTask(result.tasks);
},[]);

  if(loading) {
    return <p>Data is loading..</p>
  }

  return (
    <div>
        <h1>Task In Progress</h1>
         <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">SL.NO.</th>
              <th scope="col">TASK NAME</th>
              <th scope="col">CREATED</th>
              <th scope="col">DUE</th>
              <th scope="col">ASSIGNEE</th>
              <th scope="col">CATEGORY</th>
              <th scope="col">STATUS</th>
              <th scope="col">JIRA ID</th>
              <th scope="col">MOCK-UP</th>
              <th scope="col">NOTES</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr>
                <th scope="row" key={task.id}>{task.id}</th>
                <td>{task.taskname}</td>
                <td>{task.createdate}</td>
                <td>{task.duedate}</td>
                <td>{task.assignee}</td>
                <td>{task.category}</td>
                <td>{task.status}</td>
                <td>{task.jiraid}</td>
                <td>{task.mockup}</td>
                <td>{task.notes}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/task/${task.id}`}>
                    Done
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/task/edit/${task.id}`}
                  >
                    Edit
                  </Link>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Table1