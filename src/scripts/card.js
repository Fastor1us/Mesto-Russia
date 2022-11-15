import { myId, addCardPopupImageHandler, addWastebasketHandler, adjustLikeStation, changeLikeState } from "./utils.js"
const cardTemplate = document.querySelector('#card-template').content

export function addCard(data) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true)
  const cardImage = cardElement.querySelector('.cards__image')
  const cardWastebasket = cardElement.querySelector('.cards__wastebasket')

  cardElement.querySelector('.cards__title').textContent = data.name
  cardImage.setAttribute('alt', data.name)
  cardImage.setAttribute('src', data.link)

  cardImage.addEventListener('click', addCardPopupImageHandler)

  if (data.owner._id === myId) {
    cardWastebasket.classList.remove('cards__wastebasket_hidden')
    cardWastebasket.addEventListener('click', (evt) => addWastebasketHandler(evt, data, document.querySelector('#popup-delete')) )
  }

  adjustLikeStation(data, cardElement)

  cardElement.querySelector('.cards__button-like').addEventListener('click', (evt) => changeLikeState(evt, data, cardElement.querySelector('.cards__likes-counter')))

  return cardElement
}