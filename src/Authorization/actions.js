import jwt from 'jsonwebtoken';

import { login, logout } from '../api/auth.service';

import { SIGN_IN, SIGN_OUT } from './types';

export function signIn(email, password) {
  return async function (dispatch) {
    const token = await login(email, password);

    const user = jwt.decode(token);

    dispatch({ type: SIGN_IN,
      payload: {
        token,
        user
      }
    });
  };
}

export function signOut() {
  return async function (dispatch) {
    void await logout();

    dispatch({ type: SIGN_OUT });
  };
}
