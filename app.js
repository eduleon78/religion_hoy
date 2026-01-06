//Imports
import express from 'express'
import path from 'path'
import cors from 'cors'
import helmet from 'helmet'
import logger from 'morgan'

import routes from './routes/rHome.js'

//Initialization
const __dirname = process.cwd()
const port = 3000
const app = express()


//Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


//Middlewares
app.use(cors())
app.use(helmet())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//Routes
app.use(routes)


//Public files
app.use(express.static(path.join(__dirname, 'public')))


//Run server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)    
})
