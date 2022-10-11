import { createContext, useReducer, useContext } from "react";
import { todoReducer, Actions } from "../reducer/todoReducer";
import { Todo } from "../model";

interface AppContextInterface {
  state: Todo[];
  dispatch: React.Dispatch<Actions>;
}

interface Props {
  children: React.ReactNode;
}

export const TodoContext = createContext<AppContextInterface>(undefined!);

export const TodoProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, []);

  const providerValue: AppContextInterface = {
    state,
    dispatch,
  };

  return (
    <TodoContext.Provider value={providerValue}>
      {children}
    </TodoContext.Provider>
  );
};
