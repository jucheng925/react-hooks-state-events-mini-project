import React from "react";

function CategoryFilter({categories, taskFilter, clickedCategory}) {

  function handleClick(category){
    taskFilter(category)
  }
  
  const renderButtons = categories.map((category)=> {
    return <button key={category} className={clickedCategory === category ? "selected" : null} onClick={()=>handleClick(category)}>{category}</button>
  } )
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
