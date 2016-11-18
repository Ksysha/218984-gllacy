var link = document.querySelector(".feedback");
var popupFeedback = document.querySelector(".popup-feedback");
var close = popupFeedback.querySelector(".exit");
var overlay = document.querySelector(".overlay");
var nameFeedback = popupFeedback.querySelector("[name=feedback-name]");
var emailFeedback = popupFeedback.querySelector("[name=feedback-email]");
var message = popupFeedback.querySelector("[name=user-message]");
var form = popupFeedback.querySelector("form");
var storageEmail = localStorage.getItem("email");
var storageName = localStorage.getItem("name");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popupFeedback.classList.add("popup-feedback-show");
  overlay.style.display = "block";
  if (storageName && storageEmail) {
    nameFeedback.value = storageName;
    emailFeedback.value = storageEmail;
    message.focus();
  } else {
    if (storageName) {
      nameFeedback.value = storageName;
      emailFeedback.focus();
    }
     else {
      emailFeedback.value = storageEmail;
      nameFeedback.focus();
    }
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popupFeedback.classList.remove("popup-feedback-show", "popup-feedback-error");
  overlay.style.display = "none";
});

form.addEventListener("submit", function(event) {
  if (!nameFeedback.value || !emailFeedback.value || !message.value) {
    event.preventDefault();
    popupFeedback.classList.add("popup-feedback-error");
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
  } else {
    localStorage.setItem("email", emailFeedback.value);
    localStorage.setItem("name", nameFeedback.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popupFeedback.classList.contains("popup-feedback-show")) {
      popupFeedback.classList.remove("popup-feedback-show", "popup-feedback-error");
      overlay.style.display = "none";
      popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    }
  }
});
