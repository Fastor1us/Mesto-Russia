(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))}function n(e){e.classList.add("popup_opened"),function(e){document.addEventListener("keydown",o),e.addEventListener("mousedown",c)}(e)}function r(e){e.classList.remove("popup_opened"),function(e){document.removeEventListener("keydown",o),e.removeEventListener("mousedown",c)}(e)}function o(e){"keydown"===e.type&&"Escape"===e.key&&r(document.querySelector(".popup_opened"))}function c(e){"mousedown"===e.type&&e.target.classList.contains("popup")&&r(e.target)}e.d({},{Z:()=>S});var a={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-2",headers:{authorization:"b0948f28-f65b-421f-840c-fb58737d2d86","Content-Type":"application/json"}};function u(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var i,l,s,d=fetch("".concat(a.baseUrl,"/users/me"),{headers:a.headers}).then((function(e){return u(e)})),p=fetch("".concat(a.baseUrl,"/cards"),{headers:a.headers}).then((function(e){return u(e)})),f=document.querySelector(".popup__image"),v=document.querySelector("#popup-image"),m=document.querySelector(".popup__figcaption");function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...",r=t.querySelector(".popup__confirm-button");e?(i=r.textContent,r.textContent=n):setTimeout((function(){r.textContent=i}),1e3)}var y=document.querySelector("#card-template").content;function h(e){var t=y.querySelector(".cards__item").cloneNode(!0),r=t.querySelector(".cards__image"),o=t.querySelector(".cards__wastebasket");return t.querySelector(".cards__title").textContent=e.name,r.setAttribute("alt",e.name),r.setAttribute("src",e.link),r.addEventListener("click",(function(){return function(e){n(v),f.setAttribute("src",e.link),f.setAttribute("alt",e.name),m.textContent=e.name}(e)})),e.owner._id===S&&(o.classList.remove("cards__wastebasket_hidden"),o.addEventListener("click",(function(t){return function(e,t,r){n(document.querySelector("#popup-delete")),l=t._id,s=e.target.closest(".cards__item")}(t,e)}))),function(e,t){t.querySelector(".cards__likes-counter").textContent=e.likes.length,e.likes.length>0&&e.likes.forEach((function(e){e._id===S&&t.querySelector(".cards__button-like").classList.add("cards__button-like_active")}))}(e,t),t.querySelector(".cards__button-like").addEventListener("click",(function(n){return function(e,t,n){var r;e.target.classList.contains("cards__button-like_active")?(r=t._id,fetch("".concat(a.baseUrl,"/cards/likes/").concat(r),{method:"DELETE",headers:a.headers}).then((function(e){return u(e)}))).then((function(t){e.target.classList.remove("cards__button-like_active"),n.textContent=t.likes.length,e.target.blur()})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(a.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:a.headers}).then((function(e){return u(e)}))}(t._id).then((function(t){e.target.classList.add("cards__button-like_active"),n.textContent=t.likes.length,e.target.blur()})).catch((function(e){console.log(e)}))}(n,e,t.querySelector(".cards__likes-counter"))})),t}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S,q=document.querySelectorAll(".popup__close-button"),g=document.querySelector("#popup-avatar"),E=document.querySelector("#popup-profile"),k=E.querySelector("#popup-profile-title"),L=E.querySelector("#popup-profile-description"),C=document.querySelector("#popup-card"),x=C.querySelector("#popup-card-name"),A=C.querySelector("#popup-card-link"),w=document.querySelector("#popup-delete"),U=document.querySelector(".profile"),O=U.querySelector(".profile__avatar"),T=U.querySelector(".profile__avatar-cover"),j=U.querySelector(".profile__title"),P=U.querySelector(".profile__subtitle"),B=U.querySelector(".profile__edit-button"),D=U.querySelector(".profile__add-button"),N=document.querySelector(".cards__list"),I={formSelector:".popup__form",inputSelector:".popup__text-input",submitButtonSelector:".popup__confirm-button",inactiveButtonClass:"popup__confirm-button_inactive",inputErrorClass:"popup__text-input_type_error",errorClass:"popup__input-error_active"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(n){!function(e,n){var r=Array.from(e.querySelectorAll(n.inputSelector)),o=e.querySelector(n.submitButtonSelector);t(r,o,n),r.forEach((function(c){c.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove("popup__input-error_active"),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add("popup__input-error_active")}(e,t,t.validationMessage,n)}(e,c,n),t(r,o,n)}))}))}(n,e)}))}(I),Promise.all([d,p]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];S=o._id,O.src=o.avatar,j.textContent=o.name,P.textContent=o.about,c.forEach((function(e){N.append(h(e))}))})).catch((function(e){console.log(e)})),T.addEventListener("click",(function(){n(g),t([g.querySelector(I.inputSelector)],g.querySelector(I.submitButtonSelector),I)})),B.addEventListener("click",(function(){n(E),function(e,t,n,r){e.value=n.textContent,t.value=r.textContent;var o=new Event("input");e.dispatchEvent(o),t.dispatchEvent(o)}(k,L,j,P)})),D.addEventListener("click",(function(){n(C),t([x,A],C.querySelector(I.submitButtonSelector),I)})),q.forEach((function(e){e.addEventListener("click",(function(){r(e.closest(".popup"))}))})),g.addEventListener("submit",(function(e){var t;e.preventDefault(),_(!0,g),(t=document.querySelector("#popup-avatar-link").value,fetch("".concat(a.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:t})}).then((function(e){return u(e)}))).then((function(t){O.src=t.avatar,r(g),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){_(!1,g)}))})),E.addEventListener("submit",(function(e){var t,n;e.preventDefault(),_(!0,E),(t=k.value,n=L.value,fetch("".concat(a.baseUrl,"/users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return u(e)}))).then((function(e){var t,n,o,c;t=j,n=e.name,o=P,c=e.about,t.textContent=n,o.textContent=c,r(E)})).catch((function(e){console.log(e)})).finally((function(){_(!1,E)}))})),C.addEventListener("submit",(function(e){var t,n;e.preventDefault(),_(!0,C),(t=x.value,n=A.value,fetch("".concat(a.baseUrl,"/cards"),{method:"POST",headers:a.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return u(e)}))).then((function(t){N.prepend(h(t)),r(C),e.target.reset()})).catch((function(e){console.log(e)})).finally((function(){_(!1,C)}))})),w.addEventListener("submit",(function(e){var t;e.preventDefault(),_(!0,w,"Удаление..."),(t=l,fetch("".concat(a.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:a.headers}).then((function(e){return u(e)}))).then((function(){s.remove(),r(w)})).catch((function(e){console.log(e)})).finally((function(){_(!1,w)}))}))})();