import Image from "next/image";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Svg from "/public/Assests/okicon.svg";
import Todo from "./Todo";

const Todos = ({ allTodos, removeTodo }) => {
  const removeAll = () => {
    localStorage.remove;
  };
  return (
    <div className="  flex flex-col gap-4 px-2 rounded-lg">
      {allTodos.map((todo) => {
        return (
          <Todo
            todo={todo.todo}
            key={todo.id}
            id={todo.id}
            removeTodo={removeTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
