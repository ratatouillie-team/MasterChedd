const express = require('express');
const criarEventosController = require('../controllers/criarEventosController');
const protegerRotausuario = require('../middlewares/autenticar');

const router = express.Router();

router.get('/criar-eventos'/*,protegerRotausuario.protegerRotaAdmin*/ , criarEventosController.exibirCriarEventos);
router.post('/criar-eventos'/*,protegerRotausuario.protegerRotaAdmin*/ ,criarEventosController.criarEventos);

module.exports = router;