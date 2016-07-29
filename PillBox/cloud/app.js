
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var expressLayouts = require('cloud/express-layouts.js');
var router = require('cloud/routes/router.js');

var parseExpressHttpsRedirect = require('parse-express-https-redirect');
var parseExpressCookieSession = require('parse-express-cookie-session');

var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(expressLayouts);
app.use(parseExpressHttpsRedirect());
app.use(express.cookieParser('austinflood'));
app.use(parseExpressCookieSession({ cookie: { maxAge: 3600000 } }));
app.use(express.bodyParser());    // Middleware for reading request body
app.use(express.methodOverride());
app.use(app.router);

app.locals.parseAppId = 'cVCXx230pxGtW477Sb6JT5i9j25JVzjk5NTxVuZA';
app.locals.parseJsKey = 'aQKAcRhwWxyvaFW8f6rSPGGvzBHZlXNlPZvnjJlx';
app.locals.title = 'Pillbox';

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/', router.home);
app.get('/login', router.login);
app.post('/login', router.loginSubmit);
app.get('/signup', router.signup);
app.post('/signup', router.signupSubmit);
app.get('/logout', router.logout);
app.get('/history',router.history);
app.post('/history',router.historyPost);
app.get('/schedule',router.schedule);
// Attach the Express app to Cloud Code.
app.listen();
