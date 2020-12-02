import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  users: [
    {
      id: 1,
      userId: "admin",
      userPw: "1111",
    },
  ],
  user: null,
};

const UserStateContext = React.createContext(null);
const UserDispatchContext = React.createContext(null);

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function userReducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        users: state.users.concat(action.user),
      };
    case "LOGIN":
      return {
        ...state,
        user: {
          userId: action.userId,
        },
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    case "UPDATE_USER_PW":
      return {
        ...state,
        users: state.users.map((u) =>
          u.userId === action.users.userId ? { ...u, userPw: action.users.userPw } : u
        ),
      };
    default:
      return state;
  }
}

export function UserState() {
  const state = useContext(UserStateContext);
  if (!state) throw new Error("Cannot find userStateProvider");
  return state;
}

export function UserDispatch() {
  const dispatch = useContext(UserDispatchContext);
  if (!dispatch) throw new Error("Cannot find userDispatchProvider");
  return dispatch;
}
