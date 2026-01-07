import modelos from '../models/hModel.js'

const getHome = (req, res) => {
    res.render('pages/index', { title: "Pagina de Inicio", modelos})
}

export default {
    getHome
}