import React, { useEffect, useRef, useState } from "react";
import { FilterButton } from "../Components/FilterButton";
import { Todo, usePrevious } from "../Components/Todo";
import { TodoForm } from "../Components/TodoForm";
import { nanoid } from "nanoid";
import { TransitionGroup } from "react-transition-group";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Code", completed: false },
  { id: "todo-2", name: "Sleep", completed: false },
  { id: "todo-3", name: "Repeat", completed: false },
];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export const Todos = () => {
  const [tasks, setTasks] = useState(DATA);

  const [filter, setFilter] = useState("All");
  //функция, отмечающая флажок чекбокса
  const toogleCompleted = (id) => {
    const toogledTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(toogledTasks);
  };
  //функция удаления элемента
  const removeTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //функция редактирования элемента
  const editTodo = (id, newName) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, name: newName };
        }
        return task;
      })
    );
  };

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        remove={removeTodo}
        editTodo={editTodo}
        toogleCompleted={toogleCompleted}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      setFilter={setFilter}
      isPressed={name === filter}
    />
  ));
  //функция добавления элемента
  const addTodo = (name) => {
    const newTask = { id: "todo" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  };

  const taskNoun = taskList.length === 1 ? "task" : "tasks";
  const tasksHeading = `${taskList.length} ${taskNoun} remaining `;

  const previousTasksLength = usePrevious(taskList.length);

  const todoHeadRef = useRef(null);
  //хук для фокусировки на заголовок при удалении элемента
  useEffect(() => {
    if (taskList.length - previousTasksLength === -1) {
      todoHeadRef.current.focus();
    }
  }, [taskList.length, previousTasksLength]);

  return (
    <div className="wrapper">
      <h2 className="todo-title">Todo List</h2>
      <h3 className="form-title">What needs to be done</h3>
      <TodoForm addTodo={addTodo} />
      <div className="todo-filter">{filterList}</div>
      <h3 className="todo-head" tabIndex="-1" ref={todoHeadRef}>
        {tasksHeading}
      </h3>
      <ul className="list-group mb-5">{taskList}</ul>
    </div>
  );
};
