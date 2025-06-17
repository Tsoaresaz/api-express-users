# Release Notes

## [2.1.0] - 2025-06-17

### Adicionado

- Implementadas as requisições `PUT` e `DELETE` na rota `/api/v2/usuarios`.
  - `PUT /api/v2/usuarios/:id`: Atualiza os dados de um usuário existente no banco MySQL.
  - `DELETE /api/v2/usuarios/:id`: Remove um usuário do banco MySQL.

## [2.0.0] - 2025-06-16

### Adicionado

- Conexão com banco de dados MySQL.
- Implementadas as requisições `GET` e `POST` na rota `/api/v2/usuarios`.

## [1.1.0] - 2025-06-11

### Adicionado

- Middleware para mascaramento de e-mail nas respostas da API.

## [1.0.1] - 2025-06-11

### Ajustado

- Ajustado o controle de emissão da stack de erro para suprimir detalhes quando a variável de ambiente `.env` estiver configurada como `production`.

## [1.0.0] - 2025-06-11

### Adicionado

- CRUD completo na rota de usuários.
- Rotas de login para geração de token JWT de desenvolvimento (mock).
