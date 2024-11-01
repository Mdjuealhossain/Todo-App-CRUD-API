import React, { useState } from "react";

import { usepostdata } from "../hooks/usepostdata";

const InputForm = () => {
  const [form, setForm] = useState({ title: "", description: "" });

  const handleSubmite = async (e) => {
    e.preventDefault();
    try {
      setForm({ title: "", description: "" });
      const response = await usepostdata(form);
      window.alert(
        `your title: ${response.title} description ${response.description}`
      );
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  const handleChange = (event) => {
    const name = event.target.name;
    setForm((prevForm) => {
      return { ...prevForm, [name]: event.target.value };
    });
  };

  return (
    <>
      <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
        <form onSubmit={handleSubmite}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={handleChange}
              value={form.description}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the description"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default InputForm;
