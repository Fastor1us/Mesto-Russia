/********************   IMPORTS   ********************/

// import {} from './pages/index.css'

import { enableValidation, toggleButtonState } from './scripts/validate.js'

import { addCard } from './scripts/card.js'

import { openPopup, closePopup, adjustOpenedProfilePopup } from './scripts/modal.js'

import { setProfileData, renderLoading, cardID, nodeToDelete } from './scripts/utils.js'

import { getInitialCards, getProfileData, patchProfileData, postNewCard, deleteCard, patchAvatar } from './scripts/api.js'


/********************   DATA   ********************/

const popupCloseButtons = document.querySelectorAll('.popup__close-button')

const popupAvatar = document.querySelector('#popup-avatar')

const popupProfileContainer = document.querySelector('#popup-profile')
const popupProfileInputName = popupProfileContainer.querySelector('#popup-profile-title')
const popupProfileInputDescription = popupProfileContainer.querySelector('#popup-profile-description')

const popupCardContainer = document.querySelector('#popup-card')
const popupCardName = popupCardContainer.querySelector('#popup-card-name')
const popupCardLink = popupCardContainer.querySelector('#popup-card-link')

const popupDeleteContainer = document.querySelector('#popup-delete')

const profile = document.querySelector('.profile')
const pfofileAvatar = profile.querySelector('.profile__avatar')
const profileAvatarCover = profile.querySelector('.profile__avatar-cover')
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

getProfileData()
  .then( data => {
    pfofileAvatar.src = data.avatar
    profileTitle.textContent = data.name
    profileSubtitle.textContent = data.about
  })
  .catch( err => {
    console.log(err)
})

getInitialCards()
  .then( data => {
    data.forEach( card => {
      cardsContainer.append(addCard(card))
    })
  })
  .catch( err => {
    console.log(err)
})

profileAvatarCover.addEventListener('click', () => {
  openPopup(popupAvatar)
})

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

popupAvatar.addEventListener('submit', evt => {
  evt.preventDefault()
  renderLoading(true, popupAvatar)
  patchAvatar(document.querySelector('#popup-avatar-link').value)
    .then( data => {
      pfofileAvatar.src = data.avatar
    })
    .finally( () => {
      renderLoading(false, popupAvatar)
      closePopup(popupAvatar)
    })
})

popupProfileContainer.addEventListener('submit', evt => {
  evt.preventDefault()
  renderLoading(true, popupProfileContainer)
  patchProfileData(popupProfileInputName.value, popupProfileInputDescription.value)
    .then( data => {
      setProfileData(profileTitle, data.name, profileSubtitle, data.about)
    })
    .catch( err => {
      console.log(err)
    })
    .finally( () => {
      renderLoading(false, popupProfileContainer)
      closePopup(popupProfileContainer)
    })
})

popupCardContainer.addEventListener('submit', evt => {
  evt.preventDefault()
  renderLoading(true, popupCardContainer)
  postNewCard(popupCardName.value, popupCardLink.value)
    .then( data => {
      cardsContainer.prepend(addCard(data))
    })
    .catch( err => {
      console.log(err)
    })
    .finally( () => {
      evt.target.reset()
      renderLoading(true, popupCardContainer)
      closePopup(popupCardContainer)
    })
})

popupDeleteContainer.addEventListener('submit', evt => {
  evt.preventDefault()
  renderLoading(true, popupDeleteContainer)
  deleteCard(cardID)
    .then( () => {
      nodeToDelete.remove()
    })
    .catch( err =>{
      console.log(err)
    })
    .finally( () => {
      renderLoading(true, popupDeleteContainer)
      closePopup(popupDeleteContainer)
    })
})


/********************   FUNCTIONS   ********************/