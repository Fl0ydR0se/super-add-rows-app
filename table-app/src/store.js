import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {tableReducer} from './table-reducer'





let reducers = combineReducers({
  form: formReducer,
  table: tableReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;


window.store = store