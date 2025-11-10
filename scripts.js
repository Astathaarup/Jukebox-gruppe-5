function validatePhoneNumber() {
  const input = document.getElementById('phoneInput');
  const button = document.getElementById('submitButton');

  // kun tal
  input.value = input.value.replace(/\D/g, '');

  // tænd for knap når der er otte tal
  button.disabled = input.value.length !== 8;
}

function goToNextPage() {
  window.location.href = "https://mobilepay.dk/send-penge";
}