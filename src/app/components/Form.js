import { useState } from "react";

const Form = ({ handleNewTodo }) => {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const { title, description } = todo;

  const handleSubmite = (event) => {
    event.preventDefault();
    setTodo({ title: "", description: "" });
    handleNewTodo(todo);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((prevTodo) => {
      return { ...prevTodo, [name]: event.target.value };
    });
  };

  return (
    <form onSubmit={handleSubmite}>
      <div className="px-16 pb-8 flex flex-col gap-4">
        <div className=" flex  gap-4 items-center">
          <label
            htmlFor="title"
            className=" text-white text-2xl font-medium max-w-36 w-full"
          >
            Title :
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            value={title}
            className=" px-2 py-4 w-2/3 rounded bg-neutral-200"
          />
        </div>
        <div className=" flex items-center gap-4">
          <label
            htmlFor="title"
            className=" text-white text-2xl font-medium max-w-36 w-full"
          >
            Description :
          </label>
          <input
            onChange={handleChange}
            type="text"
            value={description}
            id="description"
            name="description"
            className=" px-2 py-4 w-2/3 rounded bg-neutral-200"
          />
        </div>
        <div className=" flex justify-center gap-2">
          <button
            type="submite"
            className=" bg-green-800 px-8 py-2 cursor-pointer rounded "
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
