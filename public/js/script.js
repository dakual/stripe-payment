// Show a spinner on payment processing
function setLoading(isLoading) {
  if (isLoading) {
      // Disable the button and show a spinner
      payBtn.disabled = true;
      document.querySelector("#spinner").classList.remove("hidden");
      document.querySelector("#buttonText").classList.add("hidden");
  } else {
      // Enable the button and hide spinner
      payBtn.disabled = false;
      document.querySelector("#spinner").classList.add("hidden");
      document.querySelector("#buttonText").classList.remove("hidden");
  }
}