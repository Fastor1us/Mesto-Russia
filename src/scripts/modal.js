function openPopup(popupNode) {
  popupNode.classList.add('popup_opened')
}

function closePopup(popupNode) {
  popupNode.classList.remove('popup_opened')
}

function isPopupOpened() {
  if (document.querySelector('.popup_opened')) { return true } else { return false }
}

function adjustOpenedProfilePopup (name, description, title, subtitle) {
  name.value = title.textContent
  description.value = subtitle.textContent

  var eventInput = new Event('input')
  name.dispatchEvent(eventInput)
  description.dispatchEvent(eventInput)
}

export { openPopup, closePopup, isPopupOpened, adjustOpenedProfilePopup }