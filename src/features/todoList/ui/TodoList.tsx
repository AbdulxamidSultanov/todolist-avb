import TodoItem from "@/entities/todo/ui/TodoItem";
import { useGetTodosQuery } from "../api/todoListApi";

const TodoList = () => {
  const { data, isLoading, error } = useGetTodosQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className="container grid grid-cols-4 items-center justify-center gap-4">
      {data &&
        data.map((t, index) => {
          return (
            <TodoItem
              key={index}
              isCompleted={t.completed}
              title={t.title}
              id={t.id}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
