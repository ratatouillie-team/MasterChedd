const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.get('/login', loginController.exibirLogin);
router.post('/autenticar', loginController.logarUsuario);


module.exports = router