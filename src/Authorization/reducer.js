import jwt from 'jsonwebtoken';

import { STORAGE } from '../api/auth.service';
import { SIGN_IN, SIGN_OUT } from './types';

let token;
let user;

try {
  token = sessionStorage.getItem(STORAGE);
  user = jwt.decode(token);
} catch (error) {
  token = null;
  user = null;
}

export const initialState = {
  user,
  token,
  isLoggedIn: !!token,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };

    case SIGN_OUT:
      return {
        ...state,
        user: null,
        token: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
}
