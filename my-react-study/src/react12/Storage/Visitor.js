import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveVisitor } from "./reducer/visitor";

const Visitor = () => {
  const numOfVisitor = useSelector((state) => state.visitorReducer.numOfVisitor);;
  const dispatch = useDispatch();

  const refreshPage = () => {
    window.location.reload();
    dispatch(saveVisitor());
  };

  return (
    <div>
      <h1>환영합니다!</h1>
      <button onClick={refreshPage}>새로고침</button>
      <label>총 방문자 수 : {numOfVisitor}</label>
    </div>
  );
};

export default Visitor;

