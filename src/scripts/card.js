const cardTemplate = document.querySelector('#card-template').content

export function addCard(name, link) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true)
  const cardImage = cardElement.querySelector('.cards__image')

  cardElement.querySelector('.cards__title').textContent = name
  cardImage.setAttribute('alt', name)
  cardImage.setAttribute('src', link)

  return cardElement
}