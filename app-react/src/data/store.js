import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({});

const enhancer = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(
  applyMiddleware(thunkMiddleware)
);

const configureStore = (preLoadedState = {}) => createStore(rootReducer, enhancer);

export default configureStore;