import { FETCH_MESSAGE_LIST, PUBLISH_MESSAGE } from './types';

export const initialState = {
  messages: [],
};

export function groupReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MESSAGE_LIST: {
      return {
        ...state,
        messages: action.payload,
      };
    }

    case PUBLISH_MESSAGE:
      const messages = [...state.messages, action.payload];
      return {
        ...state,
        messages,
      }

    default:
      return state;
  }
}
