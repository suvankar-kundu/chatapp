// Dependencies
const dotenv = require("dotenv");
const dotenvParseVariables = require('dotenv-parse-variables');
// Parse config file
global.dotenv = dotenv;
let env = dotenv.load();
if (env.error) throw env.error;
env = dotenvParseVariables(env.parsed);
process.env = env;
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const compress = require('compression');
const expressValidation = require('express-validation');
const helmet = require('helmet');


var apis = require('./app/routes/apis');
const i18n = require("i18n");
//import logger file
require('./app/Utils/logger');

var app = express();
app.set('port', process.env.PORT);
app.set('host', process.env.HOST);

// Express Configuration
// -----------------------------------------------------
// Sets the connection to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
    useMongoClient: true
});
mongoose.set('debug', function (coll, method, query, doc) {});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log("DB connection successful");
});
// Logging and Parsing

let oneYear = 1 * 365 * 24 * 60 * 60 * 1000;
// compress all responses
app.use(compress());
// Caches the static files for a year.
app.use('/', express.static(__dirname + '/public/', {
    maxAge: oneYear
}));

app.use(morgan('dev')); // log with Morgan
//app.use(bodyParser.json()); 
app.use(bodyParser.json({
    limit: '50mb',
    type: 'application/json'
})); // parse application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // parse application/x-www-form-urlencoded                                   // allows bodyParser to look at raw text
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(compress());
// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//language file config
i18n.configure({
    locales: ['en'],
    directory: __dirname + '/app/locales'
});
global.i18n = i18n;
// Routes
// ------------------------------------------------------
app.use('/API/V1/', apis);

// if error is not instanceOf ValidationError, convert it.
app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        // validation error contains errors which is an array of error each containing message[]
        const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
        var err = new Error(unifiedErrorMessage);
        err.status = 403;
    }
    return next(err);
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});


// production error handler
// no stacktraces leaked to user
if (app.get('env') === 'production') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: {}
        });
    });
}


/*
 |--------------------------------------------------------------------------
 | Start the Server
 |--------------------------------------------------------------------------
 */

var server = app.listen(app.get('port'), app.get('host'), function () {
    console.info('Process ' + process.pid + ' is listening to all incoming requests on port ' + app.get('port'));
});

//socket.io instantiation
const io = require("socket.io")(server)


//listen on every connection
io.on('connection', (socket) => {
	console.log('New user connected')

	//default username
	socket.username = "Anonymous"


    socket.on('adduser', function(username){
		// store the username in the socket session for this client
		socket.username = username;
		// store the room name in the socket session for this client
		socket.room = 'room1';
		// send client to room 1
		socket.join('room1');
		// echo to client they've connected
		socket.emit('updatechat', 'SERVER', 'you have connected to room1');
		// echo to room 1 that a person has connected to their room
		socket.broadcast.to('room1').emit('updatechat', 'SERVER', username + ' has connected to this room');
	
	});




    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', {message : data.message, username : data.user});
    })

    //listen on typing
    socket.on('typing', (data) => {
    	socket.broadcast.emit('typing', {username : socket.username})
    })
})

process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err);
    process.exit(1);
});