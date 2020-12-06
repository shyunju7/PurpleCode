import React from "react";
import { AddButton, Input, TodoInputBox } from "../Styled/styled-todoInput";

const TodoInput = () => {
  return (
    <TodoInputBox>
      <Input placeholder="할 일을 입력하세요!" />
      <AddButton>추가</AddButton>
    </TodoInputBox>
  );
};

export default TodoInput;
