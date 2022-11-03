import { validationData } from '../index.js'

export function enableValidation (validationData) {
  const formList = Array.from(document.querySelectorAll(validationData.formSelector))
  formList.forEach( (formElement) => {
    setEventListeners(formElement)
  })
}

function setEventListeners (formElement) {
  const inputList = Array.from(formElement.querySelectorAll(validationData.inputSelector))
  const buttonElement = formElement.querySelector(validationData.submitButtonSelector)
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

function checkInputValidity (formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage)
  } else {
    hideInputError(formElement, inputElement)
  }
}

function showInputError (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add(validationData.inputErrorClass)
  errorElement.textContent = errorMessage
  errorElement.classList.add('popup__input-error_active')
};

function hideInputError (formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(validationData.inputErrorClass)
  errorElement.classList.remove('popup__input-error_active')
  errorElement.textContent = ''
}








