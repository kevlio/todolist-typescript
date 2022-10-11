import React, { useState, useRef, useEffect, useContext } from "react";
import { Todo } from "../model";
import styles from "./SingleTodo.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { TodoContext } from "../context/TodoContext";

type Props = {
  todo: Todo;
};

const SingleTodo: React.FC<Props> = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {}, [inputRef.current?.focus()]);

  return (
    <form
      className={styles.todos__single}
      onSubmit={(e) => {
        dispatch({ type: "edit", id: todo.id, editTodo: editTodo });
        handleEdit(e, todo.id);
      }}
    >
      {edit ? (
        <input
          className={styles.input__edit}
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className={styles.todos__single__text}>{todo.todo}</s>
      ) : (
        <span className={styles.todos__single__text}>{todo.todo}</span>
      )}
      <div>
        <span
          className={styles.icon}
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className={styles.icon}
          onClick={() => {
            dispatch({ type: "remove", payload: todo.id });
          }}
        >
          <AiFillDelete />
        </span>
        <span
          className={styles.icon}
          onClick={() => {
            dispatch({ type: "done", payload: todo.id });
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
