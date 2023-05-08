const ratingButtons = document.querySelectorAll('.rating-btn button');
const ratingStatement = document.getElementById('rating-statement');

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    // remove the "selected" class from all buttons
    ratingButtons.forEach(btn => btn.classList.remove('selected'));

    // add the "selected" class to the clicked button
    button.classList.add('selected');

    // get the selected rating value
    const ratingValue = button.textContent;

    // update the rating statement
    ratingStatement.textContent = `You've selected ${ratingValue} out of five.`;
  });
});
