// a reducer is a function that gets 2 properties. State object that represents a last state or initial, the receives an action which is an object.
const INITIAL_STATE = {
  currentUser: null
};
const userReducer = (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };
      break;

    default:
      return state;
      break;
  }
};

export default userReducer;
