import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selector funcions (always used to select data, which are later passed to components)
export const getAllLists = ({ lists }) => lists;
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);
export const getFilteredCards = ({ searchTerm, cards }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchTerm)
  );
export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);
export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite);
//action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });
export const addCard = (payload) => ({ type: 'ADD_CARD', payload });
export const addList = (payload) => ({ type: 'ADD_LIST', payload });
export const updateSearchTerm = (payload) => ({
  type: 'SET_SEARCH_TERM',
  payload,
});
export const addToFavorites = (payload) => ({
  type: 'ADD_TO_FAVORITES',
  payload,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), ...action.payload }],
      };
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, { id: shortid(), ...action.payload }],
      };
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, { id: shortid(), ...action.payload }],
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : card
        ),
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
