// Get the modal
var modal = document.getElementById("learnMoreModal");

// Get the button that opens the modal
var btn = document.getElementById("learnMoreBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeModal");

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.querySelector(".booking-form");
  const confirmationMessage = document.getElementById("booking-confirmation");

  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop the form from refreshing the page

    confirmationMessage.style.display = "block"; // Show confirmation message
    bookingForm.reset(); // Optional: clear the form

    // Hide message after 4 seconds (optional)
    setTimeout(() => {
      confirmationMessage.style.display = "none";
    }, 4000);
  });
});
