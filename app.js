var express = require('express');
var fortune = require('./lib/fortune.js');

var app = express();
//console.log(app);

var handlebars = require('express3-handlebars')
	.create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');	

app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.render('home');

	//res.type('text/html');
	//res.send('Ask ok !');
});

app.get('/about',function(req,res){
	//res.type('text/plain');
	//res.send({'About page ok !':'hello'});
	res.render('about',{fortune:fortune.getFortune()});

});



app.use(function(req,res){

	//res.type('text/html');
	res.status(404);
	res.render('404');
	//res.send('404 - Not Found');
});

app.use(function(err,req,res,next){
	console.log(err.stack);
	res.type('text/html');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
	console.log('Express start on port:' + app.get('port'));
});