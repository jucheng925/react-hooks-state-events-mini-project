import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formText, setFormText] = useState("")
  const [formCategory, setFormCategory] = useState("Code")
  
  const newTask = {
    text: formText,
    category : formCategory
    }

  function handleInput(event) {
    setFormText(event.target.value)
  }

  function handleCategory(event){
    setFormCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(newTask)
    setFormText("")
    setFormCategory("Code")
  }

  const noAllCategories = categories.filter( category=> category !== "All")
  const renderOptions = noAllCategories.map(category => <option value={category} key={category}>{category}</option>)


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formText} onChange={handleInput}/>
      </label>
      <label>
        Category
        <select name="category" value={formCategory} onChange={handleCategory}>
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
