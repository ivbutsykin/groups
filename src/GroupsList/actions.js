import { FETCH_GROUP_LIST, CREATE_GROUP, DELETE_GROUP } from './types';

import {
  getGroupsList,
  postCreateGroup,
  deleteGroup
} from '../api/groups.service';

export function fetchGroupList() {
  return async function (dispatch) {
    const response = await getGroupsList();
    const groups = await response.json();

    dispatch({ type: FETCH_GROUP_LIST, payload: groups });
  };
}

export function createGroup(data) {
  return async function (dispatch, getState) {
    const { auth } = getState();

    const response = await postCreateGroup(data, auth.token);
    const group = await response.json();

    dispatch({ type: CREATE_GROUP, payload: group });
  };
}

export function fetchDeleteGroup(id) {
  return async function (dispatch, getState) {
    const { auth } = getState();
    const response = await deleteGroup(id, auth.token);

    if (response.ok) {
      dispatch({ type: DELETE_GROUP, payload: id });
    }
  };
}