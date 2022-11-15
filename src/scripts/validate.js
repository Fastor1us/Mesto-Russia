export function enableValidation (validationData) {
  const formList = Array.from(document.querySelectorAll(validationData.formSelector))
  formList.forEach( (formElement) => {
    setEventListeners(formElement, validationData)
  })
}
function setEventListeners (formElement, validationData) {
  const inputList = Array.from(formElement.querySelectorAll(validationData.inputSelector))
  const buttonElement = formElement.querySelector(validationData.submitButtonSelector)
  toggleButtonState(inputList, buttonElement, validationData)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationData)
      toggleButtonState(inputList, buttonElement, validationData)
    })
  })
}

export function toggleButtonState (inputList, buttonElement, validationData) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationData.inactiveButtonClass)
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove(validationData.inactiveButtonClass)
    buttonElement.removeAttribute('disabled')
  }
}

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

function checkInputValidity (formElement, inputElement, validationData) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationData)
  } else {
    hideInputError(formElement, inputElement, validationData)
  }
}

function showInputError (formElement, inputElement, errorMessage, validationData) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add(validationData.inputErrorClass)
  errorElement.textContent = errorMessage
  errorElement.classList.add('popup__input-error_active')
};

function hideInputError (formElement, inputElement, validationData) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(validationData.inputErrorClass)
  errorElement.classList.remove('popup__input-error_active')
  errorElement.textContent = ''
}








