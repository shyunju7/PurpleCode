import React from "react";
import {Div, Button, Text} from "../Styled/CommonStyled";
import { Link } from "react-router-dom";
import { UserState } from "../Context/UserStore";

const MyPage = () => {
  const { users, user } = UserState();
  const findUser = users.find((u) => u.userId === user.userId);

  return (
    <Div>
      <h1>MY PAGE</h1>
      <Text name="userId">ID: {user.userId}</Text>
      <br/>
      <Text name="userPw">PASSWORD:{findUser.userPw} </Text>
      <br />
      <br />
      <Link to="/modifymyinfo">
        <Button> 비밀번호 변경하기 </Button>
      </Link>
    </Div>
  );
};

export default MyPage;
