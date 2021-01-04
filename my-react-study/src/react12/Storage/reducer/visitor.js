const SAVE_VISITOR = "SAVE_VISITOR";

export const saveVisitor = () => {
  return { type: SAVE_VISITOR };
};

const initState = {
  numOfVisitor: 0,
};

export default function visitorReducer(state = initState, action) {
  switch (action.type) {
    case SAVE_VISITOR:
      return {
        ...state,
        numOfVisitor: state.numOfVisitor + 1,
      };
    default:
      return { ...state };
  }
}
