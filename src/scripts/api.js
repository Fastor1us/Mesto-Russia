const config = {
  baseUrl: 'https://nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6',
    'Content-Type': 'application/json'
  }
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`)
    })
    .catch((err) => {
      console.log(err); // выводим ошибку в консоль
    })
}

export function getInitialCards () {
  fetch('https://nomoreparties.co/v1/wbf-cohort-2/cards', {
    headers: {
      authorization: '8fae5b61-4ae1-43e7-8c83-1bb3189fdcf5'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result)
      result.forEach( card => {
        cardsContainer.append(addCard(card))
      })
    })
    .catch( err => {
      console.log(err)
    })
}