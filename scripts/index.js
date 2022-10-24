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
  popupCardName.value = ''
  popupCardLink.value = ''
})

popupCloseButtons.forEach( (item) => {
  item.addEventListener('click', () => {
    closePopup(item.closest('.popup'))
  })
})

popupProfileContainer.addEventListener('submit', (evt) => {
  evt.preventDefault()
  profileTitle.textContent = popupProfileInputName.value
  profileSubtitle.textContent = popupProfileInputDescription.value
  closePopup(popupProfileContainer)
})

popupCardContainer.addEventListener('submit', (evt) => {
  evt.preventDefault()
  cardsContainer.prepend(addCard(popupCardName.value, popupCardLink.value))
  closePopup(popupCardContainer)
})

/********************   FUNCTIONS   ********************/

function openPopup(popupNode) {
  popupNode.classList.add('popup_opened')
}

function closePopup(popupNode) {
  popupNode.classList.remove('popup_opened')
}

function addCard(name, link) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true)
  const cardImage = cardElement.querySelector('.cards__image')

  cardElement.querySelector('.cards__title').textContent = name
  cardImage.setAttribute('alt', name)
  cardImage.setAttribute('src', link)

  cardElement.querySelector('.cards__wastebasket').addEventListener('click', () => {
    cardElement.remove()
  })

  addCardImageHandler(cardImage, name, link)
  addButtonLikeHandler(cardElement.querySelector('.cards__button-like'))

  return cardElement
}

function addCardImageHandler(imageNode, name, link) {
  imageNode.addEventListener('click', () => {
    openPopup(popupImageContainer)
    popupImage.setAttribute('src', link)
    popupImage.setAttribute('alt', name)
    popupFigcaption.textContent = name
  })
}

function addButtonLikeHandler (itemNode) {
  itemNode.addEventListener('click',
  function () {
    itemNode.classList.toggle('cards__button-like_active')
  })
  itemNode.addEventListener('mouseout',
  function () {
    itemNode.blur()
  })
}