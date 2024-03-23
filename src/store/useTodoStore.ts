import create from "zustand";
import { ITodo } from "../types/todo";

export interface TodoState {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  //   modifyTodo: (id: string, task: string) => void;
  //   removeTodo: (id: string) => void;
}

export const useTodoStore = create<TodoState>()((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  //   modifyTodo: (id, task) =>
  //     set((state) => ({
  //       todos: state.todos.map((todo) =>
  //         todo.id === id ? { ...todo, task } : todo
  //       ),
  //     })),
  //   removeTodo: (id) =>
  //     set((state) => ({
  //       todos: state.todos.filter((todo) => todo.id !== id),
  //     })),
}));
