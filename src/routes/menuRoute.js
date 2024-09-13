const express = require('express');
const menuController = require('../controllers/menuController');

const router = express.Router();

router.get('/menu', menuController.exibirMenu);

module.exports = router