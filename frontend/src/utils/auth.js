const BASE_URL = 'https://api.mesto.blyaderuiner.nomoredomains.monster';

const checkResponse = (response) => response.ok ? response.json() : Promise.reject(`Ошибка: ${response.statusText}`);

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method:'POST',
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({password, email}),
  })
  .then(checkResponse)
};

export const login = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({password, email}),
  })
  .then(checkResponse)
};

export const logout = () => {
  return fetch(`${BASE_URL}/logout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  .then(checkResponse)
};

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
  .then(checkResponse)
};
