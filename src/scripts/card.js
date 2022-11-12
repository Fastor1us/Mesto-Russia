const cardTemplate = document.querySelector('#card-template').content

export function addCard(card) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true)
  const cardImage = cardElement.querySelector('.cards__image')

  cardElement.querySelector('.cards__title').textContent = card.name
  cardImage.setAttribute('alt', card.name)
  cardImage.setAttribute('src', card.link)

  return cardElement
}