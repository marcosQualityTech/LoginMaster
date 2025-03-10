const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos da pasta "src"
app.use(express.static(path.join(__dirname, '../src')));

// Rota para a página inicial de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/frontend/login.html'));
});

// Rota para a página de cadastro
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/frontend/signup.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://127.0.0.1:${PORT}`);
});
