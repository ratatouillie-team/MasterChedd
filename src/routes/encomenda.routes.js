const express = require('express');
const encomendaController = require('../controllers/encomendaController');

const router = express.Router();

router.get('/encomenda', encomendaController.exibirEncomenda);

module.exports = router