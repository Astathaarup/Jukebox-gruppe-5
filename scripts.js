function validatePhoneNumber() {
  const input = document.getElementById('phoneInput');
  const button = document.getElementById('submitButton');

  // Remove non-digit characters
  input.value = input.value.replace(/\D/g, '');

  // Enable button only if input is exactly 8 digits
  button.disabled = input.value.length !== 8;
}

function goToNextPage() {
  window.location.href = "https://youtube.com"; // Replace with your actual URL
}