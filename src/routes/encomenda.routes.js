const express = require('express');
const router = express.Router();

const encomendaController = require('../controllers/encomendaController');
const autenticar = require('../middlewares/autenticar')


router.get('/encomenda',/*autenticar.protegerRotaUsuario,*/ encomendaController.exibirEncomenda);

module.exports = router