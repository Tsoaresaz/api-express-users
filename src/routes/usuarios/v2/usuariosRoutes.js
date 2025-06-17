const express = require('express');
const router = express.Router();

const usuariosController = require('../../../controller/usuarios/v2/usuariosController');

const validarUsuario = require('../../../middlewares/usuarios/v2/validarUsuarios');

router.get('/', usuariosController.listarUsuarios);
router.post('/', validarUsuario, usuariosController.criarUsuario);

module.exports = router;
