const initialState = {
  authorized: false,
  groups: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_GROUPS_LIST': {
      console.log(state)
      return {
        ...state,
        groups: action.payload,
      };
    }
    case 'CHANGE_AUTHORIZED_STATUS': {
      console.log(state)
      return {
        ...state,
        authorized: !state.authorized,
      };
    }
    default:
      return state;
  }
}
