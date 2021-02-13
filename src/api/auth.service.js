export const STORAGE = '@groups.user'

export function login() {
  sessionStorage.setItem(STORAGE, JSON.stringify({
    name: 'Foo Bar',
    email: 'foo@bar.com',
    id: '6026e0c5bb52cd177be2b0c0',
  }))
  return Promise.resolve();
}

export function logout() {
  sessionStorage.removeItem(STORAGE);
  return Promise.resolve();
}
