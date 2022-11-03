function addButtonLikeHandler (evt) {
  const isLikeBtn = evt.target.classList.contains('cards__button-like')
  if (isLikeBtn) {
    evt.target.classList.toggle('cards__button-like_active')
    evt.target.blur()
  }
}

function addWastebasketHandler (evt) {
  const ifWastebasketBtn = evt.target.classList.contains('cards__wastebasket')
  if (ifWastebasketBtn) {
    evt.target.closest('.cards__item').remove()
  }
}

function addCardImageHandler (evt) {
  if (evt.target.classList.contains('cards__image')) {
    openPopup(popupImageContainer)
    popupImage.setAttribute('src', evt.target.getAttribute('src'))
    popupImage.setAttribute('alt', evt.target.closest('.cards__item').querySelector('.cards__title').textContent)
    popupFigcaption.textContent = evt.target.closest('.cards__item').querySelector('.cards__title').textContent
  }
}

function setProfileData (profileTitleNode, nameInputValue, profileSubtitleNode, descriptionInputValue) {
  profileTitleNode.textContent = nameInputValue.value
  profileSubtitleNode.textContent = descriptionInputValue.value
}

export { addButtonLikeHandler, addWastebasketHandler, addCardImageHandler, setProfileData }