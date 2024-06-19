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

  const ratingError = document.getElementById("ratingError");
  const feedbackError = document.getElementById("feedbackError");
  const emailError = document.getElementById("emailError");

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

  return valid;
}
