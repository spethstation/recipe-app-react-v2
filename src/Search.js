import React, { useState } from "react";

export default function Search() {
  let [value, setValue] = useState("");

  function recipeSearch(event) {
    event.preventDefault();
    alert(`${value}`);
  }

  function showResults(event) {
    setValue(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={recipeSearch}>
        <input type="search" onChange={showResults} />
      </form>
    </div>
  );
}
