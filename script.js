function handlePasswordShown() {
    let input = document.getElementById("password");
    let eyeIcon = document.getElementById("eye");
    if (input.type === "text") {
      input.type = "password";
      eyeIcon.removeAttribute("class", "fa-eye-slash");
      eyeIcon.setAttribute("class", "fa-eye");
    } else if (input.type === "password") {
      input.type = "text";
      eyeIcon.removeAttribute("class", "fa-eye");
      eyeIcon.setAttribute("class", "fa-eye-slash");
    }
  }
  
  function handleSubmit() {
    let usernameInput = document.getElementById("username");
    let passwordInput = document.getElementById("password");
    alert(usernameInput.value + " - " + passwordInput.value);
  }
  