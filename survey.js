document.addEventListener("DOMContentLoaded", () => {

  const rating = document.getElementById('rating');

  rating.addEventListener('input', () => clearError('ratingError'));

});

function clearError(errorId) {
  document.getElementById(errorId).textContent = "";
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
    emailError.textContent = "Email is required.";
    valid = false;
  }

  const feedbackPattern = /^[a-zA-Z0-9\s]+$/;
  if (!feedbackPattern.test(feedback)) {
    feedbackError.textContent = "Feedback is required.";
    valid = false;
  }

  if (rate < 1 || rate > 5) {
    ratingError.textContent = "Rating is required and must be between 1 and 5.";
    valid = false;
  }

  return valid;
}
