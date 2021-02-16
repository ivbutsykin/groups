import { FETCH_GROUP_LIST, CREATE_GROUP, DELETE_GROUP } from './types';

export const initialState = {
  groups: [],
};

export function groupListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GROUP_LIST: {
      return {
        ...state,
        groups: action.payload,
      };
    }
    case CREATE_GROUP: {
      const groups = [...state.groups, action.payload];

      return {
        ...state,
        groups,
      };
    }
    case DELETE_GROUP: {
      const groups = state.groups.filter(group => group.id !== action.payload);

      return {
        ...state,
        groups,
      };
    }

    default:
      return state;
  }
}
