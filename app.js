
/**
 * Module dependencies.
 */

var express = require('express');
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compiler({ src: __dirname + '/public', enable: ['sass'] }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.enable('homeIp');
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Jaymes Waters'
  });
});

app.get('/box', function(req, res){
  res.render('box', {
    title: 'Jaymes Waters'
  });
});

app.get('/minecraft', function(req, res) {
  res.render('minecraft', {
      title: 'Minecraft Ip'
    , homeIp: app.set('homeIp')
  });
});

app.post('/update_ip', function(req, res) {
  app.set('homeIp', req.body.ip);
  res.writeHead(200);
  res.end('ok');
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
