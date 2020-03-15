// a reducer is a function that gets 2 properties. State object that represents a last state or initial, the receives an action which is an object.
import UserActionTypes from "./user-type";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};
const userReducer = (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };

    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
