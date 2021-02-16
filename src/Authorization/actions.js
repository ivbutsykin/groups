import { login, logout } from '../api/auth.service';

import { SIGN_IN, SIGN_OUT } from './types';

export function signIn() {
  return async function (dispatch) {
    const response = await login();

    dispatch({ type: SIGN_IN, payload: response });
  };
}

export function signOut() {
  return async function (dispatch) {
    void await logout();

    dispatch({ type: SIGN_OUT });
  };
}
