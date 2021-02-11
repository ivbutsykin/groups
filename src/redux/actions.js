import {getGroupsList} from '../api/groups.service';

export function getData() {
  return async function(dispatch) {
    let response = await getGroupsList();
    let groups = await response.json();
    dispatch({type: 'GET_GROUPS_LIST', payload: groups});
  };
}
