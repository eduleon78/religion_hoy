import express from 'express'
var router = express.Router()
import homeController from '../controllers/hController.js'

router.get('/', homeController.getHome)
router.get('/santoral', homeController.getAllSantos)
router.get('/oraciones', homeController.getAllOraciones)
router.get('/padreNuestro', homeController.padreNuestro)
router.get('/aveMaria', homeController.aveMaria)
router.get('/gloriaPadre', homeController.gloriaPadre)
router.get('/credo', homeController.credo)


export default router
