import React from "react";
import { Link } from "react-router-dom";
import {Div, Button, Text} from "../Styled/CommonStyled";
import {useSelector, useDispatch} from "react-redux";
import {logout} from "../Reducer/User";

const Main = () => {
  const user = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout(user.userId));
  };


  return (
    <Div>
        <h1>MAIN</h1>
        <Text> {user.userId}님, 환영합니다.</Text>
        <br />
        <br />
        <Button onClick={onClickLogout}> 로그아웃 </Button>
        <Link to="/myPage">
        <Button> 마이페이지 </Button>
      </Link>
    </Div>
  );
};

export default Main;
