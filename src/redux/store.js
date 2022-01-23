import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listReducer from './listRedux';
import columnsReducer from './columnRedux';
import cardsReducer from './cardRedux';
import searchTermReducer from './searchTermRedux';

const subreducers = {
  lists: listReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchTerm: searchTermReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
