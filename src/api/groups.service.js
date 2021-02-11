export function getGroupsList() {
  return fetch('http://localhost:1337/groups');
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
