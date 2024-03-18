// app.js
document.getElementById('login-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Connexion réussie
        document.getElementById('login-message').textContent = `Bienvenue, ${email}!`;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        document.getElementById('login-message').textContent = `Erreur: ${errorMessage}`;
    });
});
