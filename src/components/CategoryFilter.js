import React from "react";

function CategoryFilter({categories, taskFilter, clickedCategory}) {
  
  const renderButtons = categories.map((category)=> {
    return <button key={category} 
                  className={clickedCategory === category ? "selected" : null} 
                  onClick={()=>taskFilter(category)}
                  >
            {category}
                </button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
