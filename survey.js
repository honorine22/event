document.addEventListener("DOMContentLoaded", () => {});

function clearError(errorId) {
  document.getElementById(errorId).textContent = "";
}

function validateForm() {
  let valid = true;

  const rating = document.getElementById('rating').value;

  const ratingError = document.getElementById('ratingError');

  ratingError.textContent = '';

  if (rating < 1 || rating > 5) {
    ratingError.textContent = 'Rating is required';
    valid = false;
}
  return valid;
}
