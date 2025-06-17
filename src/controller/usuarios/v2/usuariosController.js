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

exports.atualizarUsuario = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res
        .status(400)
        .json({ message: 'Nome e e-mail são obrigatórios' });
    }

    const linhasAfetadas = await usuariosRepository.atualizarUsuario(
      id,
      nome,
      email
    );
    if (linhasAfetadas === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado!' });
    }

    res.json({ message: 'Usuário atualizado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o usuário' });
  }
};
