"use client";

import { useRef } from "react";
import { useAddTodoMutation } from "../api/todoListApi";

const AddTodoForm = () => {
  const textRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const [createTodo, { isLoading, error }] = useAddTodoMutation();

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();

    const text = textRef.current?.value.trim() || "";
    const completed = statusRef.current?.value === "true";

    if (!text) return;

    const newTodo = { text, completed };
    console.log("Добавлен TODO:", newTodo);

    // очистка
    if (textRef.current) textRef.current.value = "";
    if (statusRef.current) statusRef.current.value = "false";

    try {
      const result = await createTodo({
        title: text,
        completed,
        userId: 1,
      }).unwrap();

      console.log("Создан пост:", result);
    } catch (e) {
      console.error("Ошибка при создании поста:", e);
    }
  };

  return (
    <form
      onSubmit={handleAdd}
      className="flex items-center justify-center gap-3"
    >
      <input
        className="p-2 outline-none rounded-lg border border-foreground"
        type="text"
        placeholder="Please Enter Todo"
        ref={textRef}
      />
      <select
        defaultValue="false"
        ref={statusRef}
        className="bg-background border-todoColor border p-3 rounded-lg"
      >
        <option value="true">Completed</option>
        <option value="false">Not Completed</option>
      </select>
      <button
        type="submit"
        className="px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded-md"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
