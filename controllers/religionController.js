import modelos from '../models/hModel.js'

const homeReligion = (req, res) => {
    res.render('pages/home-religion', { title: "Home", modelos})
}

const getAllSantos = (req, res) => {
    res.render('pages/religion/santoral', { title: "Santoral", modelos})
}

const getAllOraciones = (req, res) => {
    res.render('pages/religion/oraciones', { title: "Oraciones", modelos})
}

const padreNuestro = (req, res) => {
    res.render('pages/religion/padreNuestro', { title: "Padre Nuestro", modelos})
}

const aveMaria = (req, res) => {
    res.render('pages/religion/aveMaria', { title: "Ave María", modelos})
}

const gloriaPadre = (req, res) => {
    res.render('pages/religion/gloriPadre', { title: "Gloria al Padre", modelos})
}

const credo = (req, res) => {
    res.render('pages/religion/credo', { title: "Credo", modelos})
}



export default {
    homeReligion,
    getAllSantos,
    getAllOraciones,
    padreNuestro,
    aveMaria,
    gloriaPadre,
    credo
}