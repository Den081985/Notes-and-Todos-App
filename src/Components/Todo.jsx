import React from "react";

export const Todo = ({ tasks }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li className="list-group-item todo" key={task.id}>
          <span className="todo-span">
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              aria-label="..."
            />
            {task.name}
          </span>
          <div className="todo-btns">
            <button type="button" className="btn btn-dark todo-edit">
              Edit
            </button>
            <button type="button" className="btn btn-dark todo-remove">
              &times;
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
