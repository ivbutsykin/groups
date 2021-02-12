export function getGroupsList() {
  return fetch('http://localhost:1337/groups');
}

export function getMessagesList(id) {
  return fetch(`http://localhost:1337/groups/${id}/messages`);
}

export function postCreateGroup(body) {
  return fetch('http://localhost:1337/groups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export function postMessage(body) {
  return fetch(`http://localhost:1337/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

export function deleteGroup(id) {
  fetch(`https://localhost:1337/groups/${id}`, {
    method: 'DELETE',
  })
}
