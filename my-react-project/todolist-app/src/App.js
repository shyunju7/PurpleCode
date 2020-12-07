import React from "react";
import "./App.css";
import TodoTemplate from "./Components/TodoTemplate";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <TodoTemplate>
      <TodoInput />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
