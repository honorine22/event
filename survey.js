document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rate").addEventListener("input", clearRatingError);
  document
    .getElementById("feedback")
    .addEventListener("input", clearFeedbackError);
  document.getElementById("email").addEventListener("input", clearEmailError);

  const rating = document.getElementById("rating");

  rating.addEventListener("input", () => clearError("ratingError"));
});

function clearError(errorId) {
  document.getElementById(errorId).textContent = "";
}

function clearRatingError() {
  const rate = document.getElementById("rate").value;
  const ratingError = document.getElementById("ratingError");
  if (rate >= 1 && rate <= 5) {
    clearError("ratingError");
  }
}

function clearFeedbackError() {
  const feedback = document.getElementById("feedback").value;
  const feedbackError = document.getElementById("feedbackError");
  const feedbackPattern = /^[a-zA-Z0-9\s]+$/;
  if (feedbackPattern.test(feedback)) {
    clearError("feedbackError");
  }
}

function clearEmailError() {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    clearError("emailError");
  }
}

function validateForm() {
  let valid = true;

  const rate = document.getElementById("rate").value;
  const feedback = document.getElementById("feedback").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("surveyDate").value;

  const ratingError = document.getElementById("ratingError");
  const feedbackError = document.getElementById("feedbackError");
  const emailError = document.getElementById("emailError");
  const dateError = document.getElementById("surveyDateError");

  ratingError.textContent = "";
  feedbackError.textContent = "";
  emailError.textContent = "";

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email address.";
    valid = false;
  }

  const feedbackPattern = /^[a-zA-Z0-9\s]+$/;
  if (!feedbackPattern.test(feedback)) {
    feedbackError.textContent =
      "Feedback can only contain letters, numbers, and spaces.";
    valid = false;
  }

  if (rate < 1 || rate > 5) {
    ratingError.textContent = "Rating is required and must be between 1 and 5.";
    valid = false;
  }

  const datePattern = /^(?:(?:19|20)\d{2})-(?:(?:(?:0[13578]|1[02])-(?:0[1-9]|[12][0-9]|3[01]))|(?:(?:0[469]|11)-(?:0[1-9]|[12][0-9]|30))|(?:02-(?:0[1-9]|1[0-9]|2[0-8]))|(?:02-29))$/
  if (!datePattern.test(date)) {
    dateError.textContent = "Date is required and must be in the format YYYY-MM-DD.";
    valid = false;
  }



  return valid;
}
