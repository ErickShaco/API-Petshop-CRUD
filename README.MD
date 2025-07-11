# Petshop API

API simples para gerenciamento de animais em um petshop.

## Dependências necessárias
- express
- dotenv

Instale com:
```
npm install express dotenv
```

## Como executar

1. Instale as dependências:
   ```
   npm install
   ```
2. Configure o arquivo `.env` com a porta desejada:
   ```
   PORTA=3001
   ```
3. Inicie o servidor:
   ```
   node index.js
   ```

## Principais rotas
- `GET /animais` — Lista todos os animais
- `GET /animais/:id` — Lista um animal pelo id
- `POST /animais/cadastrar` — Cadastra um novo animal
- `PATCH /animais/atualizar/:id` — Atualiza um animal
- `DELETE /animais/deletar` — Remove todos os animais
- `DELETE /animais/deletar/:id` — Remove um animal pelo id

## Estrutura
- `src/modules/animal/controllers` — Lógica das rotas
- `src/modules/animal/models` — Manipulação dos dados
- `src/modules/animal/routes` — Definição das rotas

---
Siga as convenções do projeto para facilitar a colaboração.
