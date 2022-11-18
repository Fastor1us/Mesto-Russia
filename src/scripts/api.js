const config = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-2',
  headers: {
    authorization: 'b0948f28-f65b-421f-840c-fb58737d2d86',
    'Content-Type': 'application/json'
  }
}

function getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`)
  }
  return res.json()
}

const getProfileData = fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then( res => getResponseData(res) )

const getInitialCards = fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then( res => getResponseData(res) )

function patchProfileData (nameOutput, aboutOutput) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameOutput,
      about: aboutOutput
    })
  })
    .then( res => getResponseData(res) )
}

function postNewCard (cardName, cardLink) {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  })
    .then( res => getResponseData(res) )
}

function removeLike (cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then( res => getResponseData(res) )
}

function addLike (cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then( res => getResponseData(res) )
}

function deleteCard (cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then( res => getResponseData(res) )
}

function patchAvatar (link) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
    .then( res => getResponseData(res) )
}

export { getInitialCards, getProfileData, patchProfileData, postNewCard, removeLike, addLike, deleteCard, patchAvatar}