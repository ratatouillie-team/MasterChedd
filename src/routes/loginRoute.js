const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.get('/login', loginController.exibirLogin);
router.post('/autenticar', loginController.logarUsuario);
router.get('/deslogar', loginController.deslogarUsuario);


module.exports = router