import { useState, useReducer, useContext } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <span className="heading">{"First Typescript project =)"}</span>
      <InputField todo={todo} setTodo={setTodo} />
      <TodoList />
    </div>
  );
};

export default App;
