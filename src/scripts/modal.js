function openPopup(popupNode) {
  popupNode.classList.add('popup_opened')
}

function closePopup(popupNode) {
  popupNode.classList.remove('popup_opened')
}

function adjustOpenedProfilePopup (name, description, title, subtitle) {
  name.value = title.textContent
  description.value = subtitle.textContent

  var eventInput = new Event('input')
  name.dispatchEvent(eventInput)
  description.dispatchEvent(eventInput)
}

function setPopupCloseListener() {
  document.addEventListener('keydown', handlePopupCloseListener)
  document.addEventListener('mousedown', handlePopupCloseListener)
}

const escapeKey = 'Escape'

function handlePopupCloseListener(evt) {
  const openedPopup = document.querySelector('.popup_opened')
  if (evt.type === 'keydown' && evt.key === escapeKey && isPopupOpened()) {
    closePopup(openedPopup)
    removePopupCloseListener()
  }
  if (evt.type === 'mousedown' && evt.target.classList.contains('popup')) {
    closePopup(openedPopup)
    removePopupCloseListener()
  }
}

function isPopupOpened() {
  if (document.querySelector('.popup_opened')) { return true } else { return false }
}

function removePopupCloseListener() {
  document.removeEventListener('keydown', handlePopupCloseListener)
  document.removeEventListener('mousedown', handlePopupCloseListener)
}

export { openPopup, closePopup, adjustOpenedProfilePopup, setPopupCloseListener }