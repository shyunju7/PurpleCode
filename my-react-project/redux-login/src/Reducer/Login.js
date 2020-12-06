// 액션 생성
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// 액션 생성 함수
export const login = (userId) => {
  console.log("login! : ", userId);
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
};

// 리듀서
export default function loginReducer(state = initState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
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
