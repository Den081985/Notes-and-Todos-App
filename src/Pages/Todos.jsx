import React from "react";
import { FilterButton } from "../Components/FilterButton";
import { Todo } from "../Components/Todo";
import { TodoForm } from "../Components/TodoForm";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Code", completed: false },
  { id: "todo-2", name: "Sleep", completed: false },
  { id: "todo-3", name: "Repeat", completed: false },
];

export const Todos = () => {
  return (
    <div className="wrapper">
      <h2 className="todo-title">Todo List</h2>
      <h3 className="form-title">What needs to be done</h3>
      <TodoForm />
      <div className="todo-filter">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h3 className="todo-head">4 tasks remaining</h3>
      <Todo tasks={DATA} />
    </div>
  );
};
