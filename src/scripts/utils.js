const popupImage = document.querySelector('.popup__image')
const popupImageContainer = document.querySelector('#popup-image')
const popupFigcaption = document.querySelector('.popup__figcaption')
import { userID } from '../index.js'
import { openPopup } from './modal.js'
import { addLike, removeLike } from './api.js'

function addCardPopupImageHandler (evt) {
  if (evt.target.classList.contains('cards__image')) {
    openPopup(popupImageContainer)
    popupImage.setAttribute('src', evt.target.getAttribute('src'))
    popupImage.setAttribute('alt', evt.target.closest('.cards__item').querySelector('.cards__title').textContent)
    popupFigcaption.textContent = evt.target.closest('.cards__item').querySelector('.cards__title').textContent
  }
}

function setProfileData (profileTitleNode, nameInputValue, profileSubtitleNode, descriptionInputValue) {
  profileTitleNode.textContent = nameInputValue
  profileSubtitleNode.textContent = descriptionInputValue
}

let popupBtnText
function renderLoading(isLoading, popupNode) {
  const btnNode = popupNode.querySelector('.popup__confirm-button')
  if (isLoading) {
    popupBtnText = btnNode.textContent
    console.log(`первый раз ${popupBtnText}`)
    btnNode.textContent = "Сохранение..."
  } else {
    setTimeout(() => { btnNode.textContent = popupBtnText }, 1000)
  }
}

function adjustLikeStation (data, cardElement) {
  cardElement.querySelector('.cards__likes-counter').textContent = data.likes.length
  if (data.likes.length > 0) {
    data.likes.forEach( like => {
      if (like._id === userID) {
        cardElement.querySelector('.cards__button-like').classList.add('cards__button-like_active')
      }
    })
  }
}

function changeLikeState (evt, data, likesCounter) {
  if (evt.target.classList.contains('cards__button-like_active')) {
    removeLike(data._id)
    .then( (res) => {
      evt.target.classList.remove('cards__button-like_active')
      likesCounter.textContent = res.likes.length
      evt.target.blur()
    })
  } else {
    addLike(data._id)
    .then( (res) => {
      evt.target.classList.add('cards__button-like_active')
      likesCounter.textContent = res.likes.length
      evt.target.blur()
    })
  }
}

export let cardID
export let nodeToDelete

function addWastebasketHandler (evt, data, popupDelete) {
    openPopup(popupDelete)
    cardID = data._id
    nodeToDelete = evt.target.closest('.cards__item')
}

export { addCardPopupImageHandler, setProfileData, renderLoading, adjustLikeStation, changeLikeState, addWastebasketHandler }