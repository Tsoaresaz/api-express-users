const express = require('express');
const router = express.Router();

const usuariosController = require('../../../controller/usuarios/v2/usuariosController');

const authorizationToken = require('../../../middlewares//authorizationHandle');
const validarUsuario = require('../../../middlewares/usuarios/v2/validarUsuarios');

router.get('/', authorizationToken, usuariosController.listarUsuarios);
router.post(
  '/',
  validarUsuario,
  authorizationToken,
  usuariosController.criarUsuario
);
router.put('/:id', authorizationToken, usuariosController.atualizarUsuario);
router.delete('/:id', authorizationToken, usuariosController.deletaUsuario);

module.exports = router;
