document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    console.log(email, password, confirmPassword);

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // Simuler une inscription
    if (email.endsWith("@laplateforme.io")) {
      alert("Inscription réussie!");
      window.location.href = "login.html";
    } else {
      alert("Seuls les membres de La Plateforme_ peuvent s'inscrire.");
    }
  });
