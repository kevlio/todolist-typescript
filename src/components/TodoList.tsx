import React, { useContext } from "react";
import styles from "./TodoList.module.css";
import SingleTodo from "./SingleTodo";
import { TodoContext } from "../context/TodoContext";

const TodoList: React.FC = () => {
  const { state } = useContext(TodoContext);

  return (
    <div className={styles.todos}>
      {state.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
