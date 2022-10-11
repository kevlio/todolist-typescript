import React, { useRef, useContext } from "react";
import styles from "./InputField.module.css";

import { TodoContext } from "../context/TodoContext";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  const { dispatch } = useContext(TodoContext);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      dispatch({ type: "add", payload: todo });
      setTodo("");
    }
  };

  return (
    <form
      className={styles.input}
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className={styles.input__box}
      ></input>
      <button type="submit" className={styles.input__submit}>
        Go
      </button>
    </form>
  );
};

export default InputField;
