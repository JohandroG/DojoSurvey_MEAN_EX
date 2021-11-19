const express = require('express');
const app = express();

app.set( 'views', __dirname + '/views' ); 
app.set( 'view engine', 'ejs' );
app.use(express.static(__dirname + "/static"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


let dojoinfo = {}

app.get('/', function( request, response ){
	response.render( 'form' ); 
});

app.get('/info', function( request, response ){
	response.render( 'display', {dojoinfo} ); 
});




app.post( '/submit/info', function(request,response){
    console.log( request.body );
	const name = request.body.yname;
	const location = request.body.location;
	const language = request.body.language;
	const comment = request.body.comment;

	dojoinfo.name = name;
	dojoinfo.location = location;
	dojoinfo.language = language;
	dojoinfo.comment = comment;
	
	response.redirect( '/info' )
})

app.listen(8080, function(){
    console.log('Hello')
})