// server.js


var budo = require('budo')
var babelify = require('babelify')

budo('./dev/index.js', {
  live: true,             // live reload
  stream: process.stdout, // log to stdout
  port: 8088,             // use this as the base port
  dir: 'dev',
  browserify: {
    transform: babelify   // use ES6
  }
}).on('connect', function(ev) {
  //...
})