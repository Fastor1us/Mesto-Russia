function openPopup(popupNode) {
  popupNode.classList.add('popup_opened')
  setPopupCloseListener()
}

function closePopup(popupNode) {
  popupNode.classList.remove('popup_opened')
  removePopupCloseListener()
}

function adjustOpenedProfilePopup (name, description, title, subtitle) {
  name.value = title.textContent
  description.value = subtitle.textContent

  const eventInput = new Event('input')
  name.dispatchEvent(eventInput)
  description.dispatchEvent(eventInput)
}

function setPopupCloseListener() {
  document.addEventListener('keydown', handlePopupCloseListener)
  document.addEventListener('mousedown', handlePopupCloseListener)
}

const escapeKey = 'Escape'

function handlePopupCloseListener(evt) {
  if (evt.type === 'keydown' && evt.key === escapeKey && isPopupOpened()) {
    closePopup(findOpenedPopup())
  }
  if (evt.type === 'mousedown' && evt.target.classList.contains('popup')) {
    closePopup(findOpenedPopup())
  }
}

function isPopupOpened() {
  if (findOpenedPopup()) { return true } else { return false }
}

function findOpenedPopup () {
  return document.querySelector('.popup_opened')
}

function removePopupCloseListener() {
  document.removeEventListener('keydown', handlePopupCloseListener)
  document.removeEventListener('mousedown', handlePopupCloseListener)
}

export { openPopup, closePopup, adjustOpenedProfilePopup, setPopupCloseListener }