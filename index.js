// ************ Imports **************
const fs = require('fs');
var express = require('express');
var app = express();
var backend = require('http').createServer(app);
var io = require('socket.io').listen(backend);

socket_forb = [];
brugere = [];
rum = [];
bruger_rum = {};
var given_room = '';

app.use(express.static(__dirname + '/')); // serve vores app

// endpoint to GET all movies
app.get('/getvideos', function(req, res) {
    dir = 'movies/'
    files_seen = []
    fs.readdir(dir, (err, files) => {
      files.forEach(file    => {
        files_seen.push(file)
      });
      res.json(files_seen)
    });
});