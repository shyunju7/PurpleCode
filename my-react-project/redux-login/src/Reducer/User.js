// 액션 생성
const REGISTER_USER = "REGISTER_USER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const MODIFY_USERPW = "MODIFY_USERPW";
const DELETE_USER = "DELETE_USER";

// 액션 생성 함수
export const registerUser = ({ userId, userPw }) => {
  return {
    type: REGISTER_USER,
    payload: { userId: userId, userPw: userPw },
  };
};

export const login = (userId) => {
  return {
    type: LOGIN,
    payload: {
      userId: userId,
    },
  };
};
export const logout = (userId) => {
  return {
    type: LOGOUT,
    payload: {
      isLogin: false,
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

// 초기 설정
const initState = {
  users: [{ userId: "admin", userPw: "1111", isLogin: false }],
};

// 리듀서
export function userReducer(state = initState, { type, payload }) {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        users: state.users.concat({
          userId: payload.userId,
          userPw: payload.userPw,
          isLogin: false,
        }),
      };
    case LOGIN:
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === payload.userId ? { ...user, isLogin: true } : user
        ),
      };
    case LOGOUT:
      return {
        ...state,
        users: state.users.map((user) =>
          user.userId === payload.userId ? { ...user, isLogin: false } : user
        ),
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
      };

    default:
      return {
        ...state,
      };
  }
}
