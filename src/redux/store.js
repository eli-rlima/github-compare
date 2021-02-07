// Global
import { createStore, applyMiddleware } from "redux";
// Middlewares
import { routerMiddleware } from "react-router-redux";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// Reducers
import reducers from "./reducers";

const history = require("history").createBrowserHistory();
const middlewares = [];
middlewares.push(thunk);
middlewares.push(routerMiddleware(history));

if (process.env.REACT_APP_ENVIRONMENT === 'develop') {
  middlewares.push(createLogger({ collapsed: true, duration: true, diff: true }));
}

const store = createStore(
  reducers, 
  applyMiddleware(...middlewares)
);

export { store, history };
