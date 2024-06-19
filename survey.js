document.addEventListener("DOMContentLoaded", () => {
  const age = document.getElementById("age");
  const email = document.getElementById("email");
  const feedback = document.getElementById("feedback");
  const rating = document.getElementById("rating");
  const surveyDate = document.getElementById("surveyDate");

  age.addEventListener("input", () => clearError("ageError"));
  email.addEventListener("input", () => clearError("emailError"));
  feedback.addEventListener("input", () => clearError("feedbackError"));
  rating.addEventListener("input", () => clearError("ratingError"));
  surveyDate.addEventListener("input", () => clearError("surveyDateError"));
});

function clearError(errorId) {
  document.getElementById(errorId).textContent = "";
}

function validateForm() {
  let valid = true;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const feedback = document.getElementById("feedback").value;
  const rating = document.getElementById("rating").value;
  const surveyDate = document.getElementById("surveyDate").value;

  const ageError = document.getElementById("ageError");
  const emailError = document.getElementById("emailError");
  const feedbackError = document.getElementById("feedbackError");
  const ratingError = document.getElementById("ratingError");
  const surveyDateError = document.getElementById("surveyDateError");

  // Clear previous errors
  ageError.textContent = "";
  emailError.textContent = "";
  feedbackError.textContent = "";
  ratingError.textContent = "";
  surveyDateError.textContent = "";

  // Validate Age
  if (age < 18 || age > 100) {
    ageError.textContent = "Age must be between 18 and 100.";
    valid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  }

  // Validate Feedback
  const feedbackPattern = /^[a-zA-Z0-9\s]+$/;
  if (!feedbackPattern.test(feedback)) {
    feedbackError.textContent =
      "Feedback should not contain special characters.";
    valid = false;
  }

  // Validate Rating
  if (rating < 1 || rating > 5) {
    ratingError.textContent = "Rating must be between 1 and 5.";
    valid = false;
  }

  // Validate Survey Date
  const datePattern = /^\d{2}-\d{2}-\d{4}$/;
  if (!datePattern.test(surveyDate)) {
    surveyDateError.textContent = "Date must be in DD-MM-YYYY format.";
    valid = false;
  }

  return valid;
}
