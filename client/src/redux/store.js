import { createStore, applyMiddleware } from "redux";
//import logger from "redux-logger";
// will allow the browser to cache the store depending on config
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];
// technically, variable is not exporting from the next 2 lines
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted version of the store
export const persistor = persistStore(store);

export default { store, persistor };
