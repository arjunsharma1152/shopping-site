import { createStore, applyMiddleware } from "redux";

import { logger } from "redux-logger";

import rootReducer from "./root-reducer";

const middeleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middeleWares));

export default store;
