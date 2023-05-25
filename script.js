const mainDiv = document.querySelector('.main-div');
const thankYouDiv = document.querySelector('.thank-you-div');
const submitBtn = document.querySelector('.submit-btn');
const ratingLinks = document.querySelectorAll('.rate-btn a');
let selectedRating = null;

ratingLinks.forEach((link, index) => {
  link.addEventListener('click', () => selectedRating = index + 1);
});

submitBtn.addEventListener('click', () => {
  if (selectedRating) {
    mainDiv.style.display = 'none';
    thankYouDiv.style.display = 'flex';
    document.querySelector('.thank-you-div span').textContent = `You selected ${selectedRating} out of 5`;
  }
});
