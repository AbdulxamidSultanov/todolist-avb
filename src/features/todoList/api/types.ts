export interface TodoListType {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export interface TodoListResponse {
  todos: TodoListType[];
  total: number;
  skip: number;
  limit: number;
}
