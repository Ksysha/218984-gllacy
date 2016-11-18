var link = document.querySelector(".feedback");

var feedbackForm = $(".popup-feedback");
var feedbackFormOverlay = $(".popup-feedback-overlay");
var close = feedbackForm.find(".exit");
var nameFeedback = feedbackForm.find("input[name=feedback-name]");
var emailFeedback = feedbackForm.find("input[name=feedback-email]");
var message = feedbackForm.find("textarea[name=user-message]");

link.addEventListener("click", function(event) {
  event.preventDefault();

  feedbackForm.addClass("popup-show");
  feedbackFormOverlay.addClass("popup-show");

  feedbackForm.find('input, textarea').filter(function() {
    return this.value === '';
  }).first().focus();
});

close.on("click", function(event) {
  event.preventDefault();
  feedbackForm.removeClass("popup-show popup-feedback-error");
  feedbackFormOverlay.removeClass("popup-show");
});

feedbackForm.on("submit", function(event) {
  if (!nameFeedback.val() || !emailFeedback.val() || !message.val()) {
    event.preventDefault();
    feedbackForm.addClass("popup-feedback-error");
  } else {
    localStorage.setItem("email", emailFeedback.value);
    localStorage.setItem("name", nameFeedback.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackForm.hasClass("popup-show")) {
      feedbackForm.removeClass("popup-show", "popup-feedback-error");
      feedbackFormOverlay.removeClass("popup-show");
    }
  }
});

var storageEmail = localStorage.getItem("email");
var storageName = localStorage.getItem("name");

nameFeedback.val(storageName);
emailFeedback.val(storageEmail);

var feedbackInputs = $(feedbackForm).find("input");
feedbackInputs.on("change", function() {
  var label = $(this).next('label');
  if (this.value != '') {
    label.addClass("change-label");
  } else {
    label.removeClass("change-label");
  }
});
$.each(feedbackInputs, function(i, element) {
  $(element).triggerHandler("change");
})
