const express = require('express');
const app = express();
const port = 3000;

// Importa o "banco de dados"
const db = require('./data/data');

// Middleware para permiri JSON no body das requisições
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Olá, mundo! Esta é minha primeira API com Node.js!');
});

app.get('/usuarios', (req, res) => {
  res.json(db.usuarios);
});

app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;

  const usuarioExiste = db.usuarios.find((u) => u.nome === novoUsuario.nome);

  if (usuarioExiste) {
    return res.status(400).json({ message: 'Usuário com esse nome já existe' });
  }

  novoUsuario.id = db.usuarios.length + 1;
  console.log('Usuário recebido: ', novoUsuario);
  db.usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

app.put('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const body = req.body;
  const index = db.usuarios.findIndex((u) => u.id === id);

  if (index !== -1) {
    db.usuarios[index].nome = body.nome;
    res.status(200).json({
      message: 'Usuário atualizado com sucesso!',
    });
    return;
  }

  res.status(404).json({ message: 'Usuário não encontrado!' });
});

app.delete('/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.usuarios.findIndex((u) => u.id === id);

  if (index !== -1) {
    const usuarioRemovido = db.usuarios.splice(index, 1);
    res.json({ message: 'Usuário removido', usuario: usuarioRemovido });
    return;
  }

  res.status(404).json({ message: 'Usuário não encontrado!' });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
