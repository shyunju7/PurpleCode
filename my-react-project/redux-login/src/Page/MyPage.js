import React from "react";
import { Div, Button, Text } from "../Styled/CommonStyled";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../Reducer/User";

const MyPage = ({ history }) => {
  const users = useSelector((state) => state.users);
  const userId = useSelector((state) => state.loginUser);
  const findUser = users.find((u) => u.userId === userId);

  const dispatch = useDispatch();

  const unsubscribe = () => {
    if (window.confirm("정말로 탈퇴하시겠습니까?")) {
      dispatch(deleteUser(userId));

      alert("회원탈퇴 완료!");
      history.push("/");
    }
  };

  return (
    <Div>
      <h1>MY PAGE</h1>
      <Text name="userId">ID: {userId}</Text>
      <br />
      <Text name="userPw">PASSWORD:{findUser.userPw} </Text>
      <br />
      <br />
      <Link to="/modifymyinfo">
        <Button> 비밀번호 변경하기 </Button>
        <Button onClick={unsubscribe}> 회원 탈퇴 </Button>
      </Link>
    </Div>
  );
};

export default MyPage;
