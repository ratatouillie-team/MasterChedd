const express = require('express')
const router = express.Router()

const admPageController = require('../controllers/admPageController')
const autenticar = require('../middlewares/autenticar')

router.get('/administracao', autenticar.protegerRotaAdmin, admPageController.exibirPaginaAdm)

module.exports = router