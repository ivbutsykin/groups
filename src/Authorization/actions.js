import jwt from 'jsonwebtoken';

import { login, logout, register } from '../api/auth.service';

import { SIGN_IN, SIGN_OUT, SIGN_UP } from './types';

export function signIn(email, password) {
  return async function (dispatch) {
    const token = await login(email, password);

    const user = jwt.decode(token);

    dispatch({
      type: SIGN_IN,
      payload: {
        token,
        user
      }
    });
  };
}

export function signUp(email, name, password) {
  return async function (dispatch) {
    await register(email, name, password);
    dispatch({
      type: SIGN_UP,
    });
  };
}

export function signOut() {
  return async function (dispatch) {
    void await logout();

    dispatch({ type: SIGN_OUT });
  };
}
