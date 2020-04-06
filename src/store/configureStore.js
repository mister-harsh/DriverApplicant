import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import createSagaMiddleware from "redux-saga";

import rootReducer from 'reducers';

const thunkMiddleware = thunk;

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState = {}) {
  const middlewares = [thunkMiddleware, sagaMiddleware, logger]; // loggerMiddleware
  const middlewareEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares)
  );

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
