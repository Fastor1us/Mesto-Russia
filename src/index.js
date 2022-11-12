/********************   IMPORTS   ********************/

// import {} from './pages/index.css'

import { enableValidation, toggleButtonState } from './scripts/validate.js'

import { addCard } from './scripts/card.js'

import { openPopup, closePopup, adjustOpenedProfilePopup } from './scripts/modal.js'

import { addButtonLikeHandler, addWastebasketHandler, addCardImageHandler, setProfileData } from './scripts/utils.js'


/********************   DATA   ********************/

// const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Челябинская область',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Байкал',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//   }
// ];

const popupCloseButtons = document.querySelectorAll('.popup__close-button')

const popupProfileContainer = document.querySelector('#popup-profile')
const popupProfileInputName = popupProfileContainer.querySelector('#popup-profile-title')
const popupProfileInputDescription = popupProfileContainer.querySelector('#popup-profile-description')

const popupCardContainer = document.querySelector('#popup-card')
const popupCardName = popupCardContainer.querySelector('#popup-card-name')
const popupCardLink = popupCardContainer.querySelector('#popup-card-link')

const profile = document.querySelector('.profile')
const profileTitle = profile.querySelector('.profile__title')
const profileSubtitle = profile.querySelector('.profile__subtitle')
const profileEditButton = profile.querySelector('.profile__edit-button')
const profileAddButton = profile.querySelector('.profile__add-button')

const cardsContainer = document.querySelector('.cards__list')


/********************   ACTIONS   ********************/

export const validationData = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text-input',
  submitButtonSelector: '.popup__confirm-button',
  inactiveButtonClass: 'popup__confirm-button_inactive',
  inputErrorClass: 'popup__text-input_type_error',
  errorClass: 'popup__input-error_active'
}

enableValidation(validationData)

// initialCards.forEach( card => {
//   cardsContainer.append(addCard(card.name, card.link))
// })


// document.body.innerHTML = ""

getInitialCards ()

profileEditButton.addEventListener('click', () => {
  openPopup(popupProfileContainer)
  adjustOpenedProfilePopup(
    popupProfileInputName,
    popupProfileInputDescription,
    profileTitle,
    profileSubtitle
    )
})

profileAddButton.addEventListener('click', () => {
  openPopup(popupCardContainer)
  toggleButtonState([popupCardName, popupCardLink], popupCardContainer.querySelector(validationData.submitButtonSelector), validationData)
})

popupCloseButtons.forEach( item => {
  item.addEventListener('click', () => {
    closePopup(item.closest('.popup'))
  })
})

cardsContainer.addEventListener('click', evt => {
  addButtonLikeHandler(evt)
  addWastebasketHandler(evt)
  addCardImageHandler(evt)
})

popupProfileContainer.addEventListener('submit', evt => {
  evt.preventDefault()
  setProfileData(profileTitle, popupProfileInputName, profileSubtitle, popupProfileInputDescription)
  closePopup(popupProfileContainer)
})

popupCardContainer.addEventListener('submit', evt => {
  evt.preventDefault()
  cardsContainer.prepend(addCard(popupCardName.value, popupCardLink.value))
  evt.target.reset()
  closePopup(popupCardContainer)
})


/********************   FUNCTIONS   ********************/