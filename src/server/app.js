/*jshint node:true*/
'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('./utils/logger.js'),
    morgan = require('morgan');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./routes'));

console.log('About to crank up node');

app.use(morgan('common', {'stream': logger.stream}));
app.use(express.static('./src/client/'));
app.use(express.static('./'));
// Any deep link calls should return index.html
app.use('/*', express.static('./src/client/index.html'));

app.start = function() {
    var server = app.listen(3000, function() {
        var baseUrl = ('http://') + server.address().host + 
            ':' + server.address().port;
        app.set('url', baseUrl);
        app.emit('started', baseUrl);
        console.log('Express server listening on port ' + server.address().port);
        console.log('env = ' + app.get('env') +
            '\n__dirname = ' + __dirname  +
            '\nprocess.cwd = ' + process.cwd());
    });

    return server;
};

app.start();
module.exports = app;
