import { addLike, removeLike } from "./api.js"
import { openPopup } from "./modal.js"
import { addCardPopupImageHandler } from "./utils.js"

const cardTemplate = document.querySelector('#card-template').content
const myId = '64f46ca616b76212f1a053a1'

export function addCard(data) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true)
  const cardImage = cardElement.querySelector('.cards__image')
  const cardWastebasket = cardElement.querySelector('.cards__wastebasket')

  cardElement.querySelector('.cards__title').textContent = data.name
  cardImage.setAttribute('alt', data.name)
  cardImage.setAttribute('src', data.link)
  cardImage.addEventListener('click', addCardPopupImageHandler)

  // добавляем кнопку и обработчик "корзины" если Юзер создатель карточки
  if (data.owner._id === myId) {
    cardWastebasket.classList.remove('cards__wastebasket_hidden')
    cardWastebasket.addEventListener('click', (evt) => addWastebasketHandler(evt, data) )
  }

  // выставляю кол-во лайков на карточку
  cardElement.querySelector('.cards__likes-counter').textContent = data.likes.length

  // делаем лайк активным, если у ИД лайка и Юзера совпадают
  if (data.likes.length > 0) {
    data.likes.forEach( like => {
      if (like._id === myId) {
        cardElement.querySelector('.cards__button-like').classList.add('cards__button-like_active')
      }
    })
  }

  // вешаю обработчик на сердечко
  cardElement.querySelector('.cards__button-like').addEventListener('click', (evt) => addLikeHandler(evt, data, cardElement.querySelector('.cards__likes-counter')))

  return cardElement
}

function addLikeHandler (evt, data, likesContainer) {
  if (evt.target.classList.contains('cards__button-like_active')) {
    removeLike(data._id)
    .then( () => {
      evt.target.classList.remove('cards__button-like_active')
      likesContainer.textContent--
      evt.target.blur()
    })

  } else {
    addLike(data._id)
    .then( () => {
      evt.target.classList.add('cards__button-like_active')
      likesContainer.textContent++
      evt.target.blur()
    })
  }
}

const popupDelete = document.querySelector('#popup-delete')
export let cardID
export let nodeToDelete

function addWastebasketHandler (evt, data) {
  const ifWastebasketBtn = evt.target.classList.contains('cards__wastebasket')
  if (ifWastebasketBtn) {
    openPopup(popupDelete)
    cardID = data._id
    nodeToDelete = evt.target.closest('.cards__item')
  }
}