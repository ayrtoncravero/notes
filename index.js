const express = require('express');
const morgan = require('morga'); //middleware

//Inicializaciones
const  app = express();

configuraciones
app.set('port', process.envPORT || 3000);

//middlewares
app.use(morgan('dev'));

//variables globales

//rutas

//public

//starting server
app.listen(app.get('port'), () => {
   console.log('Servidor disponible en localhost:', app.get('port'));
});