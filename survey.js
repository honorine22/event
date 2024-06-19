document.addEventListener("DOMContentLoaded", () => {});

function clearError(errorId) {
    document.getElementById(errorId).textContent = "";
}

function validateForm() {
    let valid = true;

    const rating = document.getElementById('rating').value;

    const ratingError = document.getElementById('ratingError');

    ratingError.textContent = '';

    const feedbackPattern = /^[a-zA-Z0-9\s]+$/;
    if (!feedbackPattern.test(feedback)) {
        feedbackError.textContent = 'Feedback is required.';
        valid = false;
    }

    if (rating < 1 || rating > 5) {
        ratingError.textContent = 'Rating is required';
        valid = false;
    }
    return valid;
}