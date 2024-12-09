"use client";

import { createTodo } from "@/api";
import React, { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Add new task to the database
    await createTodo({ id: uuidv4(), text: taskTitle });
    setTaskTitle(""); // Clear the input field after submission
  };
  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        type="text"
        placeholder="New task..."
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform transition-transform duration-200 hover:bg-blue-400 hover:scale-95">
        Add task
      </button>
    </form>
  );
};

export default AddTask;
