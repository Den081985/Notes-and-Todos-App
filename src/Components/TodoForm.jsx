import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo(name);
    setName("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-floating mb-4">
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Input your todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="floatingPassword">Todo</label>
      </div>
    </form>
  );
};
