document.getElementById("submit-btn").addEventListener("click", function() {
    document.getElementById("first-container").style.display = "none";
    document.getElementById("second-container").style.display = "block";
  });

  let currentRating = 0;
  const ratingButtons = document.querySelectorAll('.rating-btn button');
  ratingButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentRating = index + 1;
    });
  });

  const submitButton = document.getElementById('submit-btn');
const ratingStatement = document.getElementById('rating-statement');
submitButton.addEventListener('click', () => {
  if (currentRating > 0) {
    ratingStatement.textContent = `You selected ${currentRating} out of 5`;
  }
});

const ratingBtn = document.querySelectorAll('.rating-btn button');
let currentRtn = 0;

ratingBtn.forEach((button) => {
    button.addEventListener('click', () => {
        ratingBtn.forEach((otherButton) => {
            otherButton.classList.remove('orange');
        });

        button.classList.add('orange');
        currentRtn = parseInt(button.textContent);

    });
});