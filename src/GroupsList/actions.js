import {CREATE_GROUP, FETCH_GROUP_LIST} from './types';
import { getGroupsList, postCreateGroup } from '../api/groups.service';

export function fetchGroupList() {
  return async function(dispatch) {
    const response = await getGroupsList();
    const groups = await response.json();

    dispatch({type: FETCH_GROUP_LIST, payload: groups});
  };
}

export function createGroup(data) {
  return async function(dispatch) {
    const response = await postCreateGroup(data);
    const group = await response.json();

    dispatch({type: CREATE_GROUP, payload: group});
  };
}
