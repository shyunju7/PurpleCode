import React, { useCallback, useState } from "react";
import { Div, Button, Text } from "../Styled/CommonStyled";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const ModifyMyInfo = ({ history }) => {
  const users = useSelector((state) => state.users);
  const userId = useSelector((state) => state.loginUser);

  const dispatch = useDispatch();

  const findUser = users.find((u) => u.userId === userId);
  const [userPw, setUserPw] = useState(findUser.userPw);

  const onChange = useCallback(
    (e) => {
      setUserPw(e.target.value);
      console.log(userId, ",", userPw);
    },
    [userPw]
  );
  const modifyUserInfo = () => {
    dispatch({
      type: "MODIFY_USERPW",
      users: {
        userId: userId,
        userPw: userPw,
      },
    });

    alert("정상적으로 수정되었습니다.");
    history.replace("/mypage");
  };

  return (
    <Div>
      <h1>MY PAGE</h1>
      <Text name="userId">ID: {userId}</Text>
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
