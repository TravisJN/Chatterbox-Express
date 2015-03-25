var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public/'))

var Data = function(){
  this.results = [];
}

var info = new Data();

app.get('/', function(req, res, next){
  res.sendFile(__dirname + '/index.html')
  next();
})

app.get('/classes/messages', function (req, res, next) {
  res.header('Content-Type', 'application/json');
  res.end(JSON.stringify(info));
  next();
})

app.post('/classes/messages', function(request, response, next){
  response.header('Content-Type', 'application/json');
  
  info.results.push(request.body);
  
  response.json(request.body)
});


var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
