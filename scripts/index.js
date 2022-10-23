/********************   DATA   ********************/

const popup = document.querySelector('.popup')
const popupInputs = popup.querySelectorAll('.popup__text-input')
const popupConfirmButton = popup.querySelector('.popup__confirm-button')
const profileTitle = document.querySelector('.profile__title')
const profileSubtitle = document.querySelector('.profile__subtitle')
const profileEditButton = document.querySelector('.profile__edit-button')
const profileAddButton = document.querySelector('.profile__add-button')

/********************   ACTIONS   ********************/

profileEditButton.addEventListener('click',
  function () {
    openPopup()
    popup.querySelector('.popup__title').textContent = 'Редактировать профиль'
    popupInputs[0].value = profileTitle.textContent
    popupInputs[0].placeholder = 'Имя'
    popupInputs[1].value = profileSubtitle.textContent
    popupInputs[1].placeholder = 'Описание'
    popupConfirmButton.textContent = 'Сохранить'
  }
)

profileAddButton.addEventListener('click',
  function () {
    openPopup()
  }
)

popup.querySelector('.popup__close-button').addEventListener('click',
  function () {
    if (popup.classList.contains('popup_opened')) {
      popup.classList.remove('popup_opened')
    }
  }
)

popup.querySelector('.popup__container').addEventListener('submit',
  function (EventTarget) {
    EventTarget.preventDefault()
    profileTitle.textContent = popupInputs[0].value
    profileSubtitle.textContent = popupInputs[1].value
    if (popup.classList.contains('popup_opened')) {
      popup.classList.remove('popup_opened')
    }
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

/********************   FUNCTIONS   ********************/

function openPopup () { popup.classList.add('popup_opened') }