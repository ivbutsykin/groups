const initialState = {
  groups: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_GROUPS_LIST': {
      return {
        groups: action.payload,
      };
    }
    default:
      return state;
  }
}
