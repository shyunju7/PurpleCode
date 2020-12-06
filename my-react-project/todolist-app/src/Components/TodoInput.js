import React, { useCallback, useRef, useState } from "react";
import { AddButton, Input, TodoInputBox } from "../Styled/styled-todoInput";
import { useDispatch } from "react-redux";
import { todoInsert } from "../Reducer/Todo";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");
  let nextId = useRef(2);
  const dispatch = useDispatch();

  const onChangeInput = useCallback(
    (e) => {
      setTodoInput(e.target.value);
    },

    [todoInput]
  );

  const onRemove = () => {
    setTodoInput("");
  };

  const addTodo = () => {
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
