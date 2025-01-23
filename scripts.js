const emailForm = document.querySelector(".emailForm");
const emailInput = document.getElementById("email");
const emailLabel = document.getElementById("emailLabel");


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value;

    if (isValidEmail(emailValue)) {
      emailInput.classList.add("valid");
      emailInput.classList.remove("invalid");
    } else {
      emailInput.classList.add("invalid");
      emailInput.classList.remove("valid");
    }
  });


  emailForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const emailValue = emailInput.value;

    let existingError = document.querySelector(".error-message");

    if (emailValue === "") {
        if (!existingError) {
          // Create a new error message if one doesn't already exist
          const errorMessage = document.createElement("p");
          errorMessage.textContent = "Email is required"
          errorMessage.classList.add("error-message");
          emailLabel.appendChild(errorMessage);
        }
      } else {
        // Remove the error message if the input is valid
        if (existingError) {
          existingError.remove();
        }
        console.log("success submit");
        window.location.href = "thanks.html";
      }
  });