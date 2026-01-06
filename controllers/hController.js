import modelos from '../models/hModel.js'

const getHome = (req, res) => {
    res.render('pages/index', { title: "Pagina de Inicio", modelos})
}

const getAllSantos = (req, res) => {
    res.render('pages/santoral', { title: "Santoral", modelos})
}

const getAllOraciones = (req, res) => {
    res.render('pages/oraciones', { title: "Oraciones", modelos})
}

const padreNuestro = (req, res) => {
    res.render('pages/oraciones/padreNuestro', { title: "Padre Nuestro", modelos})
}

const aveMaria = (req, res) => {
    res.render('pages/oraciones/aveMaria', { title: "Ave María", modelos})
}

const gloriaPadre = (req, res) => {
    res.render('pages/oraciones/gloriPadre', { title: "Gloria al Padre", modelos})
}

const credo = (req, res) => {
    res.render('pages/oraciones/credo', { title: "Credo", modelos})
}

export default {
    getHome,
    getAllSantos,
    getAllOraciones,
    padreNuestro,
    aveMaria,
    gloriaPadre,
    credo
}