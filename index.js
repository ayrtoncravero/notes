const express = require('express');
const morgan = require('morgan'); //middleware

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));

//Global variables

//Routs

//Public

//Starting server
app.listen(app.get('port'), () => {
   console.log('Servidor en:', app.get('port'));
});
