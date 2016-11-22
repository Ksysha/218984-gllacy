var link = document.querySelector(".feedback");

var feedbackForm = document.querySelector(".popup-feedback");
var close = feedbackForm.querySelector(".exit");
var feedbackFormOverlay = document.querySelector(".popup-feedback-overlay");
var nameFeedback = feedbackForm.querySelector("[name=feedback-name]");
var emailFeedback = feedbackForm.querySelector("[name=feedback-email]");
var nameFeedbackLabel = feedbackForm.querySelector("[for=feedback-name]");
var emailFeedbackLabel = feedbackForm.querySelector("[for=feedback-email]");
var message = feedbackForm.querySelector("[name=user-message]");
var storageEmail = localStorage.getItem("email");
var storageName = localStorage.getItem("name");

link.addEventListener("click", function(event) {
  event.preventDefault();

  feedbackForm.classList.add("popup-show");
  feedbackFormOverlay.classList.add("popup-show");

  if (storageName && storageEmail) {
    nameFeedback.value = storageName;
    emailFeedback.value = storageEmail;
    emailFeedbackLabel.classList.add("change-label");
    nameFeedbackLabel.classList.add("change-label");
    message.focus();
  } else {
    if (storageName) {
      nameFeedback.value = storageName;
      nameFeedbackLabel.classList.add("change-label");
      emailFeedback.focus();
    }
     else if (storageEmail) {
      emailFeedback.value = storageEmail;
      emailFeedbackLabel.classList.add("change-label");
      nameFeedback.focus();
    }
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackForm.classList.remove("popup-show", "popup-feedback-error");
  feedbackFormOverlay.classList.remove("popup-show");
});

feedbackForm.addEventListener("submit", function(event) {
  if (!nameFeedback.value || !emailFeedback.value || !message.value) {
    event.preventDefault();
    feedbackForm.classList.add("popup-feedback-error");
  } else {
    localStorage.setItem("email", emailFeedback.value);
    localStorage.setItem("name", nameFeedback.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackForm.classList.contains("popup-show")) {
      feedbackForm.classList.remove("popup-show", "popup-feedback-error");
      feedbackFormOverlay.classList.remove("popup-show");
      feedbackForm.offsetWidth = feedbackForm.offsetWidth;
    }
  }
});

function onchageName() {
  if (nameFeedback.value != '') {
    nameFeedbackLabel.classList.add("change-label");
  } else {
    nameFeedbackLabel.classList.remove("change-label");
  }
};

function onchageEmail() {
  if (emailFeedback.value != '') {
    emailFeedbackLabel.classList.add("change-label");
  } else {
    emailFeedbackLabel.classList.remove("change-label");
  }
};

nameFeedback.addEventListener("change", onchageName);

emailFeedback.addEventListener("change", onchageEmail);
