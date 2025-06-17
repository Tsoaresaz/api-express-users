const usuariosRepository = require('../../../repositories/usuariosRepository');

exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await usuariosRepository.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao listar usuários', error: error.message });
  }
};

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({ message: 'Nome e e-mail são obrigatório' });
    }

    const novoUsuario = await usuariosRepository.criarUsuario(nome, email);
    res
      .status(201)
      .json({ message: 'Usuário criado com sucesso', usuario: novoUsuario });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao criar usuário', error: error.message });
  }
};
