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

const popup = document.querySelector('.popup')
const popupInputs = popup.querySelectorAll('.popup__text-input')
const popupCloseButton = popup.querySelectorAll('.popup__close-button')
const popupTitle = popup.querySelector('.popup__title')
const popupConfirmButton = popup.querySelector('.popup__confirm-button')
const popupContainer = popup.querySelector('.popup__container')
const popupFigure = popup.querySelector('.popup__figure')
const profileTitle = document.querySelector('.profile__title')
const profileSubtitle = document.querySelector('.profile__subtitle')
const profileEditButton = document.querySelector('.profile__edit-button')
const profileAddButton = document.querySelector('.profile__add-button')
const cardsContainer = document.querySelector('.cards__list')

/********************   ACTIONS   ********************/

addInitialCards(initialCards)

profileEditButton.addEventListener('click', () => {
    openPopup(popupContainer)
    FillPopupFields(
      'Редактировать профиль',
      profileTitle.textContent,
      'Имя',
      profileSubtitle.textContent,
      'Описание',
      'Сохранить'
    )
  }
)

profileAddButton.addEventListener('click', () => {
    openPopup(popupContainer)
    FillPopupFields(
      'Новое место',
      '',
      'Название',
      '',
      'Ссылка на картинку',
      'Создать'
    )
  }
)

popupContainer.addEventListener('submit', (EventTarget) => {
    EventTarget.preventDefault()
    switch (popupTitle.textContent) {
      case 'Редактировать профиль':
        profileTitle.textContent = popupInputs[0].value
        profileSubtitle.textContent = popupInputs[1].value
        break
      case 'Новое место':
        addCard()
    }
    closePopup()
  }
)

document.querySelectorAll('.cards__button-like').forEach(
  function(item) {
    item.addEventListener('click',
    function () {
      item.blur()
    })
  }
)

popupCloseButton.forEach( (item) => {
    item.addEventListener('click', () => {
      closePopup()
    })
  }
)

/********************   FUNCTIONS   ********************/

function openPopup (item) {
  popup.classList.add('popup_opened')
  if (item.hasAttribute('src')) {
    popupFigure.classList.add('popup_opened')
    popup.querySelector('.popup__image').src = item.src
  } else {
    item.classList.add('popup_opened')
  }
}

function closePopup () {
  popup.classList.remove('popup_opened')
  if (popupContainer.classList.contains('popup_opened')) {
    popupContainer.classList.remove('popup_opened')
  } else {
    popupFigure.classList.remove('popup_opened')
  }
}

function addCard () {
  const cardTemplate = document.querySelector('#card-template').content
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true)

  cardElement.querySelector('.cards__image').setAttribute('src', popupInputs[1].value)
  cardElement.querySelector('.cards__image').setAttribute('alt', popupInputs[0].value)
  cardElement.querySelector('.cards__title').textContent = popupInputs[0].value

  wastebasketHandler(cardElement.querySelector('.cards__wastebasket'))
  imageClickHandler(cardElement.querySelector('.cards__image'))

  cardsContainer.prepend(cardElement)
}

function addInitialCards (cardsArray) {
  cardsArray.forEach( (item) => {
    const cardTemplate = document.querySelector('#card-template').content
    const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true)

    cardElement.querySelector('.cards__image').setAttribute('src', item.link)
    cardElement.querySelector('.cards__image').setAttribute('alt', item.name)
    cardElement.querySelector('.cards__title').textContent = item.name

    wastebasketHandler(cardElement.querySelector('.cards__wastebasket'))
    imageClickHandler(cardElement.querySelector('.cards__image'))

    cardsContainer.append(cardElement)
  })
}

function FillPopupFields (a, b ,c ,d, e,f) {
  popupTitle.textContent = a
  popupInputs[0].value = b
  popupInputs[0].placeholder = c
  popupInputs[1].value = d
  popupInputs[1].placeholder = e
  popupConfirmButton.textContent = f
}

function wastebasketHandler (item) {
  item.addEventListener('click',
  function () {
    item.parentElement.remove()
  })
}

function imageClickHandler (item) {
  item.addEventListener('click',
  function () {
    openPopup(item)
  })
}