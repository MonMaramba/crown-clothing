// actual base reducer object that represents all of the state of the app
// code that combines all of the states of our app
import { combineReducers } from "redux";

import userReducer from "./user/user-reducer";

export default combineReducers({
  user: userReducer
});
