import React, { useCallback, useState } from "react";
import {Div, Button, Text} from "../Styled/CommonStyled";
import { Link } from "react-router-dom";
import { UserDispatch, UserState } from "../Context/UserStore";

const ModifyMyInfo = ({ history }) => {
  const { users, user } = UserState();
  const dispatch = UserDispatch();

  const findUser = users.find((u) => u.userId === user.userId);
  const [userPw, setUserPw] = useState(findUser.userPw);

  const onChange = useCallback(
    (e) => {
      setUserPw(e.target.value);
    },
    [userPw]
  );
  const modifyUserInfo = () => {
    console.log(user.userId);
    console.log(userPw);
    dispatch({
      type: "UPDATE_USER_PW",
      users: {
        userId: user.userId,
        userPw: userPw,
      },
    });

    alert("정상적으로 수정되었습니다.");
    history.replace("/mypage");
  };

  return (
    <Div>
      <h1>MY PAGE</h1>
      <Text name="userId">ID: {user.userId}</Text>
      <br />
      <Text>PASSWORD: </Text>
      <input name="userPw" value={userPw} onChange={onChange}></input>
      <br />
      <br />
      <Button onClick={modifyUserInfo}> 수정 완료 </Button>
      <Link to="/mypage">
        <Button> 취소 </Button>
      </Link>
    </Div>
  );
};

export default ModifyMyInfo;
