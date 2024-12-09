import { Task } from "@/types";
import React from "react";
import ToDo from "./ToDo";

interface ToDoListProps {
  todos: Task[];
}

const ToDoList = ({ todos }: ToDoListProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
