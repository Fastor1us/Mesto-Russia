function openPopup(popupNode) {
  popupNode.classList.add('popup_opened')
  setPopupCloseListener(popupNode)
}

function closePopup(popupNode) {
  popupNode.classList.remove('popup_opened')
  removePopupCloseListener(popupNode)
}

function adjustOpenedProfilePopup (name, description, title, subtitle) {
  name.value = title.textContent
  description.value = subtitle.textContent

  const eventInput = new Event('input')
  name.dispatchEvent(eventInput)
  description.dispatchEvent(eventInput)
}

function setPopupCloseListener(popupNode) {
  document.addEventListener('keydown', handlePopupCloseListenerKeydown)
  popupNode.addEventListener('mousedown', handlePopupCloseListenerMousedown)
}

function handlePopupCloseListenerKeydown(evt) {
  if (evt.type === 'keydown' && evt.key === 'Escape') {
    closePopup(findOpenedPopup())
  }
}

function handlePopupCloseListenerMousedown(evt) {
  if (evt.type === 'mousedown' && evt.target.classList.contains('popup')) {
    closePopup(evt.target)
  }
}

function findOpenedPopup () {
  return document.querySelector('.popup_opened')
}

function removePopupCloseListener(popupNode) {
  document.removeEventListener('keydown', handlePopupCloseListenerKeydown)
  popupNode.removeEventListener('mousedown', handlePopupCloseListenerMousedown)
}

export { openPopup, closePopup, adjustOpenedProfilePopup }