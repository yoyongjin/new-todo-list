import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ITodo } from "../types/todo";

export interface TodoState {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
}

export const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (item: ITodo) =>
          set((state) => ({ todos: [...state.todos, item] })),
      }),
      { name: "todoStore" }
    )
  )
);
