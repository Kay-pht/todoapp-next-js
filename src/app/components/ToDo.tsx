"use client";

import { editTodo } from "@/api";
import { Task } from "@/types";
import React, { useState } from "react";

interface ToDoProps {
  todo: Task;
}

const ToDo = ({ todo }: ToDoProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTextTitle, setEditedTextTitle] = useState(todo.text);

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await editTodo(todo.id, editedTextTitle);
    setIsEditing(false);
    // const updatedTask: Task = {
    //   id: todo.id,
    //   text: prompt("Save task text") || todo.text,
    // };
    // await editTodo(updatedTask);
    // // Update the task list in the parent component
  };
  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {isEditing ? (
        <input
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={editedTextTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEditedTextTitle(e.target.value);
          }}
        />
      ) : (
        <span className="text-gray-700">{todo.text}</span>
      )}

      {isEditing ? (
        <button
          className="text-blue-500 hover:text-blue-700 mr-3"
          onClick={handleSave}
        >
          save
        </button>
      ) : (
        <button
          className="text-green-500 hover:text-green-700 mr-3"
          onClick={handleEdit}
        >
          edit
        </button>
      )}

      <button className="text-red-500 hover:text-red-700">delete</button>
    </li>
  );
};

export default ToDo;
