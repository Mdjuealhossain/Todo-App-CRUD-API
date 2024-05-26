"use client";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Todos from "./components/Todos";
import Form from "./components/Form";

const getLocalStories = () => {
  let todos =
    typeof window !== "undefined" ? localStorage.getItem("todos") : null;
  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

export default function Home() {
  const [todos, setTodos] = useState(getLocalStories);
  const handleNewTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      const filterdedTodo = prevTodos.filter((todo) => todo.id !== id);
      return filterdedTodo;
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className=" bg-[#444]  py-8 w-1/2 mx-auto">
      <h1 className=" text-4xl text-white mb-8 text-center">My Todos</h1>
      <Form handleNewTodo={handleNewTodo} />
      <Todos allTodos={todos} removeTodo={removeTodo} />
    </div>
  );
}
