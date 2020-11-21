const emailInput = document.querySelector(".email");
const errorMessage = document.querySelector(".error-message");
const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

function validate(email, regex) {
  if (regex.test(email.value)) {
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
  }
}

emailInput.addEventListener("keyup", (e) => {
  validate(e.target, emailRegex);
  if (e.target.value === "") {
    errorMessage.style.display = "none";
  }
});
