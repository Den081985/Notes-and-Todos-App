import React, { Fragment, useEffect, useRef, useState } from "react";

//кастомный хук для получения предыдущего состояния
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const Todo = (props) => {
  const [isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState("");

  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.editTodo(props.id, newName);
    setNewName("");
    setEditing(false);
  };
  const viewTemplate = (
    <Fragment>
      <span className="todo-span">
        <input
          id={props.id}
          className="form-check-input me-1"
          type="checkbox"
          value=""
          aria-label="..."
          defaultChecked={props.completed}
          onChange={() => props.toogleCompleted(props.id)}
        />
        {props.name}
      </span>
      <div className="todo-btns">
        <button
          type="button"
          className="btn btn-dark todo-edit"
          onClick={() => setEditing(true)}
          ref={buttonRef}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-dark todo-remove"
          onClick={() => props.remove(props.id)}
        >
          &times;
        </button>
      </div>
    </Fragment>
  );

  const editTamplate = (
    <form onSubmit={submitHandler}>
      <div className="todo-form">
        <div className="mb-3">
          <label htmlFor={props.id} className="form-label">
            New name for {props.name}
          </label>
          <input
            id={props.id}
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={newName}
            onChange={handleChange}
            ref={inputRef}
          />
          <div id="emailHelp" className="form-text">
            Input new name for a todo item
          </div>
        </div>
        <div className="edit-btns">
          <button type="submit" className="btn btn-dark save-btn">
            Save
          </button>
          <button
            type="button"
            className="btn btn-dark cancel-btn"
            onClick={() => setEditing(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
  useEffect(() => {
    if (!wasEditing && isEditing) {
      inputRef.current.focus();
    } else if (wasEditing && !isEditing) {
      buttonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return (
    <li className="list-group-item todo" key={props.id}>
      {isEditing ? editTamplate : viewTemplate}
    </li>
  );
};
