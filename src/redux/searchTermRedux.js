const createActionName = (actionName) => `app/searchTerm/${actionName}`;
const SET_SEARCH_TERM = createActionName('SET_SEARCH_TERM');

//action creators
export const updateSearchTerm = (payload) => ({
  type: SET_SEARCH_TERM,
  payload,
});

const searchTermReducer = (statePart = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload.searchTerm;
    default:
      return statePart;
  }
};

export default searchTermReducer;
