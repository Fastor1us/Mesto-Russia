(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))}function n(e){e.classList.add("popup_opened"),document.addEventListener("keydown",o),document.addEventListener("mousedown",o)}function r(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",o),document.removeEventListener("mousedown",o)}function o(e){"keydown"===e.type&&"Escape"===e.key&&c()&&r(c()),"mousedown"===e.type&&e.target.classList.contains("popup")&&r(c())}function c(){return document.querySelector(".popup_opened")}e.d({},{Z:()=>S});var a,u,i,s={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-2",headers:{authorization:"b0948f28-f65b-421f-840c-fb58737d2d86","Content-Type":"application/json"}},l=fetch("".concat(s.baseUrl,"/users/me"),{headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),d=fetch("".concat(s.baseUrl,"/cards"),{headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),p=document.querySelector(".popup__image"),f=document.querySelector("#popup-image"),_=document.querySelector(".popup__figcaption");function m(e){e.target.classList.contains("cards__image")&&(n(f),p.setAttribute("src",e.target.getAttribute("src")),p.setAttribute("alt",e.target.closest(".cards__item").querySelector(".cards__title").textContent),_.textContent=e.target.closest(".cards__item").querySelector(".cards__title").textContent)}function v(e,t){var n=t.querySelector(".popup__confirm-button");e?(a=n.textContent,console.log("первый раз ".concat(a)),n.textContent="Сохранение..."):setTimeout((function(){n.textContent=a}),1e3)}var y=document.querySelector("#card-template").content;function h(e){var t=y.querySelector(".cards__item").cloneNode(!0),r=t.querySelector(".cards__image"),o=t.querySelector(".cards__wastebasket");return t.querySelector(".cards__title").textContent=e.name,r.setAttribute("alt",e.name),r.setAttribute("src",e.link),r.addEventListener("click",m),e.owner._id===S&&(o.classList.remove("cards__wastebasket_hidden"),o.addEventListener("click",(function(t){return function(e,t,r){n(document.querySelector("#popup-delete")),u=t._id,i=e.target.closest(".cards__item")}(t,e)}))),function(e,t){t.querySelector(".cards__likes-counter").textContent=e.likes.length,e.likes.length>0&&e.likes.forEach((function(e){e._id===S&&t.querySelector(".cards__button-like").classList.add("cards__button-like_active")}))}(e,t),t.querySelector(".cards__button-like").addEventListener("click",(function(n){return function(e,t,n){var r;e.target.classList.contains("cards__button-like_active")?(r=t._id,fetch("".concat(s.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(t){e.target.classList.remove("cards__button-like_active"),n.textContent=t.likes.length,e.target.blur()})):function(e){return fetch("".concat(s.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(t._id).then((function(t){e.target.classList.add("cards__button-like_active"),n.textContent=t.likes.length,e.target.blur()}))}(n,e,t.querySelector(".cards__likes-counter"))})),t}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S,q=document.querySelectorAll(".popup__close-button"),k=document.querySelector("#popup-avatar"),g=document.querySelector("#popup-profile"),E=g.querySelector("#popup-profile-title"),L=g.querySelector("#popup-profile-description"),C=document.querySelector("#popup-card"),j=C.querySelector("#popup-card-name"),x=C.querySelector("#popup-card-link"),A=document.querySelector("#popup-delete"),w=document.querySelector(".profile"),P=w.querySelector(".profile__avatar"),U=w.querySelector(".profile__avatar-cover"),O=w.querySelector(".profile__title"),T=w.querySelector(".profile__subtitle"),B=w.querySelector(".profile__edit-button"),D=w.querySelector(".profile__add-button"),N=document.querySelector(".cards__list"),I={formSelector:".popup__form",inputSelector:".popup__text-input",submitButtonSelector:".popup__confirm-button",inactiveButtonClass:"popup__confirm-button_inactive",inputErrorClass:"popup__text-input_type_error",errorClass:"popup__input-error_active"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(n){!function(e,n){var r=Array.from(e.querySelectorAll(n.inputSelector)),o=e.querySelector(n.submitButtonSelector);t(r,o,n),r.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove("popup__input-error_active"),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add("popup__input-error_active")}(e,t,t.validationMessage,n)}(e,c,n),t(r,o,n)}))}))}(n,e)}))}(I),Promise.all([l,d]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];S=o._id,P.src=o.avatar,O.textContent=o.name,T.textContent=o.about,c.forEach((function(e){N.append(h(e))}))})).catch((function(e){console.log(e)})),U.addEventListener("click",(function(){n(k)})),B.addEventListener("click",(function(){n(g),function(e,t,n,r){e.value=n.textContent,t.value=r.textContent;var o=new Event("input");e.dispatchEvent(o),t.dispatchEvent(o)}(E,L,O,T)})),D.addEventListener("click",(function(){n(C),t([j,x],C.querySelector(I.submitButtonSelector),I)})),q.forEach((function(e){e.addEventListener("click",(function(){r(e.closest(".popup"))}))})),k.addEventListener("submit",(function(e){var t;e.preventDefault(),v(!0,k),(t=document.querySelector("#popup-avatar-link").value,fetch("".concat(s.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:s.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){P.src=e.avatar})).finally((function(){v(!1,k),r(k)}))})),g.addEventListener("submit",(function(e){var t,n;e.preventDefault(),v(!0,g),(t=E.value,n=L.value,fetch("".concat(s.baseUrl,"/users/me"),{method:"PATCH",headers:s.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){var t,n,r,o;t=O,n=e.name,r=T,o=e.about,t.textContent=n,r.textContent=o})).catch((function(e){console.log(e)})).finally((function(){v(!1,g),r(g)}))})),C.addEventListener("submit",(function(e){var t,n;e.preventDefault(),v(!0,C),(t=j.value,n=x.value,fetch("".concat(s.baseUrl,"/cards"),{method:"POST",headers:s.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(e){N.prepend(h(e))})).catch((function(e){console.log(e)})).finally((function(){e.target.reset(),v(!1,C),r(C)}))})),A.addEventListener("submit",(function(e){var t;e.preventDefault(),v(!0,A),(t=u,fetch("".concat(s.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){i.remove()})).catch((function(e){console.log(e)})).finally((function(){v(!1,A),r(A)}))}))})();