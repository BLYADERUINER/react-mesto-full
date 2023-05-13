const BASE_URL = 'https://api.mesto.blyaderuiner.nomoredomains.monster';

const checkResponse = (response) => response.ok ? response.json() : Promise.reject(`Ошибка: ${response.statusText}`);

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method:'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  })
  .then(checkResponse)
};

export const login = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({password, email})
  })
  .then(checkResponse)
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  .then(checkResponse)
};
