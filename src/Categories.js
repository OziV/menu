import React, { useEffect } from "react";

function Categories({ categories, filter }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
