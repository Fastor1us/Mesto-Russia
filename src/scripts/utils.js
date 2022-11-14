const popupImage = document.querySelector('.popup__image')
const popupImageContainer = document.querySelector('#popup-image')
const popupFigcaption = document.querySelector('.popup__figcaption')
import { openPopup, setPopupCloseListener } from './modal.js'

function addCardPopupImageHandler (evt) {
  if (evt.target.classList.contains('cards__image')) {
    openPopup(popupImageContainer)
    setPopupCloseListener()
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
    btnNode.textContent = "Сохранение..."
  } else {
    setTimeout(() => { btnNode.textContent = popupBtnText }, 1000)
  }
}

export { addCardPopupImageHandler, setProfileData, renderLoading }