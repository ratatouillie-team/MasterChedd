const express = require('express')
const router = express.Router()

const admPageController = require('../controllers/admPageController')
const eventoController = require('../controllers/eventosController')
const menuController = require('../controllers/menuController')
const autenticar = require('../middlewares/autenticar')
const { uploadBanner, uploadPrato } = require('../middlewares/multer');

router.get('/administracao', autenticar.protegerRotaAdmin, admPageController.exibirPaginaAdm);
router.post('/atribuir-admin', autenticar.protegerRotaAdmin, admPageController.adicionarPermissao)

router.post('/criar-evento', autenticar.protegerRotaAdmin, uploadBanner.single('file'), eventoController.adicionarEventos);
router.post('/editar-evento', autenticar.protegerRotaAdmin, uploadBanner.single('file'), eventoController.editarEvento);
router.post('/remover-evento', autenticar.protegerRotaAdmin, eventoController.removerEvento);

router.post('/adicionar-prato', autenticar.protegerRotaAdmin, uploadPrato.single('file'), menuController.adicionarPrato);
router.post('/editar-prato', autenticar.protegerRotaAdmin, uploadPrato.single('file'), menuController.editarPrato);
router.post('/remover-prato', autenticar.protegerRotaAdmin, menuController.removerPrato);

router.post('/adicionar-pratododia', autenticar.protegerRotaAdmin, menuController.adicionarPratoDoDia);
router.post('/remover-pratododia', autenticar.protegerRotaAdmin, menuController.removerPratoDoDia);

module.exports = router