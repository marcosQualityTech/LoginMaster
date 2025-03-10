// Alternar para o formulário de cadastro
document.getElementById('toggle-signup').addEventListener('click', function () {
    // Oculta o formulário de login
    document.getElementById('login-form').style.display = 'none';
    // Exibe o formulário de cadastro
    document.getElementById('signup-form').style.display = 'block';
});

// Alternar para o formulário de login
document.getElementById('toggle-login').addEventListener('click', function () {
    // Oculta o formulário de cadastro
    document.getElementById('signup-form').style.display = 'none';
    // Exibe o formulário de login
    document.getElementById('login-form').style.display = 'block';
});