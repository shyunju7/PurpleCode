
const TODO_INSERT = "TODO/INSERT";
const TODO_REMOVE = "TODO/REMOVE";
const TODO_UPDATE = "TODO/UPDATE";
const TODO_TOGGLE = "TODO/TOGGLE";

export const todoInsert = (id, text) => {

  return {
    type: TODO_INSERT,
    payload: {
      id: id,
      text: text,
      isCompleted: false,
    },
  };
};
export const todoRemove = (id) => {
  return {
    type: TODO_REMOVE,
    payload: { id: id },
  };
};
const todoUpdate = (id, text) => {};
const todoToggle = (id) => {};

const initState = {
  todos: [
    {
      id: 1,
      text: "TODOLIST 만들기",
      isCompleted: false,
    },
  ],
};

export default function todoReducer(state = initState, { type, payload }) {
  let id = 1;
  switch (type) {
    case TODO_INSERT:
      return {
        ...state,
        todos: state.todos.concat({
          id: payload.id,
          text: payload.text,
          inCompleted: false,
        }),
      };
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    case TODO_UPDATE:
      return {};
    case TODO_TOGGLE:
      return {};
    default:
      return { ...state };
  }
}
