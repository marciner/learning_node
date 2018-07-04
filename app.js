var express = require('express');

var http = require('http');
var path = require('path');

var app = express();

//set to config app
app.set('appName, hello-world');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//definiowanie sciezek

app.all('*', function(req,res){
    //Parametry res.render(nazwaWidoku, dane, wywołanieZwrotne(błąd, html))
    res.render('index', {msg: 'Hello World'});
});

//uruchomienie serwera
http.createServer(app)
    .listen(
        app.get('port'), 
        function(){
            console.log('Serwer na porcie ' + app.get('port')
            );
        }
    );