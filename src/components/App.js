import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasksArray, setTasksArray] = useState(TASKS)
  const [clickedCategory, setClickCategory] = useState("All")

  function taskFilter(category) {
    setClickCategory(category)
  }
  const filterArray = tasksArray.filter((task)=> {
     if (clickedCategory === "All") return true
      return task.category === clickedCategory
     })
   
  function addTask(task){
    setTasksArray([...tasksArray, task])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        clickedCategory={clickedCategory}
        taskFilter={taskFilter}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={filterArray}/>
    </div>
  );
}

export default App;
