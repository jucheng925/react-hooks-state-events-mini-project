import React from "react";
import Task from "./Task"

function TaskList({tasks, onDelete}) {


  const renderTasks = tasks.map((task)=> {
     return <Task key={task.text} text={task.text} category={task.category} onDelete={onDelete}  />
  })
 
  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
