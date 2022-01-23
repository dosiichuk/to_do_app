import shortid from 'shortid';
import { strContains } from '../utils/strContains';

const createActionName = (actionName) => `app/cards${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const DELETE_CARD = createActionName('DELETE_CARD');
const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');

//selectors
export const getFilteredCards = ({ searchTerm, cards }, columnId) =>
  cards.filter(
    (card) => card.columnId === columnId && strContains(card.title, searchTerm)
  );

export const getFavoriteCards = ({ cards }) =>
  cards.filter((card) => card.isFavorite);

//action creators
export const addCard = (payload) => ({ type: ADD_CARD, payload });

export const addToFavorites = (payload) => ({
  type: ADD_TO_FAVORITES,
  payload,
});

export const deleteCard = (payload) => ({
  type: DELETE_CARD,
  payload,
});

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case DELETE_CARD:
      return statePart.filter((card) => card.id !== action.payload);
    case ADD_TO_FAVORITES:
      return statePart.map((card) =>
        card.id === action.payload
          ? { ...card, isFavorite: !card.isFavorite }
          : card
      );
    default:
      return statePart;
  }
};

export default cardsReducer;
