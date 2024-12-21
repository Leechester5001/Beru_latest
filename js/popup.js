// Show popup on page load
window.onload = function () {
  const popup = document.getElementById('popup');
  const closeButton = document.getElementById('closeButton');

  // Show the popup
  popup.style.display = 'block';

  // Close the popup when the button is clicked
  closeButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });
};
