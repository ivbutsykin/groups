import {
  FETCH_GROUP,
  FETCH_MESSAGE_LIST,
  FETCH_MORE_MESSAGE_LIST,
  PUBLISH_MESSAGE,
} from './types';

export const initialState = {
  name: '',
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

    case FETCH_GROUP: {
      return {
        ...action.payload,
        ...state,
        name: action.payload.name,
      };
    }

    case FETCH_MORE_MESSAGE_LIST: {
      const messages = [].concat(state.messages, action.payload);

      return {
        ...state,
        messages,
      };
    }

    case PUBLISH_MESSAGE:
      const messages = [action.payload, ...state.messages];
      return {
        ...state,
        messages,
      };

    default:
      return state;
  }
}
