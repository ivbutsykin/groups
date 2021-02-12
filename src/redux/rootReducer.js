const initialState = {
  authorized: false,
  groups: [],
  messages: [],
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_GROUPS_LIST': {
      return {
        ...state,
        groups: action.payload,
      };
    }
    case 'GET_MESSAGES_LIST': {
      return {
        ...state,
        messages: action.payload,
      }
    }
    case 'CHANGE_AUTHORIZED_STATUS': {
      return {
        ...state,
        authorized: !state.authorized,
      };
    }
    default:
      return state;
  }
}
