import { baseApi } from "@/shared/api/baseApi";
import { TodoListType } from "./types";

export const todoList = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoListType[], void>({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),

    toggleTodo: builder.mutation<void, { id: number; completed: boolean }>({
      query: ({ id, completed }) => ({
        url: `/todos/${id}`,
        method: "PATCH",
        body: { completed },
      }),

      async onQueryStarted({ id, completed }, { dispatch, queryFulfilled }) {
        try {
          dispatch(
            todoList.util.updateQueryData("getTodos", undefined, (draft) => {
              const todo = draft.find((t) => t.id === id);
              if (todo) {
                todo.completed = completed;
              }
            })
          );

          await queryFulfilled;
        } catch (e) {
          console.error("Ошибка при optimistic update:", e);
        }
      },
    }),
    deleteTodo: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        invalidatesTags: ["Todos"],
      }),
    }),
    addTodo: builder.mutation({
      query: (newPost) => ({
        url: "todos/",
        method: "POST",
        body: newPost,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetTodosQuery,
  useToggleTodoMutation,
  useDeleteTodoMutation,
  useAddTodoMutation,
} = todoList;
