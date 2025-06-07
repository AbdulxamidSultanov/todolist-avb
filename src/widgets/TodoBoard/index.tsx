import AddTodoForm from "@/features/todoList/ui/AddTodoForm";
import TodoList from "@/features/todoList/ui/TodoList";

const TodoBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10">
      <AddTodoForm />
      <TodoList />
    </div>
  );
};

export default TodoBoard;
