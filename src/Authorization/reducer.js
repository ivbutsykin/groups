import { STORAGE } from '../api/auth.service';
import { SIGN_IN, SIGN_OUT } from './types';

let loggedInUser;

try {
  const data = sessionStorage.getItem(STORAGE);
  loggedInUser = JSON.parse(data);
} catch (error) {
  loggedInUser = null;
}

export const initialState = {
  user: loggedInUser,
  isLoggedIn: !!loggedInUser,
};

export function authReducer(state = initialState, action) {

  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };

    case SIGN_OUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}
