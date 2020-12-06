const TODO_INSERT = "TODO/INSERT";
const TODO_REMOVE = "TODO/REMOVE";
const TODO_UPDATE = "TODO/UPDATE";
const TODO_TOGGLE = "TODO/TOGGLE";

const todoInsert = (text) => {};
const todoRemove = (id) => {};
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
  switch (type) {
    case TODO_INSERT:
      return {};
    case TODO_REMOVE:
      return {};
    case TODO_UPDATE:
      return {};
    case TODO_TOGGLE:
      return {};
    default:
      return {};
  }
}
