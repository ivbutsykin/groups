export const API_URL = process.env.REACT_APP_API_URL;

export function getGroupsList() {
  return fetch(`${API_URL}/groups`);
}

export function getMessagesList(id, { limit = 10, skip = 0 }) {
  return fetch(
      `${API_URL}/groups/${id}/messages?limit=${limit}&skip=${skip}&sort=createdAt desc`);
}

export function postCreateGroup(body) {
  return fetch(`${API_URL}/groups`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export function postMessage(body) {
  return fetch(`${API_URL}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export function deleteGroup(id) {
  return fetch(`http://localhost:1337/groups/${id}`, {
    method: 'DELETE',
  });
}
