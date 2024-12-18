import { Task } from "./types";

export const getAllToDos = async (): Promise<Task[]> => {
  // SSR or CSR
  const res = await fetch(`http://localhost:3001/tasks`, { cache: "no-store" });

  const todos = res.json();
  return todos;
};

export const createTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });

  const newTodo = await res.json();
  return newTodo;
};
export const editTodo = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: newText }),
  });

  const updatedTodo = await res.json();
  return updatedTodo;
};
