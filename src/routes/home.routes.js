const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();

router.get('/', homeController.exibirHome);
router.post('/avaliar/:id', homeController.avaliarPrato);

module.exports = router