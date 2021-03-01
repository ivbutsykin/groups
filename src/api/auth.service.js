export const API_URL = process.env.REACT_APP_API_URL;

export const STORAGE = '@groups.user';

export async function login(email, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
  });

  const token = await response.text();
  sessionStorage.setItem(STORAGE, token);
  return token;
}

export function logout() {
  sessionStorage.removeItem(STORAGE);
  return Promise.resolve();
}
