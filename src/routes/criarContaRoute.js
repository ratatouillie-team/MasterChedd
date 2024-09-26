const express = require('express');
const criarContaController = require('../controllers/criarContaController');

const router = express.Router();

router.get('/criar-conta', criarContaController.exibirCriarConta);
router.post('/user-dados', criarContaController.criarConta);

module.exports = router