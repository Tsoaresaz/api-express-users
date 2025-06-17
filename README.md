# Minha primeira API com NodeJS e Express

Criando minha primeira API NodeJS com Express

## Starting do projeto

Para inciar o projeto execute a instalações das bibliotecas

```http
npm install
```

Após a instalação execute o projeto no modo de desenvolvimento:

```http
npm run dev
```

## Rotas da API

### 🚀 Versão 1 (/api/v1/usuarios)

Fonte de dados: Arquivo JSON localizado em `/src/config/db.json`.

GET - Listar todos os usuários

```http
GET /api/v1/usuarios HTTP/1.1
Host: localhost:3000
```

POST - Criar um novo usuário

```http
POST /api/v1/usuarios HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "nome": "Thiago",
  "email": "thiago@email.com"
}

```

PUT - Atualizar um usuário existente

```http
PUT /api/v1/usuarios/1 HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "nome": "Thiago Atualizado",
  "email": "novoemail@email.com"
}

```

DELETE - Deletar um usuário

```http
DELETE /api/v1/usuarios/1 HTTP/1.1
Host: localhost:3000
```

### 🚀 Versão 2 (/api/v2/usuarios)

Fonte de dados: Banco de dados MySQL.

GET - Listar todos os usuários

```http
GET /api/v1/usuarios HTTP/1.1
Host: localhost:3000
```

POST - Criar um novo usuário

```http
POST /api/v1/usuarios HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "nome": "Thiago",
  "email": "thiago@email.com"
}

```

PUT - Atualizar um usuário existente

```http
PUT /api/v1/usuarios/1 HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "nome": "Thiago Atualizado",
  "email": "novoemail@email.com"
}
```

DELETE - Deletar um usuário

```http
DELETE /api/v1/usuarios/1 HTTP/1.1
Host: localhost:3000
```

### Observações

- A versão v1 utiliza um arquivo local (db.json) para armazenamento de dados.

- A versão v2 realiza operações reais em um banco de dados MySQL.

- Para a versão v2, certifique-se de que o MySQL está configurado corretamente no arquivo de conexão.

### Dependências Principais

- Node.js

- Express

- MySQL2 (para a versão v2)

- Nodemon (para ambiente de desenvolvimento)

### Licença

Esse projeto está licenciado sob a licença MIT.
