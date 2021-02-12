import {getGroupsList} from '../api/groups.service';

export function fetchGroupsList() {
  return async function(dispatch) {
    let response = await getGroupsList();
    let groups = await response.json();
    dispatch({type: 'GET_GROUPS_LIST', payload: groups});
  };
}

export function authorization() {
  return function(dispatch) {
    dispatch({type: 'CHANGE_AUTHORIZED_STATUS'})
  }
}
