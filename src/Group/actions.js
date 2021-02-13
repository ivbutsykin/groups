import { getMessagesList, postMessage } from '../api/groups.service';

import { FETCH_MESSAGE_LIST, PUBLISH_MESSAGE } from './types';

export function fetchMessageList(id) {
  return async function(dispatch) {
    const response = await getMessagesList(id);
    const messages = await response.json();

    dispatch({ type: FETCH_MESSAGE_LIST, payload: messages });
  };
}

export function publishMessage(body) {
  return async function(dispatch) {
    const response = await postMessage(body);
    const message = await response.json();

    dispatch({ type: PUBLISH_MESSAGE, payload: message });
  };
}
