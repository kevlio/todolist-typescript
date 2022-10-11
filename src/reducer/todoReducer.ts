import { Todo } from "../model";

export type Actions =
  | { type: "add"; payload: string }
  | { type: "edit"; id: number; editTodo: string }
  | { type: "done"; payload: number }
  | { type: "remove"; payload: number };

export const todoReducer = (state: Todo[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "done":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "edit":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, todo: action.editTodo } : todo
      );
    case "remove":
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });

    default:
      throw new Error();
  }
};
