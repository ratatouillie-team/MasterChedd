const express = require('express');
const sacolaController = require('../controllers/sacolaController');

const router = express.Router();

router.get('/sacola', sacolaController.exibirSacola);

module.exports = router