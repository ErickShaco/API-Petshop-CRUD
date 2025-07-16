# Convenções de Nomenclatura e Estrutura do Projeto

Este documento define as principais convenções para manter o código organizado, legível e padronizado.

## 1. Nomes de Arquivos
- Use **kebab-case** (letras minúsculas e hífens).
- Exemplo: `animal.controller.js`, `database.js`, `index.js`

## 2. Variáveis de Ambiente
- Use **UPPERCASE** com underscores.
- Exemplo: `DATABASE_URL`, `API_KEY`, `PORTA`

## 3. Classes
- Use **PascalCase**.
- Exemplo:
  ```js
  class AnimalController {}
  class AnimalModel {}
  ```

## 4. Variáveis e Funções
- Use **camelCase**.
- Exemplo:
  ```js
  let listaAnimais;
  function buscarDadosApi() {}
  ```

## 5. Constantes
- Use **UPPERCASE** com underscores.
- Exemplo:
  ```js
  const TEMPO_LIMITE = 3000;
  ```

## 6. Rotas
- Use nomes no plural e em português.
- Exemplo: `/animais`, `/animais/cadastrar`, `/animais/atualizar/:id`

## 7. Controllers
- Nomeie arquivos como `animal.controller.js`.
- Métodos devem ser estáticos e descritivos: `listarTodos`, `cadastrar`, `editar`, `deletarPorId`.

## 8. Models
- Nomeie arquivos como `animal.model.js`.
- Métodos devem ser estáticos e descritivos: `cadastrar`, `editar`, `deletarTodos`.

## 9. Comentários
- Use comentários em português para explicar trechos importantes.
- Exemplo:
  ```js
  // Método para cadastrar um novo animal
  ```

## 10. Estrutura de Pastas
- Separe controllers, models e rotas em subpastas dentro de `src/modules/<modulo>`.
- Exemplo:
  ```
  src/modules/animal/controllers/animal.controller.js
  src/modules/animal/models/animal.model.js
  src/modules/animal/routes/animal.route.js
  ```

---
Siga estas convenções para facilitar a manutenção e colaboração no projeto.
