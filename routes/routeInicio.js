import express from 'express'
var router = express.Router()
import inicioController from '../controllers/inicioController.js'

router.get('/', inicioController.getHome)

export default router
