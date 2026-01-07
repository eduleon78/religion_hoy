import express from 'express'
var router = express.Router()
import religionController from '../controllers/religionController.js'

router.get('/home-religion', religionController.homeReligion)
router.get('/santoral', religionController.getAllSantos)
router.get('/oraciones', religionController.getAllOraciones)
router.get('/padreNuestro', religionController.padreNuestro)
router.get('/aveMaria', religionController.aveMaria)
router.get('/gloriaPadre', religionController.gloriaPadre)

export default router