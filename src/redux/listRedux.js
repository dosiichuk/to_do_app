import shortid from 'shortid';

const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

//selector functions
export const getAllLists = ({ lists }) => lists;
export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

//action creators
export const addList = (payload) => ({ type: ADD_LIST, payload });

const listReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default listReducer;
