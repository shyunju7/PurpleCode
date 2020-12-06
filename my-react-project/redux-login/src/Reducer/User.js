const REGISTER_USER = "REGISTER_USER";
const MODIFY_USERPW = "MODIFY_USERPW";
const DELETE_USER = "DELETE_USER";

export const registerUser = ({ userId, userPw }) => {
  return {
    type: REGISTER_USER,
    payload: { userId: userId, userPw: userPw },
  };
};

export const modifyPw = (userId, userPw) => {
  return {
    type: MODIFY_USERPW,
    payload: {
      userId: userId,
      userPw: userPw,
    },
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: {
      userId: userId,
    },
  };
};

const initState = {
  users: [{ userId: "admin", userPw: "1111" }],
};

export default function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        users: state.users.concat({
          userId: payload.userId,
          userPw: payload.userPw,
        }),
        isLogin: false,
      };
    case MODIFY_USERPW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === payload.userId
            ? { ...user, userPw: payload.userPw }
            : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.userId !== payload.userId),
        isLogin: false,
        loginUser: null,
      };

    default:
      return {
        ...state,
      };
  }
}
