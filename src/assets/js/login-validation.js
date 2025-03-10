document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const loginEmail = document.getElementById("login-email");
    const loginPassword = document.getElementById("login-password");
    const loginEmailError = document.getElementById("login-email-error");
    const loginPasswordError = document.getElementById("login-password-error");
    const popupNotRegistered = document.getElementById("popup-not-registered-overlay");
    const closePopupButton = document.getElementById("close-popup");
    const goToSignupButton = document.getElementById("go-to-signup");

    // Função para validar e-mails
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Função para verificar credenciais no arquivo users.json
    const checkCredentials = async (email, password) => {
        try {
            const response = await fetch("../data/users.json"); // Certifique-se de que o caminho está correto
            if (!response.ok) {
                throw new Error("Erro ao carregar o arquivo de usuários.");
            }
            const users = await response.json();
            return users.some(user => user.email === email && user.password === password);
        } catch (error) {
            console.error("Erro ao verificar credenciais:", error);
            return false;
        }
    };

    // Configurações iniciais para ocultar a popup
    popupNotRegistered.style.display = "none";

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        let valid = true;

        // Validação do campo de e-mail
        if (loginEmail.value.trim() === "") {
            loginEmailError.textContent = "O e-mail é obrigatório";
            loginEmail.classList.add("error");
            valid = false;
        } else if (!validateEmail(loginEmail.value.trim())) {
            loginEmailError.textContent = "Formato de e-mail inválido";
            loginEmail.classList.add("error");
            valid = false;
        } else {
            loginEmailError.textContent = "";
            loginEmail.classList.remove("error");
        }

        // Validação do campo de senha
        if (loginPassword.value.trim() === "") {
            loginPasswordError.textContent = "A senha é obrigatória";
            loginPassword.classList.add("error");
            valid = false;
        } else if (loginPassword.value.trim().length < 6) {
            loginPasswordError.textContent = "A senha deve ter no mínimo 6 caracteres";
            loginPassword.classList.add("error");
            valid = false;
        } else {
            loginPasswordError.textContent = "";
            loginPassword.classList.remove("error");
        }

        // Verificação de credenciais no arquivo JSON
        if (valid) {
            const credentialsValid = await checkCredentials(loginEmail.value.trim(), loginPassword.value.trim());
            if (!credentialsValid) {
                console.log("Usuário não cadastrado ou credenciais inválidas! Exibindo popup.");
                document.querySelector('.container').classList.add('blur'); // Escurece a tela de fundo
                popupNotRegistered.style.display = "flex";
            } else {
                console.log("Login bem-sucedido!");
                // Redirecionar ou realizar outras ações aqui
            }
        }
    });

    // Listener para o botão "Fechar"
    closePopupButton.addEventListener("click", () => {
        popupNotRegistered.style.display = "none"; // Fecha a popup
        document.querySelector('.container').classList.remove('blur'); // Remove o escurecimento da tela de fundo
        loginEmail.value = ""; // Limpa o campo de e-mail
        loginPassword.value = ""; // Limpa o campo de senha
        loginEmail.focus(); // Foca no campo de e-mail
    });

    // Listener para o botão "Cadastrar"
    goToSignupButton.addEventListener("click", () => {
        window.location.href = "../frontend/signup.html"; // Redireciona para a página de cadastro
    });

    // Listeners para limpar mensagens de erro enquanto o usuário digita
    loginEmail.addEventListener("input", () => {
        loginEmailError.textContent = "";
        loginEmail.classList.remove("error");
    });

    loginPassword.addEventListener("input", () => {
        loginPasswordError.textContent = "";
        loginPassword.classList.remove("error");
    });
});
