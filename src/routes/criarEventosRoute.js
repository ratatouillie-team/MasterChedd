const express = require('express');
const criarEventosController = require('../controllers/criarEventosController');

const router = express.Router();

router.get('/criar-eventos', criarEventosController.exibirCriarEventos);
router.post('/criar-eventos', criarEventosController.criarEventos);

module.exports = router;