"use client";

import { useState, useEffect } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const TodoComponent = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setTodo(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (todo) {
    return (
      <div>
        <h1>Todo</h1>
        <p>
          <strong>ID:</strong> {todo.id}
        </p>
        <p>
          <strong>Title:</strong> {todo.title}
        </p>
        <p>
          <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
        </p>
      </div>
    );
  }

  return null;
};

export default TodoComponent;