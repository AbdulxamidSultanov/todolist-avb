import Button from "@/shared/ui/Button";
import { useOnDelete, useOnToggle } from "../model/hooks";

const TodoItem = ({
  title,
  isCompleted,
  id,
}: {
  title: string;
  isCompleted: boolean;
  id: number;
}) => {
  const onDelete = useOnDelete();
  const onToggle = useOnToggle();
  return (
    <div className="flex items-center justify-between border border-border p-4">
      <label className="flex items-center justify-between">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onToggle(id, isCompleted)}
        />
        <p>{title}</p>
      </label>
      <button
        className={`px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded-md`}
        onClick={() => onDelete(id)}
      >Delete</button>
    </div>
  );
};

export default TodoItem;
