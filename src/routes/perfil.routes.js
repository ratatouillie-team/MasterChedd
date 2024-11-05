const express = require('express')
const router = express.Router()

const perfilController = require('../controllers/perfilController')
const upload = require('../middlewares/multer');
const autenticar = require('../middlewares/autenticar');

router.get('/perfil', autenticar.protegerRotaUsuario, perfilController.exibirPaginaPerfil)
router.post('/file', autenticar.protegerRotaUsuario, upload.single('file'), perfilController.enviarArquivo);
router.post('/atualizar', autenticar.protegerRotaUsuario, perfilController.atualizarPerfil)


module.exports = router