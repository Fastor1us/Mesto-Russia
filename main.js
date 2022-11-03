(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){var t=Array.from(e.querySelectorAll(h.inputSelector)),n=e.querySelector(h.submitButtonSelector);r(t,n),t.forEach((function(o){o.addEventListener("input",(function(){!function(e,t){t.validity.valid?function(e,t){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(h.inputErrorClass),r.classList.remove("popup__input-error_active"),r.textContent=""}(e,t):function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.add(h.inputErrorClass),n.textContent=r,n.classList.add("popup__input-error_active")}(e,t,t.validationMessage)}(e,o),r(t,n)}))}))}function r(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(h.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(h.inactiveButtonClass),t.setAttribute("disabled",!0))}e.d({},{R:()=>h});var n=document.querySelector("#card-template").content;function o(e,t){var r=n.querySelector(".cards__item").cloneNode(!0),o=r.querySelector(".cards__image");return r.querySelector(".cards__title").textContent=e,o.setAttribute("alt",e),o.setAttribute("src",t),r}function c(e){e.classList.add("popup_opened")}function i(e){e.classList.remove("popup_opened")}function s(){document.addEventListener("keydown",a),document.addEventListener("mousedown",a)}function a(e){var t=document.querySelector(".popup_opened");"keydown"===e.type&&"Escape"===e.key&&document.querySelector(".popup_opened")&&(i(t),u()),"mousedown"===e.type&&e.target.classList.contains("popup")&&(i(t),u())}function u(){document.removeEventListener("keydown",a),document.removeEventListener("mousedown",a)}var p=document.querySelector(".popup__image"),l=document.querySelector("#popup-image"),d=document.querySelector(".popup__figcaption"),_=document.querySelectorAll(".popup__close-button"),m=document.querySelector("#popup-profile"),v=m.querySelector("#popup-profile-title"),f=m.querySelector("#popup-profile-description"),y=document.querySelector("#popup-card"),S=y.querySelector("#popup-card-name"),b=y.querySelector("#popup-card-link"),q=document.querySelector(".profile"),g=q.querySelector(".profile__title"),k=q.querySelector(".profile__subtitle"),L=q.querySelector(".profile__edit-button"),E=q.querySelector(".profile__add-button"),x=document.querySelector(".cards__list"),h={formSelector:".popup__form",inputSelector:".popup__text-input",submitButtonSelector:".popup__confirm-button",inactiveButtonClass:"popup__confirm-button_inactive",inputErrorClass:"popup__text-input_type_error",errorClass:"popup__input-error_active"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(e){t(e)}))}(h),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){x.append(o(e.name,e.link))})),L.addEventListener("click",(function(){c(m),s(),function(e,t,r,n){e.value=r.textContent,t.value=n.textContent;var o=new Event("input");e.dispatchEvent(o),t.dispatchEvent(o)}(v,f,g,k)})),E.addEventListener("click",(function(){c(y),s()})),_.forEach((function(e){e.addEventListener("click",(function(){i(e.closest(".popup"))}))})),x.addEventListener("click",(function(e){!function(e){e.target.classList.contains("cards__button-like")&&(e.target.classList.toggle("cards__button-like_active"),e.target.blur())}(e),function(e){e.target.classList.contains("cards__wastebasket")&&e.target.closest(".cards__item").remove()}(e),function(e){e.target.classList.contains("cards__image")&&(c(l),s(),p.setAttribute("src",e.target.getAttribute("src")),p.setAttribute("alt",e.target.closest(".cards__item").querySelector(".cards__title").textContent),d.textContent=e.target.closest(".cards__item").querySelector(".cards__title").textContent)}(e)})),m.addEventListener("submit",(function(e){var t,r,n;e.preventDefault(),t=v,r=k,n=f,g.textContent=t.value,r.textContent=n.value,i(m)})),y.addEventListener("submit",(function(e){e.preventDefault(),x.prepend(o(S.value,b.value)),e.target.reset(),i(y)}))})();