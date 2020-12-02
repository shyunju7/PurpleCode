import React from "react";
import "./App.css";
import AppRouter from "./Router/AppRouter";
import { UserProvider } from "./Context/UserStore";

function App() {
  return <AppRouter/>;
}

export default App;
