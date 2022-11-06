import React from 'react';
// import img6 from './images/img6.png'

const Categories = ({ categories, filterItems }) => {
  return (
   
    <div className="btn-container">
         {categories.map((category, index) => {
        return (
          
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}>
            {category}
          </button>
              
        );
        
      })}
    </div>
  );
};

export default Categories;