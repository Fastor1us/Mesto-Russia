/********************   DATA   ********************/

const popup = document.querySelector('.popup')
const popupInputs = popup.querySelectorAll('.popup__text-input')
const popupCloseButton = popup.querySelector('.popup__close-button')
const popupTitle = popup.querySelector('.popup__title')
const popupConfirmButton = popup.querySelector('.popup__confirm-button')
const popupContainer = popup.querySelector('.popup__container')
const profileTitle = document.querySelector('.profile__title')
const profileSubtitle = document.querySelector('.profile__subtitle')
const profileEditButton = document.querySelector('.profile__edit-button')
const profileAddButton = document.querySelector('.profile__add-button')
const cardsContainer = document.querySelector('.cards__list')

/********************   ACTIONS   ********************/

profileEditButton.addEventListener('click', () => {
    openPopup()
    popupTitle.textContent = 'Редактировать профиль'
    popupInputs[0].value = profileTitle.textContent
    popupInputs[0].placeholder = 'Имя'
    popupInputs[1].value = profileSubtitle.textContent
    popupInputs[1].placeholder = 'Описание'
    popupConfirmButton.textContent = 'Сохранить'
  }
)

profileAddButton.addEventListener('click', () => {
    openPopup()
    popupTitle.textContent = 'Новое место'
    popupInputs[0].value = ''
    popupInputs[0].placeholder = 'Название'
    popupInputs[1].value = ''
    popupInputs[1].placeholder = 'Ссылка на картинку'
    popupConfirmButton.textContent = 'Создать'
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

popupCloseButton.addEventListener('click', () => {
  closePopup()
}
)

/********************   FUNCTIONS   ********************/

function openPopup () { popup.classList.add('popup_opened') }
function closePopup () { popup.classList.remove('popup_opened') }

function addCard () {
  const cardTemplate = document.querySelector('#card-template').content
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true)

  cardElement.querySelector('.cards__image').setAttribute('src', popupInputs[1].value)
  cardElement.querySelector('.cards__image').setAttribute('alt', popupInputs[0].value)
  cardElement.querySelector('.cards__title').textContent = popupInputs[0].value

  cardsContainer.prepend(cardElement)
}