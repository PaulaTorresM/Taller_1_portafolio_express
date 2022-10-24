const express = require('express');
const router = express.Router();


router.get('/perfil', (req, res) =>{
    res.render('perfil');
});

router.get('/Experiencia', (req, res) => {
    res.render('Experiencia')
});

router.get('/Estudios', (req, res) => {
    res.render('Estudios');
});


module.exports = router;