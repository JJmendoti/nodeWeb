const express = require('express');
const router = express.Router();



//rutas de mi servidor
router.get('/', (req, res) => {
    // res.sendFile('D:/Escritorio/mywebnodejs/src/views/index.html');
    // console.log(__dirname + '/views/index.html');
    //console.log(path.join(__dirname, 'views/index.html')); //confirma que estoy en windows
    //res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', { title: "My Primer Web NodeJS" });

});

router.get('/contacto', (req, res) => {
    res.render('contacto.html', { title: "Contactanos" });

});

router.get('/acerca', (req, res) => {
    res.render('acerca.html', { title: "Acerca de" });

});

module.exports = router;