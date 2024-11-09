const express = require('express');
const router = express.Router();

const eventosController = require('../controllers/eventosController');
const autenticar = require('../middlewares/autenticar')




router.get('/eventos', autenticar.protegerRotaAdmin, eventosController.exibirEventos);
router.get('/criar-eventos', autenticar.protegerRotaAdmin, eventosController.exibirCriarEventos)
router.post('/criar-evento', eventosController.adicionarEventos);

module.exports = router