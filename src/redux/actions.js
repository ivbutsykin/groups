import {getGroupsList, getMessagesList} from '../api/groups.service';

export function fetchGroupsList() {
  return async function(dispatch) {
    let response = await getGroupsList();
    let groups = await response.json();
    dispatch({type: 'GET_GROUPS_LIST', payload: groups});
  };
}

export function fetchMessagesList(id) {
  return async function(dispatch) {
    let response = await getMessagesList(id);
    let messages = await response.json();
    dispatch({type: 'GET_MESSAGES_LIST', payload: messages});
  };
}

export function authorization() {
  return function(dispatch) {
    dispatch({type: 'CHANGE_AUTHORIZED_STATUS'})
  }
}
