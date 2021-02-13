import { CREATE_GROUP, FETCH_GROUP_LIST } from './types';

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

    default:
      return state;
  }
}
