// Authentification des utilisateurs
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');
    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        const email = document.getElementById('user-email').value;
        const password = document.getElementById('user-password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Connexion réussie
            document.getElementById('login-message').textContent = `Bienvenue, ${userCredential.user.email}!`;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById('login-message').textContent = `Erreur: ${errorMessage}`;
        });
    });
});
