const express = require('express');
const morgan = require('morgan'); //middleware
const exphbs = require('express-handlebars');
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
   defaultLayout: 'main',
   layoutsDir: path.join(app.get('views'), 'layouts'),
   partialsDir: path.join(app.get('views'), 'partials'),
   extname: '.hbs',
   helpers: require('./src/lib/handlebars'),
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global variables
app.use((req, res, next) => {
   next();
});

//Routs
app.use(require('./src/routes'))
app.use(require('./src/routes/authentication'));
app.use('./link', require('./src/routes/links'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Starting server
app.listen(app.get('port'), () => {
   console.log('Servidor abiero en localhost:', app.get('port'));
});
