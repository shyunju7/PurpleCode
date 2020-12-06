import React, { useRef, useState } from "react";
import { AddButton, Input, TodoInputBox } from "../Styled/styled-todoInput";
import { useDispatch } from "react-redux";
import { todoInsert } from "../Reducer/Todo";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");
  let nextId = useRef(2);
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const onRemove = () => {
    setTodoInput("");
  };

  const addTodo = () => {
    if (todoInput.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }

    dispatch(todoInsert(nextId.current, todoInput));
    nextId.current += 1;
    onRemove();
  };

  return (
    <TodoInputBox>
      <Input
        onChange={onChangeInput}
        value={todoInput}
        placeholder="할 일을 입력하세요!"
      />
      <AddButton onClick={addTodo}>추가</AddButton>
    </TodoInputBox>
  );
};

export default TodoInput;
