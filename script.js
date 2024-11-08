// Form submission
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Simple form validation
  const name = document.getElementById('name').value;
  const contact = document.getElementById('parent-contact').value;

  if (name === "" || contact === "") {
    alert("Please fill in all required fields.");
    return;
  }

  alert("Registration successful! Thank you for joining the program.");
});
