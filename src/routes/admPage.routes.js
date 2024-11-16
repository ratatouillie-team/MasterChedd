const express = require('express')
const router = express.Router()

const admPageController = require('../controllers/admPageController')
const eventoController = require('../controllers/eventosController')
const menuController = require('../controllers/menuController')
const autenticar = require('../middlewares/autenticar')
const { uploadBanner, uploadPrato } = require('../middlewares/multer');

router.get('/administracao', autenticar.protegerRotaAdmin, admPageController.exibirPaginaAdm);
router.post('/criar-evento', uploadBanner.single('file'), eventoController.adicionarEventos);
router.post('/adicionar-prato', uploadPrato.single('file'), menuController.adicionarPrato);

module.exports = router