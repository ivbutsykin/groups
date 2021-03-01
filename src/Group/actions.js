import {
  fetchGroupById,
  getMessagesList,
  postMessage,
} from '../api/groups.service';

import {
  FETCH_GROUP,
  FETCH_MESSAGE_LIST,
  FETCH_MORE_MESSAGE_LIST,
  PUBLISH_MESSAGE,
} from './types';

export function fetchMessageList(id, options = {}) {
  return async function (dispatch) {
    const response = await getMessagesList(id, options);
    const messages = await response.json();

    dispatch({
      type: FETCH_MESSAGE_LIST,
      payload: messages
    });

    return messages.length > 9;
  };
}

export function fetchMoreMessages(id, options) {
  return async function (dispatch) {
    const response = await getMessagesList(id, options);
    const messages = await response.json();

    dispatch({
      type: FETCH_MORE_MESSAGE_LIST,
      payload: messages
    });

    return !!messages.length;
  };
}

export function publishMessage(body) {
  return async function (dispatch, getState) {
    const { auth } = getState();
    const response = await postMessage(body, auth.token);
    const message = await response.json();

    dispatch({
      type: PUBLISH_MESSAGE,
      payload: message
    });
  };
}

export function fetchGroup(id) {
  return async function (dispatch) {
    const response = await fetchGroupById(id);
    const group = await response.json();

    dispatch({
      type: FETCH_GROUP,
      payload: group
    });
  };
}
