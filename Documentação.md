# LOGINMASTER - Sistema de Autenticação com Documentação e Automação

## **Visão Geral**
O LOGINMASTER é um sistema de autenticação criado com o objetivo de desenvolver uma aplicação segura e funcional, alinhada às melhores práticas de qualidade. Com foco na documentação detalhada e na aplicação de automações de teste, o projeto abrange desde o fluxo de login e cadastro de usuários até a validação de requisitos críticos para garantir uma experiência robusta e acessível.

---

## **Objetivo**
Proporcionar um sistema simples, claro e seguro, que demonstre expertise em testes de software e automação, além de boas práticas em documentação de projetos. Os principais objetivos incluem:
- Desenvolver e documentar um fluxo de autenticação seguro e funcional.
- Implementar automação de testes para validar e manter a qualidade do sistema.
- Utilizar ferramentas profissionais que refletem o dia a dia de um QA em projetos reais.

---

## **Estrutura do Projeto**
O projeto LOGINMASTER é estruturado para garantir modularidade, clareza e escalabilidade. A organização é a seguinte:

- **`backend/`**:
  - Lógica do servidor: `server.js`.
  - Dependências gerenciadas via `package.json`.

- **`src/`**:
  - **`assets/css/`**: Estilos globais e específicos para as páginas.
  - **`assets/images/`**: Recursos visuais para a interface.
  - **`assets/js/`**:
    - Scripts de validação: `login-validation.js` e `signup-validation.js`.
    - Lógica de autenticação: `auth.js`.

- **`frontend/`**:
  - Páginas HTML: `login.html` e `signup.html`.

- **`data/`**:
  - Simulação de banco de dados: `Users.json`.

---

## **Ferramentas Utilizadas**
- **Postman**: Para testar e validar as requisições HTTP do sistema.
- **K6**: Para realizar testes de carga e avaliar o desempenho.
- **Qase**: Para gerenciar casos, planos e execuções de teste de forma organizada.
- **Cypress e Cucumber**: Para automação de testes e cenários em Gherkin.

---

## **Funcionalidades Principais**
- **Login de Usuários**:
  - Entrada de credenciais e validação no `Users.json`.
  - Mensagens de erro personalizadas e claras.
  - Popup para cadastro de novos usuários.

- **Cadastro de Usuários**:
  - Formulário com validações (nome, CPF, e-mail, telefone, senha e confirmação de senha).
  - Regras de validação, incluindo duplicidade e padrões de formato.
  - Feedback visual para campos e validação de senha.

- **Gerenciamento de Testes com Qase**:
  - Criação de categorias, casos e planos de teste organizados.
  - Execuções de teste documentadas e relatórios gerados para análise.

---

## **Testes Manuais e Técnicas de Teste**
- **Planejamento dos Testes Manuais**:
  - **Técnicas Aplicadas**:
    - **Classes de Equivalência**: Testar grupos de entradas válidas e inválidas.
    - **Análise de Valor Limite**: Verificar os valores extremos dos campos de entrada.
    - **Testes Exploratórios**: Descobrir comportamentos inesperados no sistema.

- **Execução de Testes Manuais**:
  - Validação dos fluxos de login e cadastro.
  - Testes de API com Postman para validar endpoints do backend.

---

## **Automação de Testes**
- **Cypress**:
  - Automação dos fluxos end-to-end para login e cadastro.
  - Criação de cenários de teste em diferentes navegadores.

- **Cucumber**:
  - Uso de Gherkin para definir cenários claros e legíveis.
  - Integração com Cypress para execução de cenários automatizados.

- **K6**:
  - Testes de carga para avaliar o desempenho do sistema sob diferentes níveis de tráfego.

---

## **Diferenciais do Projeto**
- **Documentação Detalhada**:
  - Desde a concepção até a implementação, cada etapa do projeto é documentada.
  - Inclui manual do sistema, planos de teste, casos de uso e fluxos descritos.

- **Automação e Qualidade**:
  - Garantia de qualidade com testes automatizados e documentação rastreável.
  - Uso de ferramentas profissionais como Postman, K6 e Qase.

---

## **Próximos Passos**
1. **Configuração Inicial**:
   - Estruturar o repositório no GitHub.
   - Configurar o ambiente com dependências e arquivos necessários.

2. **Primeira Fase do Desenvolvimento**:
   - Criar as páginas de login e cadastro com validações iniciais.
   - Implementar a lógica de autenticação básica e comunicação com o `Users.json`.

3. **Automação de Testes**:
   - Configurar o Cypress para testes automatizados.
   - Iniciar os testes de fluxo básico com o Postman e K6.

4. **Publicação e Atualizações no LinkedIn**:
   - Compartilhar o progresso semanal, destacando os aprendizados e as ferramentas utilizadas.

---

## **Conclusão**
O projeto LOGINMASTER é mais do que um simples sistema de autenticação; ele é uma demonstração prática de preocupação com qualidade, boas práticas de desenvolvimento e automação de testes. Foi planejado para refletir a realidade de projetos no mercado e demonstrar o compromisso com soluções confiáveis e bem documentadas.
