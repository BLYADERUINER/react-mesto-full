class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  };


// метод проверки ответа сервера
  _checkResponse(response){
    return response.ok ? response.json() : Promise.reject();
  };


// запрос на получения данных юзера
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse)
  };


// запрос на получения данных по карточкам
  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse)
  };


// запрос на редактирование профиля
  patchProfileEdit(nameElement, aboutElement) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: nameElement,
        about: aboutElement
      })
    })
    .then(this._checkResponse)
  };


// запрос на создание новой карточки
  postNewCard(card) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
    .then(this._checkResponse)
  };


// запрос на смену аватарки
  patchAvatar(avatarLink) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
    .then(this._checkResponse)
  };


// запрос на удаление карточки
  deleteUserCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  };


// запрос чтобы поставить лайк
  putLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._checkResponse)
  };


// запрос на удаление лайка
  deleteLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: this._headers
  })
  .then(this._checkResponse)
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: this._headers
    })
    .then(this._checkResponse)
  }


  getAllNeededData() {
    return Promise.all([this.getUserInfo(), this.getCards()]);
  };
};


export const api = new Api({
  baseUrl: 'https://api.mesto.blyaderuiner.nomoredomains.monster/',
  headers: {
    'Content-Type': 'application/json',
  },
});
