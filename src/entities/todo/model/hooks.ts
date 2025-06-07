import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "@/features/todoList/api/todoListApi";
import { TodoListType } from "@/features/todoList/api/types";
import { useState } from "react";

export const useOnToggle = () => {
  const [toggleTodo] = useToggleTodoMutation();

  const onToggle = async (id: number, currentCompleted: boolean) => {
    try {
      await toggleTodo({ id, completed: !currentCompleted }).unwrap();
    } catch (e) {
      console.error("Ошибка при обновлении задачи", e);
    }
  };

  return onToggle;
};

export const useOnDelete = () => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [todos, setTodos] = useState<TodoListType[]>([]);

  const onDelete = async (id: number) => {
    try {
      await deleteTodo(id).unwrap();
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  return onDelete;
};
