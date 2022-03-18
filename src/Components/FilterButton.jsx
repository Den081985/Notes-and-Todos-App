import React from "react";

export const FilterButton = (props) => {
  return (
    <button
      type="button"
      className="btn btn-outline-dark filter-btn"
      onClick={() => props.setFilter(props.name)}
      aria-pressed={props.isPressed}
    >
      <span>{props.name}</span>
    </button>
  );
};
