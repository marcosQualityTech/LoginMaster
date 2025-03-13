# LOGINMASTER - Documento Orientado por Cenários e Plano de Implementações e Testes

## **Visão Geral**
Dando sequência à apresentação do LoginMaster, este documento detalha os cenários de uso, plano de implementação e plano de testes. O foco é demonstrar como as funcionalidades mapeadas no projeto são transformadas em fluxos claros, validações robustas e estratégias de qualidade para garantir uma aplicação segura e funcional.

---

## **Cenários de Uso**

### **Cenário 1: Login de Usuário**
1. **Como**: Um usuário registrado no sistema.
2. **Quero**: Autenticar-me fornecendo credenciais válidas (e-mail e senha).
3. **Para**: Acessar minha conta na aplicação.
4. **Caminho Principal**:
  - Usuário acessa a tela de login.
  - Insere e-mail e senha nos campos correspondentes.
  - Clica no botão "Login".
  - Sistema verifica credenciais no `users.json`:
    - **Se válidas**: Login bem-sucedido.
    - **Se inválidas**: Exibe mensagem "Credenciais inválidas. Verifique e tente novamente."
    - **Se usuário não cadastrado**: Exibe pop-up com as opções "Fechar" e "Cadastrar".
5. **Resultados Esperados**:
   - Mensagens de erro claras em caso de falha.
   - Pop-up funcional e intuitiva para cadastro.

---

### **Cenário 2: Cadastro de Usuário**
1. **Como**: Um novo usuário.
2. **Quero**: Cadastrar-me no sistema preenchendo um formulário.
3. **Para**: Ter acesso à aplicação.
4. **Caminho Principal**:
  - Acessa a tela de cadastro.
  - Preenche os campos obrigatórios: Nome, Sobrenome, CPF, E-mail, Telefone, Senha, Confirmar Senha.
  - Clica no botão "Cadastrar".
  - Sistema valida os dados:
    - **Se válidos**: Dados são salvos no `users.json`, e exibe pop-up "Cadastro realizado com sucesso."
    - **Se inválidos**: Exibe mensagens de erro específicas para cada campo.
5. **Resultados Esperados**:
   - Feedback visual claro.
   - Formulário limpo após o sucesso.

---

### **Cenário 3: Navegação entre Login e Cadastro**
1. **Como**: Um usuário.
2. **Quero**: Alternar entre as telas de login e cadastro.
3. **Para**: Ter flexibilidade na interação com o sistema.
4. **Caminho Principal**:
  - Usuário clica em "Não tem uma conta? Cadastre-se" na tela de login.
  - Sistema redireciona para a tela de cadastro.
  - Usuário clica em "Já tem uma conta? Faça login" na tela de cadastro.
  - Sistema redireciona para a tela de login.
5. **Resultados Esperados**:
   - Campos e mensagens são limpos ao alternar telas.
   - Foco no primeiro campo do formulário exibido.

---

## **Plano de Implementações**

### **1. Regras de Mensagens de Erro**
- **Estilo**:
  - **Borda**: Sólida com `1px red` no campo com erro.
  - **Texto**:
    - Cor: Vermelha.
    - Tamanho: `14px`.
  - **Localização**:
    - Mensagem posicionada diretamente **abaixo do respectivo campo**.

---

### **2. Validações no Cadastro**

#### **Campo CPF**
- **Regras**:
  - Formato numérico com 11 dígitos (com ou sem máscara `XXX.XXX.XXX-XX`).
  - Validação por algoritmo de CPF.
  - Unicidade: Não pode ser duplicado no `users.json`.
  - Mensagens de erro:
    - "O CPF é obrigatório."
    - "Formato de CPF inválido. Insira um CPF válido."
    - "Este CPF já está cadastrado."
    
#### **Campo E-mail**
- **Regras**:
  - Deve seguir o formato válido (ex.: `usuario@exemplo.com`).
  - Será tratado como **lowercase** internamente no sistema:
    - Exemplo: `marcos@teste.com` e `MARCOS@TESTE.COM` serão armazenados como `marcos@teste.com` e tratados como iguais.
  - Unicidade: Não pode ser duplicado no `users.json`.
  - Mensagens de erro:
    - "O e-mail é obrigatório."
    - "Formato de e-mail inválido."
    - "Este e-mail já está cadastrado."

#### **Campo Telefone**
- **Regras**:
  - Formato padrão nacional/internacional (ex.: `+55 51 99999-9999`).
  - Unicidade: Não pode ser duplicado no `users.json`.
  - Mensagens de erro:
    - "O telefone é obrigatório."
    - "Formato de telefone inválido."
    - "Este número de telefone já está cadastrado."

#### **Campo Senha**
- **Regras de Validação**:
  - As regras são exibidas como uma lista **não ordenada** enquanto o campo "Senha" está em foco.
  - Cada item da lista que ainda **não foi atendido** deve ser destacado com texto vermelho.
  - Quando uma regra é atendida, o item correspondente deve desaparecer da lista.
  - Se uma regra previamente atendida deixar de ser cumprida, ela deve **reaparecer em vermelho** na lista.
  - Regras:
    - Pelo menos 6 caracteres.
    - Uma letra maiúscula.
    - Uma letra minúscula.
    - Um número.
    - Um caractere especial (ex.: `@, #, $, etc.`).
- **Estilo da Lista**:
  - **Itens não atendidos**:
    - Cor do texto: Vermelha.
    - Tamanho do texto: `14px`.
    - Fonte: Regular.
  - **Itens atendidos**: Não são exibidos na lista.
  - **Localização**:
    - Lista posicionada diretamente abaixo do campo "Senha".

#### **Campo Confirmar Senha**
- **Regras**:
  - Deve corresponder ao campo de senha.
  - Mensagem de erro:
    - "As senhas não coincidem."

---

## **Casos de Teste Atualizados - Cadastro**

1. Cadastro com todos os campos válidos.
2. CPF com formato inválido.
3. CPF em branco.
4. CPF duplicado.
5. E-mail com formato inválido.
6. E-mail em branco.
7. **E-mail duplicado**:
   - Certificar-se de que o sistema verifica duplicidade de e-mails tratados como **case-insensitive** (ex.: `usuario@exemplo.com` e `USUARIO@EXEMPLO.COM` devem ser considerados iguais).
   - Validar que o sistema converte o e-mail para **lowercase** antes de armazenar ou comparar no `users.json`.
   - Resultado esperado:
     - Mensagem de erro exibida: "Este e-mail já está cadastrado."
     - O cadastro não deve ser concluído.
8. Telefone com formato inválido.
9. Telefone em branco.
10. Telefone duplicado.
11. Senha fora das regras (ex.: sem número ou caractere especial).
12. Confirmação de senha diferente.
13. Todos os campos obrigatórios em branco.

---

## **Conclusão**
Com a inclusão de validações e regras específicas para mensagens de erro, e melhorias no tratamento de dados como CPF, e-mail e telefone, o LOGINMASTER reflete um sistema robusto e seguro. Este documento serve como base sólida para implementação e validação, garantindo uma experiência confiável e intuitiva para os usuários. 🚀
