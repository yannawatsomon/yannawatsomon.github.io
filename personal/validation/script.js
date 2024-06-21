const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const submitError = document.getElementById("submit-error");
const submitButton = document.getElementById("submit-button");

function validateName() {
  let name = document.getElementById("input-name").value;
  if (name.length == 0) {
    nameError.style.color = "red";
    nameError.innerHTML = "Name required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.style.color = "red";
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "valid";
  nameError.style.color = "green";
  return true;
}

function validatePhone() {
  let phone = document.getElementById("input-phone").value;

  if (phone.length == 0) {
    phoneError.style.color = "red";
    phoneError.innerHTML = "Phone is required";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.style.color = "red";
    phoneError.innerHTML = "Phone no. should be 10 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.style.color = "red";
    phoneError.innerHTML = "Phone no. is required";
    return false;
  }

  phoneError.style.color = "green";
  phoneError.innerHTML = "valid";
  return true;
}

function validateEmail() {
  let email = document.getElementById("input-email").value;

  if (email.length == 0) {
    emailError.style.color = "red";
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.style.color = "red";
    emailError.innerHTML = "Email invalid";
    return false;
  }

  emailError.style.color = "green";
  emailError.innerHTML = "valid";
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Plsease fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  } else {
    submitError.style.color = "green";
    submitError.innerHTML = "Submit!";
    return true;
  }
}

submitButton.addEventListener("click", () => {
  return validateForm();
});
