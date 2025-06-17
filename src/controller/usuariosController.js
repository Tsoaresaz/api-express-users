const db = require('../data/data');

/**
 * @description Lista todos os registros
 * @param {*} req
 * @param {*} res
 */
exports.listarUsuarios = (req, res) => {
  res.json(db.usuarios);
};

/**
 * @description Cria um novo registro caso o mesmo nome não exista
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.criarUsuarios = (req, res) => {
  const novoUsuario = req.body;

  const usuarioExiste = db.usuarios.find((u) => u.nome === novoUsuario.nome);

  if (usuarioExiste) {
    return res.status(400).json({ message: 'Usuário com esse nome já existe' });
  }

  novoUsuario.id = db.usuarios.length + 1;
  console.log('Usuário recebido: ', novoUsuario);
  db.usuarios.push(novoUsuario);

  res.status(201).json({ message: 'Usuário criado com sucesso', novoUsuario });
};

/**
 * @description Atualiza o registro com base no ID
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.atualizarUsuarios = (req, res) => {
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
};

/**
 * @description Deleta o registro com base no ID caso exista
 * @param {*} req
 * @param {*} res
 * @returns
 */
exports.removerUsuarios = (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.usuarios.findIndex((u) => u.id === id);

  if (index !== -1) {
    const usuarioRemovido = db.usuarios.splice(index, 1);
    res.json({ message: 'Usuário removido', usuario: usuarioRemovido });
    return;
  }

  res.status(404).json({ message: 'Usuário não encontrado!' });
};
