const express = require('express');
const router = express.Router();

const usuariosController = require('../controller/usuariosController');

const validarUsuario = require('../middlewares/validarUsuario');
const authorizationToken = require('../middlewares/authorizationHandle');
const mascaraEmail = require('../middlewares/mascaraEmail');

router.get(
  '/',
  authorizationToken,
  mascaraEmail,
  usuariosController.listarUsuarios
);
router.post(
  '/',
  authorizationToken,
  validarUsuario,
  usuariosController.criarUsuarios
);

router.put('/:id', usuariosController.atualizarUsuarios);
router.delete('/:id', usuariosController.removerUsuarios);

module.exports = router;
