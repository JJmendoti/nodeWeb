const express = require('express');
const app = express();
const path = require('path'); // para unir directorios y ver en que sistema operativo estoy 


// configuraciones
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');


//middlewares // funciones que se ejecutan antes de que las rutas procesen algo


//rutas de mi servidor
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


//escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});