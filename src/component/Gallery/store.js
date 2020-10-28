import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunkMiddlewale from 'redux-thunk'
import { createLogger } from 'redux-logger'
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddlewale, createLogger())
);
const store = createStore(rootReducer, enhancer);
store.subscribe(() => console.log(store.getState()))
export default store