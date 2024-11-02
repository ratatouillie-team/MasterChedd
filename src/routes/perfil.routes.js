const express = require('express')
const router = express.Router()

const perfilController = require('../controllers/perfilController')
const upload = require('../middlewares/multer');
const autenticar = require('../middlewares/autenticar');

router.get('/perfil',autenticar.protegerRotausuario, perfilController.exibirPaginaPerfil)
router.post('/file', autenticar.protegerRotausuario, upload.single('file'), perfilController.enviarArquivo);


module.exports = router