const express = require('express');
const router = express.Router();
const usuariosController = require('../controller/usuariosController');
const validarUsuario = require('../middlewares/validarUsuario');

router.get('/', usuariosController.listarUsuarios);
router.post('/', validarUsuario, usuariosController.criarUsuarios);
router.put('/:id', usuariosController.atualizarUsuarios);
router.delete('/:id', usuariosController.removerUsuarios);

module.exports = router;
