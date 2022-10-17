const popup = document.querySelector('.popup')

document.querySelector('.profile__edit-button').addEventListener('click',
  function () {
    if (!popup.classList.contains('popup_opened')) {
      popup.classList.add('popup_opened')
    }
  }
)

document.querySelector('.popup__close-button').addEventListener('click',
  function () {
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
