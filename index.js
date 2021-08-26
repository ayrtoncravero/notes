const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const mysqlStore = require('express-mysql-session');
const passport = require('passport');

const { database } = require('./keys');

const app = express();
require('../notes/src/lib/passport');

app.set('port', process.env.PORT || 3000);

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars');

app.use(session({
   secret: 'irtonmysqlnodesession',
   resave: false,
   saveUninitialized: false,
   store: new mysqlStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
   app.locals.success = req.flash('success');
   app.locals.message = req.flash('message');
   app.locals.user = req.user;
   next();
});

app.use(require('./src/routes'))
app.use(require('./src/routes/authentication'));
app.use('/links', require('./src/routes/links'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
   console.log('Servidor disponible en localhost:', app.get('port'));
});
