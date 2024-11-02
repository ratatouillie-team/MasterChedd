const express = require('express');
const eventosController = require('../controllers/eventosController');

const router = express.Router();

router.get('/eventos', eventosController.exibirEventos);
router.post('/criar-evento', eventosController.adicionarEventos);

module.exports = router