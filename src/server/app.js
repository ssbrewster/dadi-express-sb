/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./routes'));

console.log('About to crank up node');

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
