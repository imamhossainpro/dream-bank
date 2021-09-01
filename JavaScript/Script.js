// User Login Page Start
document
  .getElementById("form-login-button")
  .addEventListener("click", function () {
    //   Get User Email
    const emailInput = document.getElementById("email-input");
    const userEmail = emailInput.value;
    // Get User Password
    const passwordInput = document.getElementById("password-input");
    const userPassword = passwordInput.value;
    // User Login Conditions
    if (userEmail === "imam" && userPassword === "imam") {
      window.location.href = "/banking.html";
    }
  });
//   User Login Page End
