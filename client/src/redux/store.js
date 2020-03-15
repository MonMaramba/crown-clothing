import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// will allow the browser to cache the store depending on config
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { fetchCollectionsStart } from "./shop/shop.sagas";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger];
// technically, variable is not exporting from the next 2 lines
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart);

// persisted version of the store
export const persistor = persistStore(store);

export default { store, persistor };
