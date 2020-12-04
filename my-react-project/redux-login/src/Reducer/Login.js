// 액션 생성
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// 액션 생성 함수
export const login = (userId) => {
  return {
    type: LOGIN,
    payload: {
      userId: userId,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: {
      isLogin: false,
    },
  };
};

// 초기 설정
const initState = {
  loginUser: null,
  isLogin: false,
  users: [
    { userId: "admin", userPw: "1111" },
    { userId: "1", userPw: "1" },
  ]
};

// 리듀서
export default function loginRegister(state = initState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLogin: state.users.map((user) =>
          user.userId === payload.userId ? true : false
        ),
        loginUser: payload.userId,
      };
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        loginUser: null,
      };
    default:
      return {
        ...state,
      };
  }
}
