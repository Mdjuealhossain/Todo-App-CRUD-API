import Image from "next/image";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Svg from "/public/Assests/okicon.svg";

const Todo = ({ todo, id, removeTodo }) => {
  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };

  return (
    <div className="   hover:bg-[#171717] px-16 py-4 flex justify-between items-center rounded border border-gray-600 ">
      <div className=" text-white">
        <h1 className=" text-4xl font-semibold pb-2 ">{todo.title}</h1>
        <p className=" text-gray-400">{todo.description}</p>
      </div>
      <div className=" flex justify-center items-center gap-4">
        <button onClick={() => handleRemoveTodo(id)}>
          <MdDeleteForever className=" size-8 text-[#f00]" />
        </button>
        <Image src={Svg} alt="ok" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Todo;
