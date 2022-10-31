 enableValidation()

 function enableValidation () {
  const formList = Array.from(document.querySelectorAll('.popup__form'))
  formList.forEach( (formElement) => {
    setEventListeners(formElement)
  })
}

function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text-input'))
  const buttonElement = formElement.querySelector('.popup__confirm-button')
  toggleButtonState(inputList, buttonElement)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement)
      toggleButtonState(inputList, buttonElement)
    })
  })
}

function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__confirm-button_inactive')
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove('popup__confirm-button_inactive')
    buttonElement.removeAttribute('disabled')
  }
}

function hasInvalidInput (inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

function checkInputValidity (formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
  } else {
    hideInputError(formElement, inputElement)
  }
}

function showInputError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add('popup__text-input_type_error')
  errorElement.textContent = errorMessage
  errorElement.classList.add('popup__input-error_active')
};

function hideInputError (formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove('popup__text-input_type_error')
  errorElement.classList.remove('popup__input-error_active')
  errorElement.textContent = ''
}








