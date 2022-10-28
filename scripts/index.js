/********************   DATA   ********************/
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupCloseButtons = document.querySelectorAll('.popup__close-button')

const popupProfileContainer = document.querySelector('#popup-profile')
const popupProfileInputName = popupProfileContainer.querySelector('#popup-profile-title')
const popupProfileInputDescription = popupProfileContainer.querySelector('#popup-profile-description')

const popupCardContainer = document.querySelector('#popup-card')
const popupCardName = popupCardContainer.querySelector('#popup-card-name')
const popupCardLink = popupCardContainer.querySelector('#popup-card-link')

const popupImageContainer = document.querySelector('#popup-image')
const popupImage = popupImageContainer.querySelector('.popup__image')
const popupFigcaption = popupImageContainer.querySelector('.popup__figcaption')

const profile = document.querySelector('.profile')
const profileTitle = profile.querySelector('.profile__title')
const profileSubtitle = profile.querySelector('.profile__subtitle')
const profileEditButton = profile.querySelector('.profile__edit-button')
const profileAddButton = profile.querySelector('.profile__add-button')

const cardTemplate = document.querySelector('#card-template').content

const cardsContainer = document.querySelector('.cards__list')

let currentOpenedPopup

/********************   ACTIONS   ********************/

initialCards.forEach( (card) => {
  cardsContainer.append(addCard(card.name, card.link))
})

profileEditButton.addEventListener('click', () => {
  openPopup(popupProfileContainer)
  popupProfileInputName.value = profileTitle.textContent
  popupProfileInputDescription.value = profileSubtitle.textContent
})

profileAddButton.addEventListener('click', () => {
  openPopup(popupCardContainer)
})

popupCloseButtons.forEach( (item) => {
  item.addEventListener('click', () => {
    // closePopup(item.closest('.popup'))
    closePopup()
  })
})


cardsContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('cards__button-like')) {
    evt.target.classList.toggle('cards__button-like_active')
    evt.target.blur()
  }
  if (evt.target.classList.contains('cards__wastebasket')) {
    evt.target.closest('.cards__item').remove()
  }
  if (evt.target.classList.contains('cards__image')) {
    openPopup(popupImageContainer)
    popupImage.setAttribute('src', evt.target.getAttribute('src'))
    popupImage.setAttribute('alt', evt.target.closest('.cards__item').querySelector('.cards__title').textContent)
    popupFigcaption.textContent = evt.target.closest('.cards__item').querySelector('.cards__title').textContent
  }
})


popupProfileContainer.addEventListener('submit', (evt) => {
  evt.preventDefault()
  profileTitle.textContent = popupProfileInputName.value
  profileSubtitle.textContent = popupProfileInputDescription.value
  // closePopup(popupProfileContainer)
  closePopup()
})

popupCardContainer.addEventListener('submit', (evt) => {
  evt.preventDefault()
  cardsContainer.prepend(addCard(popupCardName.value, popupCardLink.value))
  evt.target.reset()
  // closePopup(popupCardContainer)
  closePopup()
})

/********************   FUNCTIONS   ********************/

function openPopup(popupNode) {
  popupNode.classList.add('popup_opened')
  currentOpenedPopup = popupNode
}

function closePopup() {
  currentOpenedPopup.classList.remove('popup_opened')
}

function addCard(name, link) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true)
  const cardImage = cardElement.querySelector('.cards__image')

  cardElement.querySelector('.cards__title').textContent = name
  cardImage.setAttribute('alt', name)
  cardImage.setAttribute('src', link)

  // addWastebasketHandler(cardElement.querySelector('.cards__wastebasket'), cardElement)
  // addCardImageHandler(cardImage, name, link)
  // addButtonLikeHandler(cardElement.querySelector('.cards__button-like'))

  return cardElement
}

// function addWastebasketHandler(itemNode, elementToRemove) {
//   itemNode.addEventListener('click',
//     function () {
//       elementToRemove.remove()
//   })
// }

// function addCardImageHandler(imageNode, name, link) {
//   imageNode.addEventListener('click', () => {
//     openPopup(popupImageContainer)
//     popupImage.setAttribute('src', link)
//     popupImage.setAttribute('alt', name)
//     popupFigcaption.textContent = name
//   })
// }

// function addButtonLikeHandler (itemNode) {
//   itemNode.addEventListener('click',
//     function () {
//       itemNode.classList.toggle('cards__button-like_active')
//   })
//   itemNode.addEventListener('mouseout',
//     function () {
//       itemNode.blur()
//   })
// }



// Завернуть в функцию и повесить на currentOpenedPopup NODE
document.addEventListener('keydown', closePopupHanderKeydown)
function closePopupHanderKeydown (evt) {
  if (evt.key === 'Escape') {
    closePopup()
  }
}

document.addEventListener('click', closePopupHanderClick)
function closePopupHanderClick (evt) {
  console.log(evt.target)
  if (evt.target.classList.contains('popup')) {
    closePopup()
  }
}